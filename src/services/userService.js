import userRepository from '../repositories/userRepository';

class userService {
    constructor() {
        this._userRepository = new userRepository();
    }

    async register(data) {
        data.email = data.email ? data.email.trim() : '';
        data.account_type = data.account_type ? data.account_type.trim() : '';
        if (data.email === null || data.email === '') {
            throw new AppError({ message: 'Email is required' });
        } else {
            let isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                data.email
            );
            if (!isValid) {
                throw new AppError({ message: 'Email is not valid' });
            }
        }
        if (data.account_type === null || data.account_type === '') {
            throw new AppError({ message: 'Account type is required' });
        } else {
            let account_type = ['facebook', 'google'];
            if (!account_type.includes(data.account_type)) {
                throw new AppError({ message: '' });
            }
        }
        // check existing user by email
        let users = await this._userRepository.findUser({ email: data.email });
        if (users.length > 0) {
            let user = users[0];
            throw new AppError({
                message: `This email is already registed with ${user.account_type}.`,
            });
        }
        let newUser = await this._userRepository.create(data);
        return newUser;
    }

    async updateProfile(data) {
        data.email = data.email ? data.email.trim() : '';
        if (data.email === null || data.email === '') {
            throw new AppError({ message: 'Email is required' });
        } else {
            let isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                data.email
            );
            if (!isValid) {
                throw new AppError({ message: 'Email is not valid' });
            }
        }
        let users = await this._userRepository.findUser({ email: data.email });
        if (users.length > 0) {
            let user = users[0];
            if (user.account_type === 'facebook') {
                data.fullname = data.fullname ? data.fullname.trim() : '';
                data.phone = data.phone ? data.phone.trim() : '';
                if (data.fullname === '') {
                    throw new AppError({ message: 'Full name is required' });
                }
                if (data.phone === '') {
                    throw new AppError({ message: 'Phone is required' });
                } else {
                    let isValid = /^\+?\d{9,15}$/.test(data.phone);
                    if (!isValid) {
                        throw new AppError({ message: 'Phone is not valid' });
                    }
                }
            }
            if (user.account_type === 'google') {
                data.fullname = data.fullname ? data.fullname.trim() : '';
                data.profession = data.profession ? data.profession.trim() : '';
                if (data.fullname === '') {
                    throw new AppError({ message: 'Full name is required' });
                }
                if (data.profession === '') {
                    throw new AppError({ message: 'Profession is required' });
                }
            }
            data.is_authenticated = true;
            let result = await this._userRepository.update(user.id, data);
            return result;
        }
    }
}

export default new userService();

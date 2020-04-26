import blogRepository from '../repositories/blogRepository';
import userRepository from '../repositories/userRepository';

let _ = require('lodash');

class blogService {
    constructor() {
        this._userRepository = new userRepository();
        this._blogRepository = new blogRepository();
        this.maxWords = 20;
    }

    async create(data) {
        data.user_id = data.user_id ? data.user_id : '';
        data.title = data.title ? data.title.trim() : '';
        data.content = data.content ? data.content.trim() : '';

        if (data.user_id === '') {
            throw new AppError({ message: 'User ID is required' });
        }
        let user = await this._userRepository.findUser({ id: data.user_id });
        if (user.length > 0) {
            user = user[0];
        } else {
            throw new AppError({ message: 'Could not find user' });
        }
        if (!user.is_authenticated) {
            throw new AppError({
                message: 'User must provide needed information',
            });
        }
        data.created_by = user.id;
        if (data.title === '') {
            throw new AppError({ message: 'Title is required' });
        }
        if (data.content === '') {
            throw new AppError({ message: 'Content is required' });
        }
        data.likes = [];
        let blog = await this._blogRepository.create(data);
        return blog;
    }

    async list(query) {
        let blogs = await this._blogRepository.list(query);
        blogs = await this.buildBlogData(blogs);
        return blogs;
    }

    async getByUser(query) {
        if (query.user_id === null) {
            throw new AppError({ message: 'User id is required' });
        }
        // check existing user
        let user = await this._userRepository.findUser({ id: query.user_id });
        if (user.length > 0) {
            user = user[0];
        } else {
            throw new AppError({ message: 'Could not find user' });
        }
        let blogs = await this._blogRepository.list(query);
        blogs = await this.buildBlogData(blogs);
        return blogs;
    }

    async getDetail(id) {
        let blog = await this._blogRepository.findOne(id);
        return blog;
    }

    async buildBlogData(blogs) {
        let userIDs = [];
        blogs.map((e) => {
            e.likes = JSON.parse(e.likes);
            userIDs = userIDs.concat(e.likes);
        });
        let users = await this._userRepository.findUser({
            ids: _.uniq(userIDs),
        });
        for (let blog of blogs) {
            blog.preview = blog.content;
            if (blog.preview.length > this.maxWords) {
                let splitPreview = blog.preview.split(' ');
                blog.preview = splitPreview.slice(0, this.maxWords).join(' ');
            }
            blog.likeUser = [];
            if (blog.likes.length > 0) {
                for (let like of blog.likes) {
                    let user = users.find((e) => e.id === like);
                    if (typeof user !== 'undefined') {
                        blog.likeUser.push(user.fullname);
                    }
                }
            }
            delete blog.likes;
        }
        return blogs;
    }
}

export default new blogService();

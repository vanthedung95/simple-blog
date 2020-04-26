import userService from '../services/userService';

export default class userController {
    async register(req, res, next) {
        try {
            let data = req.body;
            let result = await userService.register(data);
            res.sendJson({ message: 'User is registed.', data: result });
        } catch (err) {
            console.log(err);
            res.sendError(err);
        }
    }

    async updateProfile(req, res, next) {
        try {
            let result = await userService.updateProfile(req.body);
            if (result) {
                res.sendJson({ message: 'Update profile successfully.' });
            } else {
                res.sendJson({ message: 'Something went wrong.' });
            }
        } catch (err) {
            console.log(err);
            res.sendError(err);
        }
    }
}

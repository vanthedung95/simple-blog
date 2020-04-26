import blogService from '../services/blogService';

export default class blogController {
    async create(req, res, next) {
        try {
            let data = req.body;
            let result = await blogService.create(data);
            res.sendJson({ data: result });
        } catch (err) {
            console.log(err);
            res.sendError(err);
        }
    }

    async list(req, res, next) {
        try {
            let params = req.query;
            let result = await blogService.list(params);
            res.sendJson({ data: result });
        } catch (err) {
            console.log(err);
            res.sendError(err);
        }
    }

    async getByUser(req, res, next) {
        try {
            let params = req.query;
            let result = await blogService.getByUser(params);
            res.sendJson({ data: result });
        } catch (err) {
            console.log(err);
            res.sendError(err);
        }
    }

    async getDetail(req, res, next) {
        try {
            let blogID = req.params.id;
            let result = await blogService.getDetail(blogID);
            res.sendJson({ data: result });
        } catch (err) {
            console.log(err);
            res.sendError(err);
        }
    }
}

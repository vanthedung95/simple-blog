import Blog from '../models/blog';
import sequelize from '../connections';

export default class blogRepository {
    async create(data) {
        let t = await sequelize.transaction();
        try {
            let blog = new Blog();
            blog.setTitle(data.title);
            blog.setContent(data.content);
            blog.setLikes(data.likes);
            blog.setCreatedBy(data.created_by);
            await blog.save();
            await t.commit();
            return blog;
        } catch (err) {
            await t.rollback();
            throw err;
        }
    }

    async list(filter) {
        let select = `SELECT * FROM blogs`;
        let where = `WHERE 1=1`;
        if (filter.user_id) {
            where += ` AND created_by = :user_id`;
        }
        let order_by = `ORDER BY created_at`;
        let sql = `${select} ${where} ${order_by}`;
        return await sequelize.query(sql, {
            replacements: filter,
            type: sequelize.QueryTypes.SELECT,
        });
    }

    async findOne(id) {
        return await Blog.findOne({ where: { id } });
    }
}

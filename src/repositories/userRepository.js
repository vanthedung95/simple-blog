import sequelize from '../connections';
import User from '../models/user';

export default class userRepository {
    async findUser(filter = {}) {
        let query = `select * from users`;
        let where = ` WHERE 1=1`;
        if (filter.email) {
            where += ` and email = :email`;
        }
        if (filter.id) {
            where += ` and id = :id`;
        }
        if (filter.ids && filter.ids.length > 0) {
            where += ` and id IN (:ids)`;
        }

        return await sequelize.query(query + where, {
            replacements: filter,
            type: sequelize.QueryTypes.SELECT,
        });
    }

    async create(data) {
        let t = await sequelize.transaction();
        try {
            let user = new User();
            user.setEmail(data.email);
            user.setAccountType(data.account_type);
            user.setIsAuthenticated(false);
            await user.save();
            await t.commit();
            return user;
        } catch (err) {
            await t.rollback();
            throw err;
        }
    }

    async update(id, data) {
        let t = await sequelize.transaction();
        try {
            let user = await User.update(
                { ...data, updated_at: new Date() },
                {
                    where: { id: id },
                    transaction: t,
                }
            );
            await t.commit();
            return user;
        } catch (err) {
            await t.rollback();
            return err;
        }
    }
}

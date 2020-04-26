import Sequelize from 'sequelize';
import config from './config/index';

let sequelize = new Sequelize(
    config.MYSQL.db,
    config.MYSQL.username,
    config.MYSQL.password,
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        timezone: '+07:00',
        define: {
            timestamps: false,
        },
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established. . .');
    })
    .catch((err) => {
        console.log('Unable to connect to the database: ', err);
    });

module.exports = sequelize;

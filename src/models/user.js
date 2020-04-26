import { Model, DataTypes } from 'sequelize';
import sequelize from '../connections';
import { Options, Attributes } from 'sequelize-decorators';

@Options({
    sequelize,
    tableName: 'users',
})
@Attributes({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    account_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_authenticated: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW,
    },
})
export default class User extends Model {
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getAccountType() {
        return this.account_type;
    }

    setAccountType(account_type) {
        this.account_type = account_type;
    }

    getFullname() {
        return this.fullname;
    }

    setFullname(fullname) {
        this.fullname = fullname;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getProfession() {
        return this.profession;
    }

    setProfession(profession) {
        this.profession = profession;
    }

    getIsAuthenticated() {
        return this.is_authenticated;
    }

    setIsAuthenticated(is_authenticated) {
        this.is_authenticated = is_authenticated;
    }

    getCreatedAt() {
        return this.created_at;
    }

    setCreatedAt(created_at) {
        this.created_at = created_at;
    }

    getUpdatedAt() {
        return this.updated_at;
    }

    setUpdatedAt(updated_at) {
        this.updated_at = updated_at;
    }
}

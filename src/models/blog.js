import { Model, DataTypes } from 'sequelize';
import sequelize from '../connections';
import { Options, Attributes } from 'sequelize-decorators';

@Options({
    sequelize,
    tableName: 'blogs',
})
@Attributes({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW,
    },
})
export default class Blog extends Model {
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getContent() {
        return this.content;
    }

    setContent(content) {
        this.content = content;
    }

    getLikes() {
        return this.likes;
    }

    setLikes(likes) {
        this.likes = likes;
    }

    getCreatedAt() {
        return this.created_at;
    }

    setCreatedAt(created_at) {
        this.created_at = created_at;
    }

    getCreatedBy() {
        return this.created_by;
    }

    setCreatedBy(created_by) {
        this.created_by = created_by;
    }

    getUpdatedAt() {
        return this.updated_at;
    }

    setUpdatedAt(updated_at) {
        this.updated_at = updated_at;
    }
}

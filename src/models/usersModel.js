import db from "../database/db.js";
import paisModel from "./paisModel.js";

import { DataTypes, DATE, STRING } from "sequelize";

const usersModel = db.define('users', {
    user_id: {
        type: DataTypes.INTEGER(45),
        primaryKey: true,
        autoIncrement:true
    },
    names: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    first_last_name: {
        type: STRING(50),
        allowNull: false
    },
    second_last_name: {
        type: STRING(50),
        allowNull: false
    },
    curp: {
        type: STRING(18),
        allowNull: false,
        unique: true
    },
    rfc: {
        type: STRING(13),
        allowNull: false,
        unique: true
    },
    email: {
        type: STRING(50),
        allowNull:false,
        unique: true
    },
    password: {
        type: STRING(72),
        allowNull: false
    },
    birthdate: {
        type: DATE,
        allowNull: true
    },
    gender: {
        type: STRING(10),
        allowNull: true
    },
    countryOfBirth: {
        type: STRING(45),
        allowNull: true
    }
},
{
    freezeTableName: true,
    timestamps:false
});

usersModel.belongsTo(paisModel, {
    foreignKey: 'countryOfBirth',
    targetKey: 'id_pais'
});

export default usersModel;

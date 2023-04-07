import db from "../database/db";

import { DataTypes } from "sequelize";

const coloniaModel = db.define('colonia', {
    id_colonia: {
        type: DataTypes.STRING(45),
        primaryKey: true,
        autoIncrement:false
    },
    nombre_colonia: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    id_cp: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps: false
})
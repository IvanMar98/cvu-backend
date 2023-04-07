import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const cpModel = db.define('cp', {
    id_cp: {
        type: DataTypes.STRING(45),
        primaryKey: true,
        autoIncrement:false
    },
    cp: {
        type: DataTypes.STRING(45),
        allowNull:false
    },
    id_municipio: {
        type: DataTypes.STRING(45),
        allowNull:false
    }
},
{
    freezeTableName: true,
    timestamps:true
});

export default cpModel;
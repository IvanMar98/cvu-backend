import db from '../database/db.js';

import { DataTypes } from 'sequelize';
import estadoModel from './estadoModel.js';

const municipioModel = db.define('municipio', {
    id_municipio: {
        type: DataTypes.STRING(45),
        primaryKey: true,
        autoIncrement:false
    },
    nombre_municipio: {

        type: DataTypes.STRING(100),
        allowNull: false
    },

    id_estado: {
        type: DataTypes.STRING(45),
        allowNull:false
    }
},
{
    freezeTableName: true,
    timestamps:false
});

export default estadoModel;
// importamos la conexion de la base de datos
import db from '../database/db.js';

// importamos de sequelize
import {DataTypes, STRING} from 'sequelize'


const registryModel = db.define('registries', {
    registry_id: {
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
        allowNull: false
    },
    rfc: {
        type: STRING(13),
        allowNull: false
    },
    email: {
        type: STRING(50),
        allowNull:false
    },
    password: {
        type: STRING(10),
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps:false
});

export default registryModel;
// importamos la conexion de la base de datos
import db from '../database/db.js';
import usersModel from './usersModel.js';
import bcrypt from 'bcrypt';


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
        allowNull: false,
        unique:true
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
        allowNull: false,
    }
},
{
    freezeTableName: true,
    timestamps:false
});

usersModel.belongsTo(usersModel, {
    foreignKey: 'registry_id'
});

// Hook para encriptar contraseña antes de guardar
registryModel.addHook('beforeCreate', async (registry, options) => {
    const saltRounds = 10; // Nivel de complejidad de la encriptación
    registry.password = await bcrypt.hash(registry.password, saltRounds);
});

registryModel.addHook('afterCreate', async (registry, options) => {
    try {
        await usersModel.create({
            registry_id: registry.registry_id,
            names: registry.names,
            first_last_name: registry.first_last_name,
            second_last_name: registry.second_last_name,
            curp: registry.curp,
            rfc: registry.rfc,
            email: registry.email,
            password: registry.password, // Considera encriptar esta contraseña
        });
        console.log(`Usuario creado automáticamente para el registro ID: ${registry.registry_id}`);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
    }
});

export default registryModel;
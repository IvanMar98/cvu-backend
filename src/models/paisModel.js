// importamos la conexion de la base de datos
import db from '../database/db.js'

// importamos de sequelize
import {DataTypes, Sequelize} from 'sequelize'

//definimos el modelo

const paisModel = db.define('pais', {
    id_pais: {
        type: DataTypes.STRING(45),
        primaryKey: true,
        autoIncrement:false
    },
    nombre_pais: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps:false
});

//exportamos el modelo 
export default paisModel;
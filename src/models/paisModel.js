// importamos la conexion de la base de datos
import db from '../database/db.js';
//importamos modelo de los estados
import estadoModel from './estadoModel.js';

// importamos de sequelize
import {DataTypes} from 'sequelize'

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

/**
 *  relacion con modelo estado
 * id_pais es foreign key en tabla estado
*/

paisModel.hasMany(estadoModel, {
    foreignKey: 'id_pais'
});
estadoModel.belongsTo(paisModel, {
    foreignKey: 'id_pais'
});

await paisModel.sync();
await estadoModel.sync();
//exportamos el modelo 
export default paisModel;
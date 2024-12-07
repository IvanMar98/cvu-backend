import { Sequelize } from "sequelize"; 
const db = new Sequelize('caceiv2', 'root', 'rootroot',
{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
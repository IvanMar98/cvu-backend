import { Sequelize } from "sequelize"; 
const db = new Sequelize('cvu2', 'root', '5545im',
{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
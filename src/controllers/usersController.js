import usersModel from "../models/usersModel.js";

/**
 * Crear un nuevo registro
 */
export const createNewUser = async(req, res) =>{
    try {
        const newUser = await usersModel.create(req.body);
        if(!newUser){
            res.status(400).send({
                status: 'error',
                message:'User failed created'
            });
        }else{
            res.status(201).send({
                status: 'succes',
                data: newUser
            });
            console.log(newUser)
        }
    } catch (error) {
        console.log(error);
    }
};
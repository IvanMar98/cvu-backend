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
                status: 'success',
                data: newUser
            });
            console.log(newUser)
        }
    } catch (error) {
        console.log(error);
    }
};

export const getInfoUser = async(req, res) => {
    try {
        const user = await usersModel.findByPk(req.params.user_id);
        if(user === null) {
            res.status(404).send({
                status: 'error',
                message: 'User not found'
            });
        }else {
            res.status(200).send({
                status: 'success',
                data: user
            });
        }
    } catch (error) {
        console.log(error);
    }
}
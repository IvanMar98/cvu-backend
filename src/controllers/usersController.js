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

export const getUsers = async(req, res) => {
    try {
        const users = await usersModel.findAll();
        if(users.length <= 0) {
            res.status(400).send({
                status: 'error',
                message: 'No hay informacion disponible'
            })
        }else {
            res.status(200).send({
                status: 'success',
                data: users
            })

        }
    } catch (error) {
        
    }
}

export const getInfoUser = async(req, res, next) => {
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
        next(error);
    }
}

export const updateInfoUser = async (req, res, next) => {

    try {
        const findUser = await usersModel.findByPk(req.params.user_id);
        if(!findUser) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }
        console.log('update info',req.body)
        await usersModel.update(req.body, {
            where: {user_id:req.params.user_id}
        });
        const userUpdated = await usersModel.findByPk(req.params.user_id);
        return res.status(201).json({
            status: "success",
            data: userUpdated
        });
    } catch (error) {
        next(error);
    }
}
import registryModel from "../models/registryModel.js";

/**
 * Crear un nuevo registro
 */
export const createNewRegistry = async(req, res) =>{
    try {
        const newRegistry = await registryModel.create(req.body);
        if(!newRegistry){
            res.status(400).send({
                status: 'error',
                message:'Registry failed created'
            });
        }else{
            res.status(201).send({
                status: 'succes',
                data: newRegistry
            });
            console.log(newRegistry)
        }
    } catch (error) {
        console.log(error);
    }
};
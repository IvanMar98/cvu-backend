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
                status: 'success',
                data: newRegistry
            });
            console.log(newRegistry)
        }
    } catch (error) {
        console.log(error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).send({
              status: 'error',
              message: 'El registro ya existe. Por favor, elige valores únicos.',
              errors: error.errors.map((err) => ({
                field: err.path,
                message: err.message,
              })),
            });
          }
      
          // Manejar otros errores
          res.status(500).send({
            status: 'error',
            message: 'Error inesperado al crear el registro.',
            error: error.message,
          });
    }
};
import registryModel from "../models/registryModel.js";

/**
 * Crear un nuevo registro
 */
export const createNewRegistry = async(req, res, next) =>{
    try {
      const newRegistry = await registryModel.create(req.body);
      if(!newRegistry){
          return res.status(400).json({
              status: 'error',
              message:'Registry failed created'
          });
      }
      return res.status(201).json({
          status: 'success',
          message: 'Registro creado exitosamente.',
          data: newRegistry
      });
    } catch (error) {
        console.log(error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({
              status: 'error',
              message: 'El registro ya existe. Por favor, elige valores únicos.',
              errors: error.errors.map((err) => ({
                field: err.path,
                message: err.message,
              })),
            });
          }
      
          next(error);
    }
};
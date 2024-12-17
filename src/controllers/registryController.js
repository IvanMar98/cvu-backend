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
      next(error);
    }
};
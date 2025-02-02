import paisModel from "../models/paisModel.js";


/**
 * Agregar un nuevo pais
 */
export const createPais = async(req, res) =>{
    try {
        const newPais = await paisModel.create(req.body);
        if(!newPais){
            res.status(400).send({
                status: 'error',
                message:'Pais failed created'
            });
        }else{
            res.status(201).send({
                status: 'succes',
                data: newPais
            });
        }
    } catch (error) {
        console.log(error);
    }
};
/**
 * Consultar los paises existentes
 */
export const getPaises = async(req, res) =>{
    try {
        const paises = await paisModel.findAll();
        if(paises.length <= 0){
            res.status(404).json({
                status: 'error',
                message: 'Paises not found'
            });
        } else{
            res.status(200).json({
                status: 'succes',
                data: paises
            });
        }
    } catch (error) {
       res.status(500).json({
        status: 'error',
        message: 'Internal server error'
       })
    }
    
};

/**
 * Consultar pais por id
 */
export const getPaisesByID = async(req, res) =>{
    try {
        const pais = await paisModel.findByPk(req.params.id_pais);
        if(pais === null){
            res.status(404).send({
                status: "error",
                message: "Pais not found"
            });
        } else {
            res.status(200).send({
                status: "succes",
                data: pais
            });
        }
    } catch (error) {
        console.log(error);
    }
};

/**
 * Actualizar pais por id
 */
export const updatePaisById = async(req, res) =>{
    try {
        const findPais = await paisModel.findByPk(req.params.id_pais);
        if(findPais === null){
            res.status(404).send({
                status: "error",
                message: "Pais not found"
            });
        }else{
            await paisModel.update(req.body, {
                where: {id_pais:req.params.id_pais}
            });
            const paisUpdated = await paisModel.findByPk(req.params.id_pais);
            res.status(201).send({
                status: "succes",
                data: paisUpdated
            });
        }
    } catch (error) {
        console.log(error);
    }
};

/**
 * Eliminar un pais
 */
export const deletePaisById = async(req, res) =>{
    try {
        const findPais = await paisModel.findByPk(req.params.id_pais);
        if(findPais === null){
            res.status(404).send({
                status: "error",
                message: "Pais not found"
            });
        }else{
            await paisModel.destroy({
                where: {id_pais:req.params.id_pais}
            });
            res.status(200).send({
                status: "succes",
                message: 'Pais Delete'
            });
        }
    } catch (error) {
        console.log(error);
    }
};
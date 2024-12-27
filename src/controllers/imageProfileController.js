import fs from 'node:fs';

export const uploadImageProfile = async(req, res, next) =>{
    try {
        if(!req.file) {
            console.log('erros')
            return res.status(400).json({
                status: 'error',
                message: 'Error al cargar el archivo'
            });
        }

        const path = saveImage(req.file)
        return res.status(200).json({
            status: 'success',
            message: 'Imagen cargada exitosamente',
            path
        });
    } catch (error) {
        next(error);
    }
};

const saveImage = (file) => {
    const newPath = `./uploads/${file.originalname}`
    fs.renameSync(file.path, newPath);
    return newPath
}
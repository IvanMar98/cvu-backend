import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersModel from "../models/usersModel.js";

export const login = async(req, res) => {
    const {email, password} = req.body;
     try {
        const user = await usersModel.findOne({ where: { email } });

        if(!user){
            return res.status(404).json({
                status: 'error',
                message: 'Usuario no registrado'
            });
        }
        
        const correctPassword = await bcrypt.compare(password, user.password);

        if(!correctPassword) {
            return res.status(401).json({
                status: 'error',
                message: 'Credenciales incorrectas'
            });
        }

        const token = jwt.sign({ id: user.user_id }, 'secret_password', { expiresIn: '10m' });
        console.log('Generar token', token)
        res.status(200).json({
            status: {
                message: 'success',
            code: 200},
            message: 'Login exitoso',
            data: {
                token,
                user_id: user.user_id,
                email: user.email
            }
        });
        
     } catch (error) {
        res.status(400).send('Error al iniciar la sesion');
     }
};
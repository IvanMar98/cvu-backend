import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersModel from "../models/usersModel.js";

export const login = async(req, res) => {
    const {email, password} = req.body;
     try {
        const user = await usersModel.findOne({ where: { email } });

        if(!user){
            return res.status(401).send('Credenciales incorrectas');
        }
        
        const correctPassword = await bcrypt.compare(password, user.password);

        if(!correctPassword) {
            return res.status(401).send('Credenciales incorrectas');
        }

        const token = jwt.sign({ id: user.user_id }, 'secreto_super_seguro', { expiresIn: '30m' });
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
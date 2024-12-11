import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader) {
        return res.status(403).send({ message: 'Token no proporcionado' });
    }
    const token = authHeader.split(' ')[1]; // Quita "Bearer" y deja el token
    try {
        const decoded = jwt.verify(token, 'secret_password'); // Valida el token
        req.userId = decoded.id; // Guarda el ID del usuario para futuras operaciones
        next(); // Continúa al siguiente middleware o controlador
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send({ message: 'Token expirado', error: error.name });
        }
        return res.status(401).send({ message: 'Token inválido', error: error.name });
    }
}
export const verifyRegistryData = (err, req, res, next) => {
    if (err.field) {
        return res.status(409).json({
            status: 'error',
            errors: [{ field: err.field, message: err.message }]
        });
    }
    console.error(err); // Log para depuración
    return res.status(500).json({ message: 'Ocurrió un error en el servidor.' });
};
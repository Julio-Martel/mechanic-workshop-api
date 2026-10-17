import jwt from 'jsonwebtoken';

const autenticarToken = async(req,res,next) => {
    const headerToken = req.headers.authorization
    
    if(!headerToken){
        return res.status(404).json({
            mensaje: 'No hay token en el header'
        })
    }

    const token = headerToken.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'secreto');

        req.usuario = decoded;

        next();

    } catch(error){
        res.status(403).json({ mensaje: 'Token inválido' });
    }
}

export {
    autenticarToken
}
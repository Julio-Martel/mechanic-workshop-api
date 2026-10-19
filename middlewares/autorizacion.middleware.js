const autorizarAccesoAdmin = async(req,res,next) => {
    if(req.usuario.rol !== 'admin'){
        return res.status(403).json({
            mensaje: 'Debe ser admin para poder acceder a este sitio.'
        })
    }

    next();
}

const autorizarAccesoCliente = async(req,res,next) => {
    if(req.usuario.rol !== 'cliente'){
        return res.status(403).json({
            mensaje: 'Debe ser cliente para poder acceder a este sitio'
        })
    }

    next();
}

export {
    autorizarAccesoAdmin,
    autorizarAccesoCliente
}
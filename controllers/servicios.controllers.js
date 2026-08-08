const crearServicioController = async(req,res) => {
    try {
        
    } catch(error){
        console.log(error);
        res.status(505).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    crearServicioController
}
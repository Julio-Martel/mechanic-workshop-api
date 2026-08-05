import { encontrarMecanicoModel, registroMecanicoModel } from "../models/mecanicos.model.js";

const registroMecanicoService = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    if(!data.nombre || !data.especialidad || !data.telefono || !data.fecha_ingreso){
        throw new Error("INFORMACION INCOMPLETA");
    }

    const mecanicoExistente = await encontrarMecanicoModel(data.telefono);

    if(mecanicoExistente){
        throw new Error("YA REGISTRADO");
    }

    const registrarMecanico = await registroMecanicoModel(data);

    return registrarMecanico;
}

export {
    registroMecanicoService
}

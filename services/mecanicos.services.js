import { encontrarMecanicoModel, 
        registroMecanicoModel,
        encontrarMecanicoPorId,
        modificacionDatosMecanicoModel,
        borrarMecanicoModel,
        todosLosMecanicosModel } from "../models/mecanicos.model.js";

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

const modificacionDatosMecanicoService = async(id,data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error("BODY VACIO");
    }

    const verificarMecanico = await encontrarMecanicoPorId(id);

    if(!verificarMecanico){
        throw new Error("ID INEXISTENTE");
    }

    const mecanicoModificado = await modificacionDatosMecanicoModel(id,data);

    return mecanicoModificado;
}

const borrarMecanicoService = async(id) => {
    const mecanicoBorrado = await borrarMecanicoModel(id);

    if(!mecanicoBorrado){
        throw new Error("ID INEXISTENTE");
    }

    return mecanicoBorrado;
}

const todosLosMecanicosService = async() => {
    const mecanicos = await todosLosMecanicosModel();

    if(mecanicos.length === 0){
        throw new Error("SIN MECANICOS");
    }

    return mecanicos;

}

export {
    registroMecanicoService,
    modificacionDatosMecanicoService,
    borrarMecanicoService,
    todosLosMecanicosService
}

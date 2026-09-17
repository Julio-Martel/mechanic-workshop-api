import { encontrarMecanicoModel, 
        registroMecanicoModel,
        encontrarMecanicoPorId,
        modificacionDatosMecanicoModel,
        borrarMecanicoModel,
        todosLosMecanicosModel,
        cantidadTotalDeMecanicos } from "../models/mecanicos.model.js";

import { totalDeReparacionesPorMecanico } from "../models/detalleServicios.model.js";

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
    const totalMecanicos = await cantidadTotalDeMecanicos();

    if(mecanicos === undefined){
        throw new Error("SIN MECANICOS");
    }

    const datosMecanicos = {
        totalMecanicos: totalMecanicos,
        listadoMecanicos: mecanicos
    }

    return datosMecanicos;
}

const totalReparacionesPorMecanicoService = async() => {
    const todosLosMecanicos = await todosLosMecanicosModel();
    
    const totales = [];

    todosLosMecanicos.forEach(mecanico = async() => {
        const id_mecanico = mecanico.id;
        const totalReparacion = await totalDeReparacionesPorMecanico(id_mecanico);

        const data = {
            id_mecanico: id_mecanico,
            totalReparacion: totalReparacion
        }

        totales.push(data);
    });

    return totales;
}

export {
    registroMecanicoService,
    modificacionDatosMecanicoService,
    borrarMecanicoService,
    todosLosMecanicosService,
    totalReparacionesPorMecanicoService
}

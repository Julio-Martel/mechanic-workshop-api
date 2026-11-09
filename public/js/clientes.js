const tablaClientes = document.getElementById('t-cliente');

const generarTablaClientes  = async() => {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes/');
        const clientes = await respuesta.json();
    
        /*
            CONTINUAR AQUI PARA LA GENERACION DE LA TABLA EN EL PAGINA DE CLIENTES
        */
        
    } catch(error){

    }
}

generarTablaClientes();
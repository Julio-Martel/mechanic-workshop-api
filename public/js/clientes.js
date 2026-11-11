const tablaClientes = document.getElementById('t-cliente');

const generarTablaClientes  = async() => {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes/');
        const clientes = await respuesta.json();
    
        clientes.forEach(cliente => {
            
        });
        
    } catch(error){

    }
}

generarTablaClientes();
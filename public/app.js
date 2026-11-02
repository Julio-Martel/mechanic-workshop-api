const botonObtenerClientes = document.getElementById('boton-1');
const tablaClientes = document.getElementById('tab-cli');


botonObtenerClientes.addEventListener('click', async() => {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes');
        const clientes = await respuesta.json();

        clientes.forEach(cliente => {
            tablaClientes.appendChild() // AGREGAR AQUI LO QUE FALTA
        });

    } catch(error){ 

    }
})
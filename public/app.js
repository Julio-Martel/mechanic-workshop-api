const botonObtenerClientes = document.getElementById('boton-1');
const tablaClientes = document.getElementById('tab-cli');


botonObtenerClientes.addEventListener('click', async() => {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes');
        const clientes = await respuesta.json();

        clientes.forEach(cliente => {
            const celda = document.createAttribute('td');
            celda.textContent = cliente


            /*
                TERMINAR LA LOGICA AQUI
            
            
            */

            tablaClientes.appendChild() // AGREGAR AQUI LO QUE FALTA
        });

    } catch(error){ 

    }
})
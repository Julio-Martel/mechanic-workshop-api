const botonObtenerClientes = document.getElementById('boton-1');
const tablaClientes = document.getElementById('tab-cli');
const cuerpoTabla = document.getElementById('tbody-clientes');

botonObtenerClientes.addEventListener('click', async() => {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes');
        const clientes = await respuesta.json();

        clientes.forEach(cliente => {
            const celda = document.createElement('td');
            celda.textContent = cliente[0]

            cuerpoTabla.appendChild(celda);


            
        });

    } catch(error){ 

    }
})
const botonObtenerClientes = document.getElementById('boton-1');
const tablaClientes = document.getElementById('tab-cli');
const cuerpoTabla = document.getElementById('tbody-clientes');
const mensaje = document.getElementById('mensaje');

cuerpoTabla.innerHTML = '';

botonObtenerClientes.addEventListener('click', async() => {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes/');
        const clientes = await respuesta.json();

        clientes.forEach(cliente => {
            const fila = document.createElement('tr');
            const celda = document.createElement('td');
            const datos = {
                id: cliente.id,
                nombre: cliente.nombre,
                email: cliente.email
            }

            celda.textContent = datos.id;
            celda.textContent = datos.nombre;
            celda.textContent = datos.email
            
        
            fila.appendChild(celda);

            cuerpoTabla.appendChild(fila);
            
        });

    } catch(error){ 
        mensaje.textContent = 'No se pudieron obtener los clientes.';

        console.error(error.message);

    }
})




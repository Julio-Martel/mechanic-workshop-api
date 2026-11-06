const botonObtenerClientes = document.getElementById('boton-1');
const tablaClientes = document.getElementById('tab-cli');
const cuerpoTabla = document.getElementById('tbody-clientes');
const mensaje = document.getElementById('mensaje');

botonObtenerClientes.addEventListener('click', async() => {
    try {
        cuerpoTabla.innerHTML = '';

        const respuesta = await fetch('http://localhost:3000/clientes/');
        const clientes = await respuesta.json();

        clientes.forEach(cliente => {
            const fila = document.createElement('tr');
            const celda1 = document.createElement('td');
            const celda2 = document.createElement('td');
            const celda3 = document.createElement('td');

            celda1.classList.add('cel');
            celda2.classList.add('cel');
            celda3.classList.add('cel');

            const datos = {
                id: cliente.id,
                nombre: cliente.nombre,
                email: cliente.email
            }

            celda1.textContent = datos.id;
            celda2.textContent = datos.nombre;
            celda3.textContent = datos.email
            
        
            fila.appendChild(celda1);
            fila.appendChild(celda2);
            fila.appendChild(celda3);

            cuerpoTabla.appendChild(fila);
            
        });

    } catch(error){ 
        mensaje.textContent = 'No se pudieron obtener los clientes.';
    }
})

/* 

    RETOMAR EL CODIGO AQUI


*/



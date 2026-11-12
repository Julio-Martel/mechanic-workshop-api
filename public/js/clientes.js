const tablaClientes = document.getElementById('t-cliente');
const mensaje = document.getElementById('mensaje');

const generarTablaClientes  = async() => {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes/');
        const clientes = await respuesta.json();
    
        clientes.forEach(cliente => {
            const fila = document.createElement('tr');
            const celdaId = document.createElement('td');
            const celdaNombre = document.createElement('td');
            const celdaEmail = document.createElement('td');
            const celdaTelefono = document.createElement('td');

            const datos = {
                id: cliente.id,
                nombre: cliente.nombre,
                email: cliente.email,
                telefono: cliente.telefono
            }
        
            celdaId.textContent = datos.id;
            celdaNombre.textContent = datos.nombre;
            celdaEmail.textContent = datos.email;
            celdaTelefono.textContent = datos.telefono;
            
            fila.append(celdaId,celdaNombre,celdaEmail,celdaTelefono);

            tablaClientes.appendChild(fila);
        
        });
        
    } catch(error){
         mensaje.textContent = 'No se pudieron obtener los clientes.';
    }
}

generarTablaClientes();
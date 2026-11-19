const botonFiltrar = document.getElementById('filtrarButton');
const tablaClientesFiltrados = document.getElementById('')
const mensaje = document.getElementById('mensaje');
const inputId = document.getElementById('id-cliente');

botonFiltrar.addEventListener('click', async(id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/clientes/${id}`);
        const clientesFiltrados = await respuesta.json();

        clientesFiltrados.forEach(cliente => {
            const fila = document.createElement('tr');
            const tdId = document.createElement('td');
            const tdNombre = document.createElement('td');
            const tdEmail = document.createElement('td');
            const tdTelefono = document.createElement('td');

            tdId.textContent = cliente.id;
            tdNombre.textContent = cliente.nombre;
            tdEmail.textContent = cliente.email;
            tdTelefono.textContent = cliente.telefono;

            tdId.classList.add('celda');
            tdNombre.classList.add('celda');
            tdEmail.classList.add('celda');
            tdTelefono.classList.add('celda');

            fila.append(tdId,tdNombre,tdEmail,tdTelefono);
        });


    }catch(error){
        mensaje.textContent = 'ERROR'
    }
})

/*
    AGREGAR LA VARIABLE Y VALUE DEL INPUT PARA PODER FILTRAR EL ID DEL CLIENTE

*/
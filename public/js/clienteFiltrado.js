const botonFiltrar = document.getElementById('filtrarButton');
const tablaClientesFiltrados = document.getElementById('')
const mensaje = document.getElementById('mensaje');
const inputId = document.getElementById('id-cliente');

const valorInput = parseInt(inputId.value);

botonFiltrar.addEventListener('click', async() => {
    try {

        const respuesta = await fetch(`http://localhost:3000/clientes/${valorInput}`);

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
        mensaje.textContent = 'NO ENCONTRADO'
    }
})

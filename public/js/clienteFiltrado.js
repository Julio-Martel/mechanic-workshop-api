const botonFiltrar = document.getElementById('filtrarButton');
const tablaClientesFiltrados = document.getElementById('tab-cli');
const mensaje = document.getElementById('mensaje');

const filtrarCliente = async (id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/clientes/${id}`);

        if (!respuesta.ok) {
            throw new Error('Cliente no encontrado');
        }

        const clientesFiltrados = await respuesta.json();

        const fila = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdNombre = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdTelefono = document.createElement('td');

        tdId.textContent = clientesFiltrados.id;
        tdNombre.textContent = clientesFiltrados.nombre;
        tdEmail.textContent = clientesFiltrados.email;
        tdTelefono.textContent = clientesFiltrados.telefono;

        tdId.classList.add('celda');
        tdNombre.classList.add('celda');
        tdEmail.classList.add('celda');
        tdTelefono.classList.add('celda');

        fila.append(tdId, tdNombre, tdEmail, tdTelefono);

        tablaClientesFiltrados.appendChild(fila);


    } catch (error) {
        mensaje.textContent = 'NO ENCONTRADO';
    }
};

botonFiltrar.addEventListener('click', () => {
    tablaClientesFiltrados.innerHTML = '';
    mensaje.innerHTML = '';

    const inputId = document.getElementById('id-cliente');
    const valorInput = parseInt(inputId.value);

    filtrarCliente(valorInput);
});
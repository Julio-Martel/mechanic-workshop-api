const botonFiltrar = document.getElementById('filtrarButton');


botonFiltrar.addEventListener('click', async(id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/clientes/${id}`);
        const clientesFiltrados = await respuesta.json();




    }catch(error){

    }
})


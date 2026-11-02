const botonObtenerClientes = document.getElementById('boton-1');

botonObtenerClientes.addEventListener('click', async() => {
    try {
        const respuesta = await fetch('http://localhost:3000/clientes');
        const clientes = await respuesta.json();



    } catch(error){ 
        
    }
})
// Función para abrir el modal con la descripción del proyecto
function mostrarDescripcion(proyecto) {
    const descripciones = {
        proyecto1: {
            titulo: "Lanzamiento de marca consciente",
            descripcion: "Este proyecto consistió en el lanzamiento de una marca consciente que promueve productos ecológicos y sostenibles. Usamos estrategias de branding y marketing de contenido para posicionar la marca en el mercado."
        },
        proyecto2: {
            titulo: "Portafolio de Freelancer",
            descripcion: "Desarrollamos un portafolio profesional para un freelancer en el sector del diseño gráfico. Creamos un sitio web interactivo que refleja su estilo único y atrae a nuevos clientes."
        },
        proyecto3: {
            titulo: "Colaboración con influencers",
            descripcion: "Colaboramos con influencers en las redes sociales para promover productos de belleza. Utilizamos campañas de marketing de influencia para aumentar la visibilidad y ventas."
        }
    };

    // Obtener el modal
    const modal = document.querySelector('.modal');
    // Obtener los elementos del modal
    const tituloModal = document.getElementById('titulo-modal');
    const descripcionModal = document.getElementById('descripcion-modal');

    // Establecer el título y la descripción en el modal
    tituloModal.textContent = descripciones[proyecto].titulo;
    descripcionModal.textContent = descripciones[proyecto].descripcion;

    // Mostrar el modal
    modal.style.display = "flex";  // Usamos flex para que se centre automáticamente
    
    // Asegurarnos de que el modal se centre en la pantalla
    const modalContenido = modal.querySelector('.modal-contenido');
    modalContenido.style.top = `${(window.innerHeight - modalContenido.offsetHeight) / 2}px`;
    modalContenido.style.left = `${(window.innerWidth - modalContenido.offsetWidth) / 2}px`;

    // Cerrar el modal cuando el usuario haga clic en la X
    const cerrarModal = document.querySelector('.cerrar');
    cerrarModal.onclick = function() {
        modal.style.display = "none";
    };

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

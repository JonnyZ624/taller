function verImagenGrande(src) {
    document.getElementById('imagenGrande').src = src;
    $('#cuadroImagenGrande').modal('show');
}
    document.addEventListener("DOMContentLoaded", function() {
        var linkInicio = document.querySelector('.nav-link.active');

        linkInicio.addEventListener('mouseenter', function() {
            linkInicio.style.backgroundColor = 'blue'; /* Reemplaza "tu-color" con el color deseado */
            linkInicio.style.color = 'black'; /* Cambia el color del texto si es necesario */
        });

        linkInicio.addEventListener('mouseleave', function() {
            linkInicio.style.backgroundColor = ''; 
            linkInicio.style.color = ''; 
        });
    });
 
  document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces de navegación dentro del menú lateral
    var sidebarLinks = document.querySelectorAll('.custom-sidebar .nav-link');

    // Recorre cada enlace y agrega eventos de mouse
    sidebarLinks.forEach(function (link) {
      // Almacena el color de fondo original
      var colorOriginal = window.getComputedStyle(link).backgroundColor;

      // Agrega evento cuando el mouse entra
      link.addEventListener('mouseenter', function () {
        link.style.backgroundColor = 'blue'; /* Reemplaza "tu-color" con el color deseado */
        link.style.color = 'black'; /* Cambia el color del texto si es necesario */
      });

      // Agrega evento cuando el mouse sale
      link.addEventListener('mouseleave', function () {
        link.style.backgroundColor = ''; /* Restaura el color de fondo original */
        link.style.color = ''; /* Restaura el color de texto original */
      });
    });
  });



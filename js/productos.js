function verImagenGrande(src) {
    document.getElementById('imagenGrande').src = src;
    $('#cuadroImagenGrande').modal('show');
}
    document.addEventListener("DOMContentLoaded", function() {
        var linkInicio = document.querySelector('.nav-link.active');

        linkInicio.addEventListener('mouseenter', function() {
            linkInicio.style.backgroundColor = 'blue'; 
            linkInicio.style.color = 'black'; 
        });

        linkInicio.addEventListener('mouseleave', function() {
            linkInicio.style.backgroundColor = ''; 
            linkInicio.style.color = ''; 
        });
    });
 
  document.addEventListener("DOMContentLoaded", function () {
    var sidebarLinks = document.querySelectorAll('.custom-sidebar .nav-link');

    sidebarLinks.forEach(function (link) {
      var colorOriginal = window.getComputedStyle(link).backgroundColor;

      link.addEventListener('mouseenter', function () {
        link.style.backgroundColor = 'blue'; 
        link.style.color = 'black'; 
      });

      link.addEventListener('mouseleave', function () {
        link.style.backgroundColor = ''; 
        link.style.color = ''; 
      });
    });
  });



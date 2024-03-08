document.addEventListener('DOMContentLoaded', function() {
    var enlaceInicio = document.getElementById('enlaceInicio');

    enlaceInicio.addEventListener('mouseover', function() {
        enlaceInicio.style.color = 'darkblue'; // Cambia el color cuando el mouse está sobre el enlace
    });

    enlaceInicio.addEventListener('mouseout', function() {
        enlaceInicio.style.color = ''; // Restaura el color original al salir del enlace
    });
  });
  function aumentarTamanio(elemento) {
    elemento.style.fontSize = '1.3em'; // Puedes ajustar el tamaño según tus preferencias
  }

  function restaurarTamanio(elemento) {
    elemento.style.fontSize = ''; // Restaura el tamaño original
  }
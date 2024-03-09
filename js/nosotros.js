document.addEventListener('DOMContentLoaded', function() {
    var enlaceInicio = document.getElementById('enlaceInicio');

    enlaceInicio.addEventListener('mouseover', function() {
        enlaceInicio.style.color = 'darkblue'; 
    });

    enlaceInicio.addEventListener('mouseout', function() {
        enlaceInicio.style.color = ''; 
    });
  });
  function aumentarTamanio(elemento) {
    elemento.style.fontSize = '1.3em'; 
  }

  function restaurarTamanio(elemento) {
    elemento.style.fontSize = ''; 
  }
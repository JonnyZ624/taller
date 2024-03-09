function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let cedula = document.getElementById('cedula').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (nombre === '' || apellido === '' || edad === '' || cedula === '' || email === '' || password === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Formato de correo electrónico no válido.');
      return;
    }

    var cedulaPattern = /^\d{10}$/;
    if (!cedulaPattern.test(cedula)) {
        alert('Formato de cédula no válido.');
        return;
    }

    var edadNumero = Number(edad);
    if (!Number.isFinite(edadNumero) || edadNumero <= 0 || edadNumero <= 17) {
      alert('Por favor, ingrese una edad válida mayor que 17 años.');
      return;
    }

    document.addEventListener("DOMContentLoaded", function () {
      var btnRegistro = document.querySelector('.btn-registro');

      btnRegistro.addEventListener('mouseenter', function () {
          btnRegistro.style.transform = 'scale(1.1)'; 
      });

      btnRegistro.addEventListener('mouseleave', function () {
          btnRegistro.style.transform = ''; 
      });
  });
    alert('¡Registro exitoso!');
    
     }

  document.addEventListener("DOMContentLoaded", function () {
    var btnRegistro = document.querySelector('.btn-registro');

    btnRegistro.addEventListener('mouseenter', function () {
        btnRegistro.style.transform = 'scale(1.1)';  
    });

    btnRegistro.addEventListener('mouseleave', function () {
        btnRegistro.style.transform = ''; 
    });
});
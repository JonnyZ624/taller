function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var cedula = document.getElementById('cedula').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    

    // Validar que los campos no estén vacíos
    if (nombre === '' || apellido === '' || edad === '' || cedula === '' || email === '' || password === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validar formato de email (puedes agregar una validación más robusta si es necesario)
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Formato de correo electrónico no válido.');
      return;
    }

    // Puedes agregar más validaciones según tus necesidades}

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
          btnRegistro.style.transform = 'scale(1.1)'; // Cambia el valor según sea necesario para el tamaño más grande
      });

      btnRegistro.addEventListener('mouseleave', function () {
          btnRegistro.style.transform = ''; // Restaura el tamaño original
      });
  });


    alert('¡Registro exitoso!');
    // Aquí podrías enviar el formulario usando AJAX, por ejemplo.
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btnRegistro = document.querySelector('.btn-registro');

    btnRegistro.addEventListener('mouseenter', function () {
        btnRegistro.style.transform = 'scale(1.1)'; // Cambia el valor según sea necesario para el tamaño más grande
    });

    btnRegistro.addEventListener('mouseleave', function () {
        btnRegistro.style.transform = ''; // Restaura el tamaño original
    });
});
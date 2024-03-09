function hacerMasGrande() {
    var encabezado = document.querySelector('.Encabezado');
    encabezado.style.transform = 'scale(1.5)';
}

function redirigirAQuienesSomos() {
    window.location.href = 'Nosotros.html'; 
}

function redirigiraqueofrecemos() {
    window.location.href = 'Productos.html'; 
}

const titulouno = document.querySelector(`#titulouno`);
titulouno.addEventListener('mouseover', () => {
    titulouno.style.color = "blue";
});

const tituloUno = document.querySelector(`#titulouno`);
tituloUno.addEventListener('mouseout', () => {
    titulouno.style.color = "black";
});

const titulodos = document.querySelector(`#titulodos`);
titulodos.addEventListener('mouseover', () => {
    titulodos.style.color = "blue";
});

const tituloDos = document.querySelector(`#titulodos`);
tituloDos.addEventListener('mouseout', () => {
    titulodos.style.color = "black";
});

function aumentarTamanio(elemento) {
    elemento.style.fontSize = '1.3em'; 
  }

  function restaurarTamanio(elemento) {
    elemento.style.fontSize = ''; 
  }
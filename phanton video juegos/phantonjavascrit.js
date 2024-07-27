function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
// Buscador de imágenes
const buscador = document.querySelector('.buscador input[type="search"]');
const imagenes = document.querySelectorAll('.cuadro img');

buscador.addEventListener('input', (e) => {
  const valor = e.target.value.toLowerCase();
  imagenes.forEach((imagen) => {
    const alt = imagen.alt.toLowerCase();
    if (alt.includes(valor)) {
      imagen.parentNode.parentNode.style.display = 'block';
    } else {
      imagen.parentNode.parentNode.style.display = 'none';
    }
  });
});

// Aparición de iconos al pasar el mouse sobre las imágenes
const cuadros = document.querySelectorAll('.cuadro');

cuadros.forEach((cuadro) => {
  cuadro.addEventListener('mouseover', () => {
    cuadro.querySelector('.iconos').style.display = 'block';
  });
  cuadro.addEventListener('mouseout', () => {
    cuadro.querySelector('.iconos').style.display = 'none';
  });
});

// Flecha para deslizar el buscador
const flecha = document.querySelector('.flecha');

flecha.addEventListener('click', () => {
  const buscador = document.querySelector('.buscador');
  buscador.classList.toggle('deslizar');
});

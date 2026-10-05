function cambiarSeccion(idObjetivo) {
  const pantallas = document.querySelectorAll('.pantalla');
  pantallas.forEach(p => p.classList.remove('activa'));

  const objetivo = document.getElementById(idObjetivo);
  if (objetivo) {
    objetivo.classList.add('activa');
  }
}

document.getElementById('form-disco').addEventListener('submit', function (e) {
  e.preventDefault();
  const datos = {
    nombre: document.getElementById('disco-nombre').value,
    genero: document.getElementById('disco-genero').value,
    artista: document.getElementById('disco-artista').value,
    precio: document.getElementById('disco-precio').value
  };
  console.log('Disco:', datos);
  alert('Disco guardado');
  this.reset();
});

document.getElementById('form-cantante').addEventListener('submit', function (e) {
  e.preventDefault();
  const genero = document.querySelector('input[name="genero-cantante"]:checked')?.value;
  const datos = {
    nombre: document.getElementById('cantante-nombre').value,
    edad: document.getElementById('cantante-edad').value,
    genero: genero,
    trayectoria: document.getElementById('cantante-trayectoria').value
  };
  console.log('Cantante:', datos);
  alert('Cantante guardado');
  this.reset();
});

document.getElementById('form-cancion').addEventListener('submit', function (e) {
  e.preventDefault();
  const datos = {
    nombre: document.getElementById('cancion-nombre').value,
    duracion: document.getElementById('cancion-duracion').value,
    compositor: document.getElementById('cancion-compositor').value,
    cantante: document.getElementById('cancion-cantante').value
  };
  console.log('Canción:', datos);
  alert('Canción guardada');
  this.reset();
});

document.getElementById('form-playlist').addEventListener('submit', function (e) {
  e.preventDefault();
  const datos = {
    nombre: document.getElementById('playlist-nombre').value,
    usuario: document.getElementById('playlist-usuario').value
  };
  console.log('Playlist:', datos);
  alert('Playlist guardada');
  this.reset();
});
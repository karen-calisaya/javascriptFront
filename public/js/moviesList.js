let body = document.querySelector('body');
let h1 = document.querySelector('h1')
console.log(body)

let modoOscuro = confirm('Desea el modo oscuro?')
if(modoOscuro){
    body.style.backgroundColor  = '#7f7f7f'
    body.classList.add = 'fondoMoviesList'
}

h1.innerHTML += 'LISTADO DE PELICULAS'
h1.style.color = 'white';
h1.style.backgroundColor = 'teal';
h1.style.border = '20px'

let h1 = document.querySelector('h1');
let section = document.querySelector('section');
let article = document.querySelector('article');

h1.innerHTML = 'AGREGAR PELICULAS'
h1.classList.add('titulo'/* , 'fondoTransparente' */)

/* para agregaruna clase add recibe la clase entre parentesis
diferente si queremos agregar o asignar nuevos valores al html */

article.classList.add('fondoTransparente')

section.classList.add('fondoCRUD')
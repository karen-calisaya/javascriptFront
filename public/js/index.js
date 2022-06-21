let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelector('p');

console.log(main, h2, a, p)

let nombre = prompt('Ingrese su nombre')
console.log(nombre)
if(nombre){
    h2.innerHTML += nombre
}else {
    h2.innerHTML += ' invitado'
}

h2.style.textTransform = 'uppercase'


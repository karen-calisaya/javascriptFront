let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let impar = document.querySelectorAll('.impar');
let par = document.querySelectorAll('.par');

for (let index = 0; index < impar.length; index++) {
    const element = impar[index];
    element.classList.add('destacadoImpar')
}

for (let index = 0; index < par.length; index++) {
    const element = par[index];
    element.classList.add('destacadoPar')
}

/* alternativa a lo anterior */
let destacado = document.querySelector('p')
for(let i = 0 ; i < destacado.length; i++){
    if(i % 2 == 0){
        destacado[i].classList.add('destacadoPar');
    }else{
        destacado[i].classList.add('destacadoImpar');
    }
}


console.log(main, h2, a, par, impar)

let nombre = prompt('Ingrese su nombre')
console.log(nombre)
if(nombre){
    h2.innerHTML += nombre
}else {
    h2.innerHTML += ' invitado'
}

h2.style.textTransform = 'uppercase'

a.style.color = '#E51B3E'

let pregunta = confirm('Desea colocar un fondo de pantalla?');
if(pregunta){
    let body = document.querySelector('body')
    body.classList.add('fondo')
}

main.style.display = 'block'

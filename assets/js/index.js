precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cant = 0
let tot = 0

const cantidad = document.querySelector('.cantidad')

const btnUp = document.querySelector('.btnup')

const btnDown = document.querySelector('.btndown')

const total = document.querySelector('.valor-total')

btnUp.addEventListener('click',() => {
    cant = cant + 1
    cantidad.innerHTML = cant
    tot = precio * cant
    total.innerHTML = tot
})

btnDown.addEventListener('click',() => {
    cant = cant - 1
    cantidad.innerHTML = cant
    tot = precio * cant
    total.innerHTML = tot
})


let mensaje = () => {
mensaje_error = document.getElementById("mensaje_error")
mensaje_error.style.display='block'
//mensaje.style.visibility = "visible";
}

let boton_activa = document.getElementById("btn_activa")
boton_activa.addEventListener("click", mensaje)

//recuperar elemento invisible por medio del ID.

let ma = document.getElementById("mensaje_aceptacion")
ma.style.display='block'

//recuperar elementos invisibles por medio de su Class
let x = document.getElementsByClassName("boton")
x[0].style.display = 'block'
x[1].style.display = 'block'
console.log(x[0]);
console.log(x[1]);

let telefono = document.getElementById("telefono")
telefono.addEventListener("input", function (){
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = telefono.value;
})
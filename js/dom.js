//cambiar texto
let botonTexto = document.getElementById("btn-texto");
botonTexto.addEventListener("click", function () {
let nt= "Cambiando titulo por un texto"
 let tituloTexto = document.getElementById("titulo")
 tituloTexto.textContent=nt
});


//cambiar color
let cambiarColor = document.getElementById("btn-color");
let cajaColor = document.getElementById("caja");

cambiarColor.addEventListener("click", () => {
  cajaColor.style.backgroundColor = "#41476488";
  cajaColor.style.borderColor = "#6b0808";
});

//ocultar mostrar
let caja = document.getElementById("caja");
let botonOcultar = document.getElementById("btn-ocultar");

botonOcultar.addEventListener("click", () => {
  if (caja.style.display === "none") {
    caja.style.display = "block";
  } else {
    caja.style.display = "none";
  }
});

//saludar
 let saludo = document.getElementById("btn-saludar").addEventListener("click", ()=>{
    let nombre = document.getElementById("nombre").value;
    document.getElementById("saludo").textContent =
    nombre ? `¡Hola, ${nombre} !`: "escribe tu nombre primero: ";
}); 


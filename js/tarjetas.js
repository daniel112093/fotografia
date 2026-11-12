//pintar tarejtas del dom.html
let tarjetas = document.getElementsByClassName("tarjeta") 
let resultado = document.getElementById("resultado")

let resalta = document.getElementById("Btn-resaltar")
resalta.addEventListener("click", function () {
  for (let x = 0; x < tarjetas.length; x++) {
    tarjetas[x].classList.add("resaltada");
  }
});
//pintar solo la primera
document.getElementById("Btn-primera").addEventListener("click",()=>{
  tarjetas[0].classList.add("resaltada")
})

// contar tarjetas
document.getElementById("Btn-contar").addEventListener("click", () => {
  resultado.textContent = `Hay ${tarjetas.length} tarjetas.`;
});

// quitar el resultado
let quitar =  document.getElementById("Btn-quitar");
quitar.addEventListener("click", () => {
  for (let x = 0; x < tarjetas.length; x++) {
    tarjetas[x].classList.remove("resaltada");
  }

});

// Eliminar una tarjeta y cambiar el color del mensaje al pulsar el botón
let colores = ["red", "blue", "green", "purple"];
let indiceColor = 0;

document.getElementById("Btn-eliminar").addEventListener("click", () => {
  if (!tarjetas.length) return;

  tarjetas[tarjetas.length - 1].remove();
  resultado.textContent = "Tarjeta eliminada";
  resultado.style.color = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
});

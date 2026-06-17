
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#form-turnos");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            // Frena el envío automático para que actúe JS
            evento.preventDefault();

            // Guardamos los datos completados
            const nombre = document.querySelector("#nombre").value.trim();
            const servicio = document.querySelector("#servicio").value;
            const fecha = document.querySelector("#fecha").value;
            const hora = document.querySelector("#hora").value;

            // Formateamos la fecha para que se lea más linda (DD/MM/AAAA)
            const fechaFormateada = fecha.split("-").reverse().join("/");

            // Cartel de confirmación exitosa con todos los datos
            alert(`✨ ¡Turno Solicitado, ${nombre}! ✨\n\n🌸 Servicio: ${servicio}\n📅 Fecha: ${fechaFormateada}\n⏰ Hora: ${hora} hs.\n\nNos comunicaremos con vos a la brevedad para confirmarlo. ¡Gracias!`);
            
            // Se limpia todo el formulario
            formulario.reset();
        });
    }
});

// ==========================================
// LÓGICA DEL CARRUSEL (Para precios.html)
// ==========================================
let indiceActual = 0;

function cambiarFoto(direccion) {
  const fotos = document.querySelectorAll('.carrusel-fotos img');
  const totalFotos = fotos.length;
  
  if (totalFotos === 0) return; // Por seguridad, si no hay fotos no hace nada

  // Calcula la posición de la foto de manera infinita
  indiceActual = (indiceActual + direccion + totalFotos) % totalFotos;
  
  // Mueve la tira horizontal
  const contenedorFotos = document.querySelector('.carrusel-fotos');
  if (contenedorFotos) {
    contenedorFotos.style.transform = `translateX(-${indiceActual * 100}%)`;
  }
}
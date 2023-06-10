<template>
  <div class="container">

    <h1 class="titulo-home">
      Todo lo que tienes que saber del
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor">&nbsp;</span>
    </h1>

    <p>En esta sección encontrarás los conceptos básicos y los pasos necesarios para comenzar a disfrutar los beneficios de utilizar QR.</p>

    <Carrusel />

    <main class="row">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              ¿Que son los codigos QR?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              El código QR es una versión bidimensional del código de barras,
              compuesto de patrones de píxeles en blanco y negro. Denso Wave
              pertenece a Denso, una proveedora de Toyota, y ha desarrollado los
              códigos QR para la identificación de componentes con el fin de
              acelerar los procesos logísticos de su producción de automóviles.
              Ahora, con el uso generalizado de los smartphones, el código QR ha
              encontrado su camino al mercado. "QR" significa "Respuesta
              Rápida", que se refiere al acceso instantáneo a la información
              oculta en el Code (código).
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              ¿Cuales son los beneficios de usar codigo QR?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              Los códigos QR están ganando popularidad debido a su
              multiplicidad. Puedes usarlos para obtener feedback con el
              objetivo de mejorar tus productos y servicios, aumentar la
              participación de los clientes con imágenes o videos o incluso
              promocionar tu negocio con eventos y cupones. ¡Todo esto con un
              solo escaneo!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              ¿Como escaneo un codigo QR?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              Depende de su dispositivo. Algunos móviles ya vienen con un lector
              o escáner de código QR integrado. Abre la cámara de tu smartphone
              y apúntala hacia el código QR durante unos segundos hasta que
              aparezca una notificación. Si no pasa nada, comprueba la
              configuración para ver si el escáner de códigos QR está activado.
              ¿Todavía no funciona? No te preocupes, sólo instala un lector de
              código QR desde tu tienda de aplicaciones.
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Carrusel from "../components/Carrusel.vue";
import { ref } from "vue";

const typeValue = ref("");
const typeStatus = ref(false);
const typeArray = ref(["Codigo QR"]);
const typingSpeed = ref(100);
const erasingSpeed = ref(100);
const newTextDelay = ref(2000);
const typeArrayIndex = ref(0);
const charIndex = ref(0);

const typeText = () => {
  if (charIndex.value < typeArray.value[typeArrayIndex.value].length) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value += typeArray.value[typeArrayIndex.value].charAt(
      charIndex.value
    );
    charIndex.value += 1;

    setTimeout(typeText, typingSpeed.value);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay.value);
  }
};
// erase : significa borrar
const eraseText = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = typeArray.value[typeArrayIndex.value].substring(
      0,
      charIndex.value - 1
    );
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed.value);
  } else {
    typeStatus.value = false;
    typeArrayIndex.value += 1;
    if (typeArrayIndex.value >= typeArray.value.length)
      typeArrayIndex.value = 0;

    setTimeout(typeText, typingSpeed.value + 1000);
  }
};

setTimeout(typeText, newTextDelay.value + 200);
</script>

<style>
@import "../assets/estilos/styles.css";
</style>

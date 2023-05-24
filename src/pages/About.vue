<template>
  <div class="container" id="about">
    <h1> Crea tus propios <span class="color-span">codigos QR</span> e impulsa tu negocio o idea</h1>

    <input type="text" placeholder="Pon tu enlace aqui" class="form-control mt-3 mb-3 input-ancho" v-model.trim="url" ref="inputRef" @input="addHttp" />

    <div v-if="url" class="fade-in">
      <qrcode-vue class="estilos-qr" :value="url" :size="qrSize" :background="selectedPatron" :foreground="selectedFondo"></qrcode-vue>
    </div>

    <div class="contenedor">
      <div class="centered-colores">
        <label for="exampleColorInput" class="form-label"></label>
        <input type="color" class="form-control form-control-color" id="exampleColorInput" title="Choose your color" v-model="selectedPatron" />

        <label for="exampleColorInput" class="form-label"></label>
        <input type="color" class="form-control form-control-color" id="exampleColorInput" title="Choose your color" v-model="selectedFondo" />
      </div>
    </div>

    <button class="btn" @click="shareQRCode">
      <i class="bi bi-share-fill"></i> Compartir el codigo QR
    </button>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import Footer from "../components/Footer.vue";
import QrcodeVue from "qrcode.vue"; //npm
import Swal from 'sweetalert2'; //npm

const url = ref("");
const qrSize = ref(290);
const inputRef = ref(null); // es para hacer focus en el input cuando cambio de pagina
const selectedPatron = ref("#eef2f3");
const selectedFondo = ref("#ff0099");

const addHttp = (event) => {
  const inputValue = event.target.value;

  if (inputValue && !inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
    url.value = `http://${inputValue}`;
  } else if (inputValue === "http://" || inputValue === "https://") {
    //osea me deja borrarlo sin problemas
    url.value = "";
  }
};

const shareQRCode = () => {
  if (navigator.share) {
    navigator.share({
      title: "Código QR generado",
      url: url.value,
    });
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'La funcionalidad de compartir no está soportada en este navegador.',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
};

onMounted(() => {
  inputRef.value.focus();
});

if (localStorage.getItem("link")) {
  url.value = JSON.parse(localStorage.getItem("link"));
}

watchEffect(() => {
  localStorage.setItem("link", JSON.stringify(url.value));
});
</script>

<style>
@import "../assets/estilos/styles.css";
</style>

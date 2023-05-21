<template>
  <button class="switch" id="switch" :class="{ active: toggleDarkMode }" @click="changeDarkMode">
    <span> <i class="bi bi-brightness-high-fill"></i></span>
    <span> <i class="bi bi-moon-fill"></i></span>
  </button>
</template>

<script setup>
import { ref } from "vue";

//inicializo variable y le digo que el body tenga la clase dark por defecto
const toggleDarkMode = ref(document.body.className === "dark");
const btnSwitch = ref(null);

const changeDarkMode = () => {
  toggleDarkMode.value = document.body.classList.toggle("dark");
  if (btnSwitch.value) {
    btnSwitch.value.classList.toggle("active");
  }
  toggleDarkMode.value ? (localStorage.theme = "dark") : (localStorage.theme = "light");
};

//DOMContentLoaded para asegurarse de que el código se ejecute después de que el documento HTML se haya cargado
document.addEventListener("DOMContentLoaded", () => {
  btnSwitch.value = document.querySelector("#switch");
});

if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}
</script>

<style>
@import "../assets/estilos/styles.css";
</style>

<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-transparent">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item nav-icon">
            <router-link to="/">Inicio</router-link>
            <!--<a class="nav-link active" aria-current="page" href="#home">Inicio</a>-->
          </li>
          <li class="nav-item nav-icon">
            <router-link to="/about">Generar QR</router-link>
            <!--<a class="nav-link" aria-current="page" href="#about">Generar QR</a>-->
          </li>
        </ul>
      </div>
      <Theme />
    </div>
  </nav>
</template>

<script setup>
import Theme from "../components/Theme.vue";
</script>

<style>
@import "../assets/estilos/styles.css";
</style>

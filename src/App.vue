<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
@import "../src/assets/estilos/styles.css";
</style>

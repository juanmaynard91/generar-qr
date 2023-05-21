<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import About from "./pages/About.vue";
import Footer from "./components/Footer.vue";
import Home from "./pages/Home.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style>
@import "../src/assets/estilos/styles.css";
</style>

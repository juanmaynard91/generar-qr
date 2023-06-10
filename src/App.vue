<template>
  <div id="app">
    <Navbar />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive> <component :is="Component" /> </keep-alive>
      </transition>
    </router-view>

    <Footer />
  </div>
</template>

<script setup>
/*para solucionar el problema de la transition en vue-router los componentes no tienen 
que tener otros componentes por fuera de del div principal*/
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
@import "../src/assets/estilos/styles.css";

/*animacion de transicion */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>

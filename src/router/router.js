import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    /* para solucionar el problema que no cargaba las paginas al utilizar github pages con router */
    history: createWebHistory('/generar-qr/'),
    routes: [
        { path: "/", component: () => import("../pages/Home.vue") },
        { path: "/about", component: () => import("../pages/About.vue") },
    ]
})

export default router;
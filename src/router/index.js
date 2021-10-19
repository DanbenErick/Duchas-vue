import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cabinas",
    name: "Cabinas",
    component: () =>
      import(/* webpackChunkName: "cabinas" */ "../views/Cabinas.vue"),
  },
  {
    path: "/clientes-atendidos",
    name: "ClientesAtendidos",
    component: () =>
      import(
        /* webpackChunkName: "clientesAtendidos" */ "../views/ClientesAtendidos.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

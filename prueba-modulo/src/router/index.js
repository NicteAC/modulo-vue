import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    alias: ["/inicio", "/home"],
    component: Home,
  },
  {
    path: "/opiniones",
    name: "Opiniones",
    component: () =>
      import(/* webpackChunkName: "Opiniones" */ "../views/Opiniones.vue"),
  },
  {
    path: "/administracion",
    name: "Administracion",
    component: () =>
      import(
        /* webpackChunkName: "Administracion" */ "../views/Administracion.vue"
      ),
  },
  {
    path: "/editando/:id",
    name: "Editando",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Editando" */ "../views/Editando.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "Editando" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

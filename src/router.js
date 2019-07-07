import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/NotFound.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Parkingarage from "./views/Parkingarage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "404 not found",
      component: NotFound
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/parkingarage",
      name: "停車場",
      component: Parkingarage
    }
  ]
});

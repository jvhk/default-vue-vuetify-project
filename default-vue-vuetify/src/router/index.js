import Vue from "vue";
import VueRouter from "vue-router";
import DefaultView from "../views/DefaultView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: DefaultView,
    },    
  ],
});

export default router;

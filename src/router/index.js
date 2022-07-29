import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Search from "@/views/Search";
import My from "@/views/My";
import Consult from "@/views/Consult";
import City from "@/views/City";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/my",
    component: My,
  },
  {
    path: "/consult",
    component: Consult,
  },
  {
    path: "/city",
    component: City,
  },
  {
    path: "*",
    redirect: "/home",
  },
];

export default new VueRouter({
  routes,
});

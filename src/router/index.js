import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: () => import("@/views/Layout"),
    children: [
      {
        path: "",
        component: () => import("@/views/Home"),
      },
      {
        path: "search",
        component: () => import("@/views/Search"),
      },
      {
        path: "news",
        component: () => import("@/views/News"),
      },
      {
        path: "profile",
        component: () => import("@/views/Profile"),
      },
      {
        path: "*",
        component: () => import("@/views/Home"),
      },
    ],
  },
  {
    path: "/city",
    component: () => import("@/views/City"),
  },
  {
    path: "/favorate",
    component: () => import("@/views/Favorate"),
  },
  {
    path: "/rent",
    component: () => import("@/views/Rent"),
    children: [
      {
        path: "",
        component: () => import("@/views/MyRent"),
      },
      {
        path: "add",
        component: () => import("@/views/Add"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/Login"),
  },
  {
    name: "detail",
    path: "/detail/:id",
    component: () => import("@/views/Detail"),
  },
  {
    path: "*",
    redirect: "/home",
  },
];

export default new VueRouter({
  routes,
});

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/tracker",
    name: "Tracker",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tracker.vue"),
  },
  {
    path: "/notebook",
    name: "Notebook",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notebook.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Friends.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Reports.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/History.vue"),
  },
  {
    path: "/progress",
    name: "Progress",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Progress.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

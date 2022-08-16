import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import adminDashboard from '../components/adminDashboard.vue' 

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import("../components/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () =>
      import("../components/Register.vue"),
  },
  {
    path: "/adminDashboard",
    name: "adminDashboard",
    component: () =>
      import( "../components/adminDashboard.vue"),
  },
  {
    path: "/Purchase",
    name: "Purchase",
    component: () => import("../components/Purchase.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import {
  createRouter,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import UserProfile from "../components/UserProfile.vue";
import adminDashboard from "../components/adminDashboard.vue";
import userDashBoard from "../components/userDashBoard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/UserProfile",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/userDashBoard",
    name: "userDashboard",
    component: userDashBoard,
  },
  {
    path: "/adminDashboard",
    name: "adminDashboard",
    component: adminDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});
router.beforeEach((to, from, next) => {
  const pages = ["/Login", "/Register", "/"];
  const authentication = !pages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authentication && !loggedIn) {
    next("/Login");
  } else {
    next();
  }
});

export default router;

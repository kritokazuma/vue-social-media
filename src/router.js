import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/login/login.vue";
import Register from './components/register/register.vue'
import Home from "./components/home/home.vue";
import jwtDecode from "jwt-decode";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register},
];

const getToken = () => localStorage.getItem("token");

function userToken() {
  const token = getToken() || null;
  const decodedToken = token ? jwtDecode(token) : null;
  return decodedToken;
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.path === "/login" && getToken()) return next("/");
//   return next();
// });

export default router;

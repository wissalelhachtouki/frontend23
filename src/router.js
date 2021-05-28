import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Login from "./views/Login";
import Contact from "./views/Contact";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Register from "@/views/Register";
import Blog1 from "./views/Blog1";
import Blog2 from "./views/Blog2";
import Dashboard from "@/views/Dashboard";
import Forgot from "@/views/Forgot";
import Reset from "@/views/Reset";
import SendEmail from "@/views/SendEmail";
import VerifyEmail from "@/views/VerifyEmail";
import User from "@/views/User";
import Calendrier from "@/views/Calendrier";
import Formations from "@/views/Formations";
import Todos from "@/views/Todos";
import Edituser from "@/views/Edituser";
import AdminDashboard from "@/views/AdminDashboard";
import NonAuth from "@/views/NonAuth";

Vue.use(Router);

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  //this is just an example. You will have to find a better or
  // centralised way to handle you localstorage data handling
  if (localStorage.getItem("token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/error"); // go to '/login';
  }
}

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/error",
      name: "error",
      components: { default: NonAuth }
    },
    {
      path: "/blog1",
      name: "blog1",
      components: { default: Blog1, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 }
      }
    },
    {
      path: "/blog2",
      name: "blog2",
      components: { default: Blog2, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: { default: Contact, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/register",
      name: "register",
      components: { default: Register, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/forgot-password",
      name: "forgot",
      components: { default: Forgot, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/reset/:token",
      name: "reset",
      components: { default: Reset, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      beforeEnter: guardMyroute,
      components: { default: Dashboard }
    },
    {
      path: "/admin/dashboard",
      name: "admindashboard",
      beforeEnter: guardMyroute,
      components: { default: AdminDashboard }
    },
    {
      path: "/profile",
      name: "profile",
      beforeEnter: guardMyroute,
      components: { default: User }
    },
    {
      path: "/edituser",
      name: "edituser",
      beforeEnter: guardMyroute,
      components: { default: Edituser }
    },
    {
      path: "/calendrier",
      name: "calendrier",
      beforeEnter: guardMyroute,
      components: { default: Calendrier }
    },
    {
      path: "/formations",
      name: "formations",
      beforeEnter: guardMyroute,
      components: { default: Formations }
    },
    {
      path: "/todo-list",
      name: "todo-list",
      beforeEnter: guardMyroute,
      components: { default: Todos }
    },
    {
      path: "/sendEmail",
      name: "sendEmail",
      beforeEnter: guardMyroute,
      components: { default: SendEmail, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/verify",
      name: "verify",
      components: { default: VerifyEmail, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

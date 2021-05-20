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
import edituser from "@/views/edituser";

Vue.use(Router);

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
    ,
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
      components: { default: Dashboard }
    },
    {
      path: "/user",
      name: "user",
      components: { default: User }
    },
    {
      path: "/edituser",
      name: "edituser",
      components: { default: edituser }
    },
    {
      path: "/calendrier",
      name: "calendrier",
      components: { default: Calendrier }
    },
    {
      path: "/formations",
      name: "formations",
      components: { default: Formations }
    },
    {
      path: "/todo-list",
      name: "todo-list",
      components: { default: Todos }
    },
    {
      path: "/sendEmail",
      name: "sendEmail",
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

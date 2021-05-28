<template>
  <div class="wrapper">
    <div class="page-header header-filter">
      <MainAdminSidebar v-if="user.type"/>
      <MainSidebar v-else/>

      <div class="home_content">
        <svg
          height="100%"
          width="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stop-color="#0c2340ff"></stop>
              <stop offset="95%" stop-color="#2a5788ff"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            class="transition-all duration-300 ease-in-out delay-150"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
        <header><MainNavbar2 /></header>
        <div class="content">
          <div class="md-layout-item md-medium-size-100 md-size-100">
            <div
              class="md-card md-card-profile md-theme-default "
              style=" margin-bottom: 30px"
            >

                <div v-if="user.picture === null" class="md-card-avatar">
                  <img :src="'http://localhost:8000/images/default-user-image.jpg'" class="img" />
                </div>
                <div v-else class="md-card-avatar">
                  <img :src="'http://localhost:8000/' + user.picture" class="img" />
                </div>

              <div class="md-card-content">
                <h4 v-if="user.firstName !== null && user.lastName !== null && user.age !== null" class="card-title">
                  {{ user.firstName }} {{ user.lastName }} , {{ user.age }}ans
                </h4>
                <h4 v-else class="card-title">
                  {{ user.name }}
                </h4>
                <h6 class="category text-gray">
                  {{ user.city }} , {{ user.country }}
                </h6>
                <br />
                <h6 class="category text-black-50">{{ user.job }}</h6>
                <h6 class="category text-gray">
                  {{ user.adresse }} , {{ user.codePostal }}
                </h6>
                <br /><br />
                <p class="card-description">{{ user.aboutMe }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import MainAdminSidebar from "@/layout/MainAdminSidebar";
import MainNavbar2 from "@/layout/MainNavbar2";

import { mapGetters } from "vuex";

export default {
  name: "User",
  components: {
    MainSidebar,
    MainAdminSidebar,
    MainNavbar2
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/vue-mk-headerr.jpg")
    }
  },
  computed: {
    ...mapGetters(["user"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style scoped>
/* Basic Style */

body {
  background: #fff;
  color: #333;
  font-family: Lato, sans-serif;
  background-color: #e4e4e4;
}

.container {
  display: block;
  width: 400px;
  margin: 10px auto 100px;
  background-color: #fff;
  padding: 0px 10px 10px 10px;
  border-radius: 10px;
}

h2 {
  text-align: center;
  padding-top: 10px;
  margin-bottom: 0px;
}

ul {
  margin: 0;
  padding: 0;
}

li * {
  float: left;
}

li,
h3 {
  clear: both;
  list-style: none;
}

input,
button {
  outline: none;
}

button {
  background: none;
  border: 0px;
  color: #888;
  font-size: 15px;
  width: 60px;
  margin: 10px 0 0;
  font-family: Lato, sans-serif;
  cursor: pointer;
}

button:hover {
  color: #333;
}

/* Heading */

h3,
label[for="new-task"] {
  color: #333;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 2px solid #333;
  padding: 20px 0 10px;
  margin: 0;
  text-transform: uppercase;
}

input[type="text"] {
  margin: 0;
  font-size: 18px;
  line-height: 18px;
  height: 18px;
  padding: 10px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 6px;
  font-family: Lato, sans-serif;
  color: #888;
}

input[type="text"]:focus {
  color: #333;
}

/* New Task */

label[for="new-task"] {
  display: block;
  margin: 0 0 20px;
}

input#new-task {
  float: left;
  width: 318px;
}

p > button:hover {
  color: #0fc57c;
}

/* Task list */

li {
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

li > input[type="checkbox"] {
  margin: 0 10px;
  position: relative;
  top: 15px;
}

li > label {
  font-size: 18px;
  line-height: 40px;
  width: 237px;
  padding: 0 0 0 11px;
}

li > input[type="text"] {
  width: 226px;
}

li > .delete:hover {
  color: #cf2323;
}

/* Completed */

#completed-tasks label {
  text-decoration: line-through;
  color: #888;
}

/* Edit Task */

ul li input[type="text"] {
  display: none;
}

ul li.editMode input[type="text"] {
  display: block;
}

ul li.editMode label {
  display: none;
}

.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  overflow-y: scroll;
  z-index: 100;
}
.sidebar.active ~ .home_content {
  z-index: 100;
}
.width {
  width: 95%;
  margin: 0 30px;
}
.home_content .text {
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}
.sidebar.active ~ .home_content {
  width: calc(100% - 240px);
  left: 240px;
}
.background-color {
  background-color: #fff;
}
.border {
  -webkit-box-shadow: -1px -1px 17px 4px #e1e5ea;
  box-shadow: -1px -1px 17px 4px #e1e5ea;
  border: 2px solid #1c6ea4;
  border-radius: 10px;
}

#svg {
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}
.md-card {
  margin-top: 2%;
  background-color: white;
  color: #333533;

  box-shadow: 0 8px 8px 0 rgba(0, 0, 0.3, 0.3);
  transition: 0.3s;
}
.md-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0.5, 0.5);
}

img {
  min-height: 120px !important;
  background-position: center;
  background-size: cover;
}
</style>

w<template>
  <div class="wrapper">
    <div class="page-header header-filter">
      <MainSidebar />

      <div class="home_content">
        <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#2a5788ff"></stop><stop offset="95%" stop-color="#0c2340ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>
        <header><MainNavbar2/></header>


                  <div class="content">
                  <div class=" row ">
                    <div class="col-lg-7 col-md-7">
                    <div class="card" style="margin: 15px">
                      <div
                        class="card-header card-header-primary card-header-icon"
                      >
                        <h4 class="card-title">Edit Profile


                        </h4>

                      </div>
                      <div class="card-body">
                        <form>
                          <div class="row">

                              <md-field class="md-form-group col-md-5" slot="inputs">
                                <md-icon></md-icon>
                                <label>First Name...</label>
                                <md-input v-model="email" type="email"></md-input>
                              </md-field>


                              <md-field class="md-form-group col-md-5" slot="inputs">
                                <md-icon></md-icon>
                                <label>Last Name...</label>
                                <md-input v-model="email" type="email"></md-input>
                              </md-field>

                          </div>

                          <div class="row">

                            <md-field class="md-form-group col-md-11 " slot="inputs">
                              <md-icon>adress</md-icon>
                              <label>About Me...</label>
                              <md-input v-model="email" type="email"></md-input>
                            </md-field>

                          </div>



                          <div class="row">

                              <md-field class="md-form-group col-md-4" slot="inputs">
                                <md-icon></md-icon>
                                <label>Country...</label>
                                <md-input v-model="email" type="email"></md-input>
                              </md-field>



                              <md-field class="md-form-group col-md-4" slot="inputs">
                                <md-icon></md-icon>
                                <label>City...</label>
                                <md-input v-model="email" type="email"></md-input>
                              </md-field>
                            <md-field class="md-form-group col-md-4" slot="inputs">
                              <md-icon></md-icon>
                              <label>Code Postal...</label>
                              <md-input v-model="email" type="email"></md-input>
                            </md-field>

                      </div>
                          <div class="row">

                              <md-field class="md-form-group col-md-11 " slot="inputs">
                                <md-icon>adress</md-icon>
                                <label>About Me...</label>
                                <md-input v-model="email" type="email"></md-input>
                              </md-field>

                          </div>
                          <div
                            class="md-layout-item md-size-10 "

                          >
                            <md-button
                              id="btn1"
                              class=" md-warning md-sm  md-block"

                            >
                              <md-icon>playlist_add</md-icon> Ajouter
                            </md-button>
                          </div>
                        </form>
                      </div>
                    </div>
                    </div>
                    <div class="md-layout-item md-medium-size-100 md-size-33" style="margin: auto"><div class="md-card md-card-profile md-theme-default"><div class="md-card-avatar"><img src="@/assets/img/christian.jpg" class="img"></div><div class="md-card-content"><h6 class="category text-gray">CEO / Co-Founder</h6><h4 class="card-title">Alec Thompson</h4><p class="card-description"> Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... </p><button type="button" class="md-button md-round md-theme-default md-success"><div class="md-ripple"><div class="md-button-content">Follow</div> </div></button></div></div></div>
                  </div>
                  </div>
                  <footer class="footer">
                    <div class="container-fluid d-flex flex-wrap justify-content-between">
                      <nav>
                        <ul class="footer-menu">
                          <li>
                            <a href="#/dashboard" class="">EditUser</a>
                          </li>
                        </ul>
                      </nav>
                      <div class="copyright"> © 2021, Designed by <a href="https://www.invisionapp.com/">Invision</a>. Coded by <a href="https://binarcode.com" target="_blank" rel="noopener">BinarCode</a> and <a href="https://www.creative-tim.com/?ref=pdf-vuejs" target="_blank" rel="noopener">Creative Tim</a>. </div></div></footer>



      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import MainNavbar2 from "@/layout/MainNavbar2";

import { mapGetters } from "vuex";

export default {
  name: "edituser.vue",
  components: {
    MainSidebar,
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
.col-lg-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}
.card {
  border: 0;
  border-radius: .1875rem;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 1px 15px 1px ;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
}
.card .card-header {
  padding: 15px 15px 0;
  border: 0;
}
.card-header:first-child {
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}







body {
  background: #fff;
  color: #333;
  font-family: Lato, sans-serif;
  background-color: #e4e4e4;
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
  overflow-x: hidden;
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

#svg{
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}
</style>



<template>
  <div class="wrapper">
    <div class="page-header header-filter">
      <MainAdminSidebar v-if="user.type"/>
      <MainSidebar v-else/>

      <div class="home_content">
        <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#0c2340ff"></stop><stop offset="95%" stop-color="#2a5788ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>
        <header>
          <NavBarAdmin v-if="user.type"/>
          <MainNavbar2 v-else/>
        </header>


                  <div class="content">
                  <div class=" row ">
                    <div class="col-lg-7 col-md-7" style="margin: auto">
                    <div class="card" style="margin: 15px">
                      <div
                        class="card-header card-header-primary card-header-icon"
                      >
                        <h4 class="card-title">Completer votre profile


                        </h4>

                      </div>
                      <div class="card-body">
                        <form>
                          <div class="row">

                              <md-field class="md-form-group col-md-6" slot="inputs">
                                <md-icon></md-icon>
                                <label>Nom d'utilisateur...</label>
                                <md-input v-model="name" type="text"></md-input>
                              </md-field>


                              <md-field class="md-form-group col-md-6" slot="inputs">
                                <md-icon></md-icon>
                                <label>Adresse E-mail...</label>
                                <md-input v-model="user.email" type="email" disabled="disabled"></md-input>
                              </md-field>

                          </div>
                          <div class="row">

                            <md-field class="md-form-group col-md-6" slot="inputs">
                              <md-icon></md-icon>
                              <label>Prénom...</label>
                              <md-input v-model="firstName" type="text"></md-input>
                            </md-field>


                            <md-field class="md-form-group col-md-6" slot="inputs">
                              <md-icon></md-icon>
                              <label>Nom...</label>
                              <md-input v-model="lastName"  type="text"></md-input>
                            </md-field>

                          </div>
                          <div class="row">

                            <md-field class="md-form-group col-md-6" slot="inputs">
                              <md-icon></md-icon>
                              <label>Profession...</label>
                              <md-input v-model="job"  type="text"></md-input>
                            </md-field>



                            <md-field class="md-form-group col-md-6" slot="inputs">
                              <md-icon></md-icon>
                              <label>Âge...</label>
                              <md-input v-model="age" type="number" min="0" onkeyup="if(this.value<0){this.value= this.value * -1}"></md-input>
                            </md-field>


                          </div>

                          <div class="row">

                            <md-field class="md-form-group col-md-11 " slot="inputs">
                              <md-icon>adresse</md-icon>
                              <label>Addresse...</label>
                              <md-input v-model="adresse"  type="text"></md-input>
                            </md-field>

                          </div>



                          <div class="row">

                              <md-field class="md-form-group col-md-4" slot="inputs">
                                <md-icon></md-icon>
                                <label>Ville...</label>
                                <md-input v-model="city"  type="text"></md-input>
                              </md-field>



                              <md-field class="md-form-group col-md-4" slot="inputs">
                                <md-icon></md-icon>
                                <label>Pays...</label>
                                <md-input v-model="country" type="text"></md-input>
                              </md-field>
                            <md-field class="md-form-group col-md-4" slot="inputs">
                              <md-icon></md-icon>
                              <label>Code Postal...</label>
                              <md-input v-model="codePostal" type="number"></md-input>
                            </md-field>

                      </div>








                          <div class="row">


                            <md-field class="md-form-group col-md-12" slot="inputs" >

                              <label>Profil... </label>

                              <md-textarea v-model="aboutMe"  type="text"></md-textarea>
                            </md-field>

                          </div>
                          <div class="modal-footer">
                          <div
                            class="md-layout-item md-size-10 "
                            style="float: right ; margin-top: 30px"
                          >
                            <md-button
                                @click.prevent="handleValid"
                              class=" md-primary md-sm  md-block"

                            >
                              Ajouter
                            </md-button>
                          </div>
                      </div>
                        </form>
                      </div>
                    </div>
                    </div>
                    <div class="md-layout-item md-medium-size-100 md-size-33" style="margin: auto">
                      <div class="md-card md-card-profile md-theme-default">
                        <div class="md-card-avatar">
                          <div v-if="user.picture === null">
                            <img :src="'http://localhost:8000/images/default-user-image.jpg'" class="img" />
                          </div>
                          <div v-else>
                            <img :src="'http://localhost:8000/' + user.picture" class="img" />
                          </div>
                          <input type="file" name="picture" class="form-control-file" id="picture" @change="onFileChange"/>
                        </div>
                        <div class="md-card-content">
                          <h4 v-if="user.firstName !== null && user.lastName !== null && user.age !== null" class="card-title">
                            {{ user.firstName }} {{ user.lastName }} , {{ user.age }}ans
                          </h4>
                          <h4 v-else class="card-title">
                            {{ user.name }}
                          </h4>
                          <h6 class="category text-gray">{{ user.city }} ,  {{ user.country }}</h6>
                          <br>
                          <p class="card-description">{{ user.aboutMe }}</p>
                          <div
                            class="md-layout-item md-size-10 "
                          style="margin-left: 112px"
                          >
                          <md-button
                              href="#/profile"
                              id="btn1"
                            class=" md-info  md-sm md-block "

                          >
                            Plus
                          </md-button>
                          </div>
                        </div></div></div>
                  </div>
                  </div>



      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import MainAdminSidebar from "@/layout/MainAdminSidebar";
import NavBarAdmin from "@/layout/NavBarAdmin";
import MainNavbar2 from "@/layout/MainNavbar2";

import { mapGetters } from "vuex";

export default {
  name: "Edituser",
  components: {
    MainSidebar,
    MainAdminSidebar,
    MainNavbar2,
    NavBarAdmin
  },
  data(){
    return{
      name: "",
      firstName: "",
      lastName: "",
      job: "",
      age: "",
      adresse: "",
      city: "",
      country: "",
      codePostal: "",
      aboutMe: "",
      picture: ""
    };
  },
  methods: {
    async handleValid() {
      try {
        const data = {
          id: this.user.id,
          name: this.name,
          firstName: this.firstName,
          lastName: this.lastName,
          job: this.job,
          age: this.age,
          adresse: this.adresse,
          city: this.city,
          country: this.country,
          codePostal: this.codePostal,
          aboutMe: this.aboutMe
        };

        console.log(data);
        await this.$store.dispatch("updateProfile", data);

            this.name = "";
            this.firstName = "";
            this.lastName = "";
            this.job = "";
            this.age = "";
            this.adresse = "";
            this.city = "";
            this.country = "";
            this.codePostal = "";
            this.aboutMe = "";
      } catch (e) {
        this.error = "Error occurred !";
      }
    },
    onFileChange(event){
      this.user.picture = event.target.files[0];
      let formData = new FormData();

      formData.append("picture", this.user.picture);

      this.$store.dispatch("updatePicture", formData);
    }
  },
  computed: {
    ...mapGetters(["user"])
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

input[type="text"]:focus {
  color: #333;
}

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
#btn1{
  background: rgb(0,183,225);
  background: linear-gradient(0deg, rgba(0,183,225,1) 0%, rgba(0,231,201,1) 100%);
}
#svg{
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}

.md-card-avatar input[type=file] {
  cursor: pointer;
  display: block;
  left: 0;
  opacity: 0!important;
  position: absolute;
  top: 0;
}

img{
  min-height: 120px !important;
  background-position: center;
  background-size: cover;
}
</style>



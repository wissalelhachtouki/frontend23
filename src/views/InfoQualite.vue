<template>
  <div class="wrapper">
    <div class="page-header header-filter">
      <MainSidebar />

      <div class="home_content">
        <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#0c2340ff"></stop><stop offset="95%" stop-color="#2a5788ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>
        <header>
          <meta name="viewport" content="width=device-width"/>
          <MainNavbar2 />
        </header>


        <div class="content">
          <div class=" row ">
            <div class="col-lg-9 col-md-9" style="margin: auto">
              <div class="card">
                <div class="card-header card-header-primary card-header-icon">
                  <h4 class="card-title">Rapport Qualité de la formation - Compléter votre rapport</h4>

                </div>
                <div class="card-body">
                  <form>
                    <div class="row">

                      <md-field class="md-form-group col-md-12" slot="inputs">
                        <md-icon></md-icon>
                        <label>Nom de la Formation...</label>
                        <md-input v-model="title_formation" type="text"></md-input>
                      </md-field>



                    </div>


                      <md-field class="md-form-group col-md-12" slot="inputs">
                        <md-icon></md-icon>
                        <label>Préparation de la formation...</label>
                        <md-input v-model="preparation" type="number" onkeyup="if(this.value<0){this.value = this.value * -1}
                                                                                else if(this.value>100){this.value = 100}"></md-input>
                      </md-field>


                      <md-field class="md-form-group col-md-12" slot="inputs">
                        <md-icon></md-icon>
                        <label>Organisation de la formation...</label>
                        <md-input v-model="organisation" type="number" onkeyup="if(this.value<0){this.value = this.value * -1}
                                                                                else if(this.value>100){this.value = 100}"></md-input>
                      </md-field>




                      <md-field class="md-form-group col-md-12" slot="inputs">
                        <md-icon></md-icon>
                        <label>Déroulement de la formation...</label>
                        <md-input v-model="deroulement" type="number" onkeyup="if(this.value<0){this.value = this.value * -1}
                                                                                else if(this.value>100){this.value = 100}"></md-input>
                      </md-field>



                      <md-field class="md-form-group col-md-12" slot="inputs">
                        <md-icon></md-icon>
                        <label>Contenu de la formation...</label>
                        <md-input v-model="contenu" type="number" onkeyup="if(this.value<0){this.value = this.value * -1}
                                                                                else if(this.value>100){this.value = 100}"></md-input>
                      </md-field>



                      <md-field class="md-form-group col-md-12 " slot="inputs">
                        <md-icon>adress</md-icon>
                        <label>Efficacité de la formation...</label>
                        <md-input v-model="efficacite" type="number" onkeyup="if(this.value<0){this.value = this.value * -1}
                                                                                else if(this.value>100){this.value = 100}"></md-input>
                      </md-field>

                    <div class="row">
                      <md-field class="md-form-group col-md-11" slot="inputs" >
                        <label>Avis.. </label>
                        <md-textarea v-model="avis" type="text"></md-textarea>
                      </md-field>
                    </div>

                    <div class="modal-footer">
                      <div
                          class="md-layout-item md-size-10"
                          style="float: right ; margin-top: 30px">
                        <md-button
                            @click.prevent="handleValid"
                            class=" md-primary md-sm  md-block">
                          <md-icon>description</md-icon> Ajouter
                        </md-button>
                      </div>
                    </div>
                  </form>
                </div>
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
import MainNavbar2 from "@/layout/MainNavbar2";
import axios from "axios";


export default {
  name: "InfoQualite",
  components: {
    MainSidebar,
    MainNavbar2
  },
  data(){
    return{
      title_formation: "",
      preparation: "",
      organisation: "",
      deroulement: "",
      contenu: "",
      efficacite: "",
      avis: ""
    };
  },
  methods: {
    async handleValid() {
      try {
        const data = {
          title_formation: this.title_formation,
          preparation: this.preparation,
          organisation: this.organisation,
          deroulement: this.deroulement,
          contenu: this.contenu,
          efficacite: this.efficacite,
          avis: this.avis
        };
        const response = await axios.post("addQuality", data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            verification: "Bearer " + localStorage.getItem("tokenV")
          }
        });
        this.title_formation = "";
        this.preparation = "";
        this.organisation = "";
        this.deroulement = "";
        this.contenu = "";
        this.efficacite = "";
        this.avis = "";

        await this.$router.push("/qualite");

      } catch (e) {
        this.error = "Error occurred !";
      }
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



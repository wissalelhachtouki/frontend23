<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="info">
              <h4 slot="title" class="card-title">Je m'inscris</h4>


              <md-field class="md-form-group" slot="inputs">
                <md-icon>people</md-icon>
                <label>Nom et Prénom...</label>
                <md-input v-model="name" type="text"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>person</md-icon>
                <label>Identifiant...</label>
                <md-input v-model="username" type="text"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Adresse E-mail...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>phone</md-icon>
                <label>Télephone...</label>
                <md-input v-model="number" type="text"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Mot de passe...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>warning</md-icon>
                <label>Confirmer Mot de passe...</label>
                <md-input v-model="password_confirmation" type="password"></md-input>
              </md-field>

              <md-label class="md-form-group" slot="error">
                <error v-if="error" :error="error"/>
              </md-label>

              <md-button @click.prevent="handleSubmit" slot="footer" class="md-simple md-info md-lg">
                Je m'inscris
              </md-button>

              <md-label slot="sign" class="md-form-group">
                <hr>
                <p>J'ai déjà un compte.<a href="#/login"><u>Je me connecte</u></a></p>
              </md-label>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import axios from "axios";
import Error from "@/views/components/Error";

export default {
  components: {
    LoginCard,
    Error
  },
  bodyClass: "login-page",
  data() {
    return {
      name: "",
      email: "",
      number: "",
      password: "",
      password_confirmation: "",
      error: "",
      username: "",
    };
  },
  methods: {
    async handleSubmit(){
      try{
          const data = {
            name: this.name,
            email: this.email,
            type: 0,
            password: this.password,
            password_confirmation: this.password_confirmation
        };
         const response = await axios.post("register", data);

        console.log(response);
         this.$router.push("/login");
      }
      catch (e){
        this.error = "Error occurred !"
      }
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/vue-mk-headerr.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>

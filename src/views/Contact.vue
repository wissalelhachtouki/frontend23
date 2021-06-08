<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="orange">
              <h4 slot="title" class="card-title"> Nous Contacter </h4>


              <md-field class="md-form-group" slot="inputs">
                <md-icon>people</md-icon>
                <label>Nom ...</label>
                <md-input v-model="name" type="text"></md-input>
              </md-field>



              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Adresse E-mail...</label>
                <md-input v-model="yourEmail" type="email"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs" >

                <label> <md-icon>edit</md-icon> </label>

                <md-textarea v-model="content" type="text"></md-textarea>
              </md-field>

              <md-label class="md-form-group" slot="error">
                <div v-if="message" class="alert alert-success" role="alert">
                  {{ message }}
                </div>
              </md-label>

              <md-label class="md-form-group" slot="error">
                <error v-if="error" :error="error"/>
              </md-label>

              <md-button @click.prevent="handleSubmit" slot="footer" class="md-simple md-warning md-lg">
                Envoyer
              </md-button>
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
      yourEmail: "",
      content: "",
      message: "",
      error: ""
    };
  },
  methods: {
    async handleSubmit(){
      try {
        const data = {
          name: this.name,
          yourEmail: this.yourEmail,
          content: this.content
        };
        const response = await axios.post("contact", data);

        this.name = "";
        this.yourEmail = "";
        this.content = "";

        this.message = "Your message was send ! ";
        this.error = "";
      } catch (e) {
        this.error = "Error occurred !";
        this.message = "";
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

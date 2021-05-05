<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="red">
              <h4 slot="title" class="card-title">Forgot Password</h4>



              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>


              <md-label class="md-form-group" slot="error">
                <div v-if="message" class="alert alert-success" role="alert">
                  {{message}}
                </div>
              </md-label>

              <md-label class="md-form-group" slot="error">
                <error v-if="error" :error="error"/>
              </md-label>


              <md-button @click.prevent="handleSubmit" slot="footer" class="md-simple md-danger md-lg">
                Submit
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
      email: "",
      message: "",
      error: ""
    };
  },
  methods: {
    async handleSubmit(){
        try{
          const data = {
            email: this.email
          };
          await axios.post("password/create", data);

          this.message = "We have e-mailed your password reset link!";
          this.error = "";
          //this.$router.push("/login");
          }
        catch (e){
          this.error = "Error occurred !";
          this.message = "";
        }
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
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

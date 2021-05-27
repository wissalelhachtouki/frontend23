<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>

              <md-label class="md-form-group" slot="error">
              <error v-if="error" :error="error"/>
              </md-label>


              <md-checkbox v-model="boolean" slot="action">Remember me</md-checkbox>

              <md-label slot="action" class="md-form-group">
                <br>
                <a href="#/forgot-password">Forgot Password?</a>
              </md-label>




              <md-button @click.prevent="handleSubmit" slot="footer" class="md-simple md-success md-lg">
                Se Connecter
              </md-button>

              <md-label slot="sign" class="md-form-group">
                <hr>
                <p>Don't have an account? <a href="#/register"> Sign up</a></p>
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
      email: "",
      password: "",
      boolean: false,
      error: ""
    };
  },
  methods: {
    async handleSubmit(){
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post("login", data);
        localStorage.setItem("token", response.data.token);

        localStorage.setItem("tokenV", response.data.user.tokenV);


        console.log(response.data);

        await this.$store.dispatch("user", response.data.user);


        console.log(response);

        const verified = response.data.email_verified_at;



        if (verified){
          this.$router.push("/edituser");
        }else{
        this.$router.push("/sendEmail");
        }



      }
      catch (e){
        this.error = "Invalid email or password !"
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

<template>
  <div class="wrapper">
    <div class="section page-header header-filter" style="padding-bottom: 20%" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Je me connecte</h4>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>person</md-icon>
                <label>Identifiant...</label>
                <md-input v-model="username" type="text"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Mot de passe...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>

              <md-label class="md-form-group" slot="error">
              <error v-if="error" :error="error"/>
              </md-label>


              <md-label slot="action" class="md-form-group">
                <br>
                <a href="#/forgot-password"><u>Mot de passe oublié?</u></a>
              </md-label>




              <md-button @click.prevent="handleSubmit" slot="footer" class="md-simple md-success md-lg">
                Se Connecter
              </md-button>

              <md-label slot="sign" class="md-form-group">
                <hr>
                <p>Je n'ai pas encore de compte.<a href="#/register"><u>Je m'inscris</u></a></p>
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
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async handleSubmit(){
      try {
        const data = {
          username: this.username,
          password: this.password
        };
        const response = await axios.post("login", data);
        localStorage.setItem("token", response.data.token);

        localStorage.setItem("tokenV", response.data.user.tokenV);

        localStorage.setItem("type", response.data.user.type);




        await this.$store.dispatch("user", response.data.user);



        const verified = response.data.email_verified_at;



        if (verified){
          if (response.data.user.type === 0) {
            this.$router.push("/edituser");
          } else {
            this.$router.push("/admin/dashboard")
          }
        } else {
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

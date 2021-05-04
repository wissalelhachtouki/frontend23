<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="info">
              <h4 slot="title" class="card-title">Register</h4>


              <md-field class="md-form-group" slot="inputs">
                <md-icon>people</md-icon>
                <label>Nom d'utilisateur...</label>
                <md-input v-model="nom" type="text"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>warning</md-icon>
                <label>Confirm Password...</label>
                <md-input v-model="password"></md-input>
              </md-field>


              <md-label slot="inputs" class="md-form-group">

                <br>
                <p>Have already an account? <a href="#/login">Sign in</a></p>
              </md-label>


              <md-button slot="footer" class="md-simple md-info md-lg">
                Confirmer
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

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {

      email: null,
      password: null
    };
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

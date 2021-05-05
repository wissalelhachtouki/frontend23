<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="red">
              <h4 slot="title" class="card-title">Reset Password</h4>

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

              <md-field class="md-form-group" slot="inputs">
                <md-icon>warning</md-icon>
                <label>Confirm Password...</label>
                <md-input v-model="password_confirmation" type="password"></md-input>
              </md-field>

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
export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    async handleSubmit(){
      const data = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        token: this.$route.params.token
      };
      const response = await axios.post("password/reset", data);
      console.log(response);
      this.$router.push("/login");
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

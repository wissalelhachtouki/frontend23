<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <md-card>
              <md-card-header data-background-color="blue" class="text-center">
                <div class="md-title">Sending you an Email</div>
              </md-card-header>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
              </md-card-content>

              <md-card-actions>
                <md-button @click.prevent="handleSend" class="md-simple md-info md-lg ">Send</md-button>
              </md-card-actions>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SendEmail",
  methods: {
    async handleSend(){

      console.log("//////// %c","color:green");
      console.log("******");

      //console.log(localStorage.getItem("token"));

      console.log("========================");

      console.log(localStorage.getItem("tokenV"));
      console.log("******");

      const result = await axios.get("email/resend");

      console.log(result);
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

<style scoped>

</style>

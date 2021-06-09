<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <md-card>
              <md-card-header data-background-color="blue" class="text-center">
                <div class="md-title">Verification Avec Succes !</div>
              </md-card-header>

              <md-card-content>
                 Votre Email à bien été vérfier .
              </md-card-content>

              <md-card-actions>
                <md-button href="#/login" class="md-simple md-info md-lg ">Go Login</md-button>
              </md-card-actions>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "VerifyEmail",
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

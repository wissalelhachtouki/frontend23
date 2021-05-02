<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">

            <div class="brand">
              <h1>Digiforma</h1>
              <h3>La solution tout-en-un pour les professionnels de la formation</h3>
            </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Basic Elements</h2>
          </div>
          <basic-elements></basic-elements>
        </div>
      </div>
      <div class="section section-navbars">
        <div class="container">
          <small-navigation></small-navigation>
        </div>
        <navigation></navigation>
      </div>
      <div class="section section-tabs">
        <div class="container">
          <tabs></tabs>
        </div>
      </div>
      <div class="section section-white">
        <div class="container">
          <nav-pills></nav-pills>
        </div>
      </div>
      <div class="section section-notifications">
        <div class="container">
          <div class="title">
            <h3>Notifications</h3>
          </div>
        </div>
        <notifications></notifications>
      </div>
      <div class="section">
        <div class="container">
          <typography-images></typography-images>
        </div>
      </div>
      <div class="section section-javascript">
        <div class="container">
          <javascript-components></javascript-components>
        </div>
      </div>




      <div class="section section-download" id="downloadSection">
        <div class="container">

          <br /><br />




        </div>
      </div>
    </div>
  </div>
</template>

<script>









export default {
  components: {





  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-headerr.jpg")
    },



  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>

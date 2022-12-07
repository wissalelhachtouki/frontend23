<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">

      <div class="md-layout">
        <div class="md-layout-item">
            <div class="brand">
              <h1>Needs</h1>
              <h3>La solution tout-en-un pour l'expression et la gestion de vos Besoins</h3>
            </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">

      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2 style=" font-family: 'Arial Rounded MT Bold'"><strong>About us</strong></h2>
          </div>
          <about-us></about-us>
        </div>
      </div>

      <div class="section ">
        <div class="container">
          <div class="title">
            <h2 style="text-align: center ; color: darkslategray ; font-family: 'Arial Rounded MT Bold'"  ><strong> Le copilote numérique de l'expression et du traitement de vos Besoins  </strong></h2>
          </div>
        </div>
      </div>


      <div class="section">
        <div class="container">
          <Tasks></Tasks>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <gestionforma></gestionforma>
        </div>
      </div>

      <div class="section">
        <div class="container">

          <card></card>
        </div>
      </div>


    </div>
  </div>
</template>

<script>










import Tasks from "./components/Tasks";
import Gestionforma from "./components/Gestionforma";
import AboutUs from "./components/AboutUs";
import card from "./components/card";

export default {
  components: {
    AboutUs,
    Gestionforma,
    Tasks,
    card,






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

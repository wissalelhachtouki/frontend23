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
            <h2 style="text-align: center"><strong>ABOUT US</strong></h2>
          </div>
          <about-us></about-us>
        </div>
      </div>

      <div class="section ">
        <div class="container">
          <div class="title">
            <h2 style="text-align: center ; color: darkslategray ; font-family: 'Arial Rounded MT Bold'"  ><strong> Le copilote numérique de votre  activité de formation </strong></h2>
          </div>
          <details-section></details-section>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <DashboardSection></DashboardSection>
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

      <div class="section section-javascript">
        <div class="container">
          <javascript-components></javascript-components>
        </div>
      </div>

      <div class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
                class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2 style="color: darkseagreen"><strong>Blog</strong></h2>
              <h4>
                Non seulement le blog vous aide à augmenter le trafic sur votre site, mais il vous permettra de promouvoir votre notoriété, d'améliorer la visibilité de vos produits et surtout d'entretenir une relation commerciale durable avec vos clients.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-examples">
        <div class="container-fluid text-center">
          <div class="md-layout">
            <div class="md-layout-item">
              <a href="#/blog1" target="_blank">
                <img
                    :src="blog1"
                    alt="Rounded Image"
                    class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/blog1" class="md-simple md-success md-lg"
              ><strong>Lire la suite </strong> </md-button
              >
            </div>
            <div class="md-layout-item">
              <a href="#/blog2" target="_blank">
                <img
                    :src="blog2"
                    alt="Rounded Image"
                    class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/blog2" class="md-simple md-success md-lg"
              ><strong>Lire la suite </strong> </md-button
              >
            </div>
          </div>
        </div>
      </div>





      <div class="section section-download" id="downloadSection">
        <div class="container">

          <br/><br/>


        </div>
      </div>
    </div>
  </div>
</template>

<script>









import DetailsSection from "./components/DetailsSection";
import DashboardSection from "./components/DashboardSection";
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
    DashboardSection,
    DetailsSection





  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    },
    blog1: {
      type: String,
      default: require("@/assets/img/blog1.jpg")
    },
    blog2: {
      type: String,
      default: require("@/assets/img/blog2.jpg")
    }


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

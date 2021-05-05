<template>
  <div class="wrapper">
    <parallax
        class="section page-header header-filter"
        :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                      :src="img"
                      alt="Circle Image"
                      class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Wissal El hachtouki</h3>
                  <h6>Pourquoi Un Dashboard?</h6>
                  <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple md-dribbble"
                  ><i class="fab fa-dribbble"></i
                  ></md-button>
                  <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple md-twitter"
                  ><i class="fab fa-twitter"></i
                  ></md-button>
                  <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple md-pinterest"
                  ><i class="fab fa-pinterest"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Le dashboard affiche tous les éléments qui permettent d’apprécier et de juger la situation dans laquelle se trouve l’entreprise. Il permet d’avoir une vue générale du système, car il résume toutes les informations en quelques indicateurs essentiels. Il aide ainsi à prendre les bonnes décisions.

              Comme dans une voiture, le tableau de bord aide à piloter son entreprise. Parmi les fonctions les plus importantes figurent les voyants rouges ou orange qui signalent l’apparition d’un problème à corriger. En effet, grâce à sa mise en forme, il est plus facile de trouver quel indicateur revoir.

              Il permet essentiellement de gagner du temps, car il donne une vue d’ensemble sur toutes les données chiffrées qui ne seront plus éparpillées dans les différentes branches de l’entreprise, mais centralisées dans un seul support.

              En outre, le dashboard aide à savoir si les objectifs ont été atteints. Dans le cas contraire, la réaction sera rapide si le tableau est régulièrement mis à jour.
              Ce ne sont pas toutes les informations qui devront être affichées sur le dashboard ou du moins pas en détail. Il faudra les sélectionner et définir quels sont les bons indicateurs. À partir de ces derniers, il est possible d’opter pour un tableau de bord analytique ou un tableau de bord opérationnel.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/olu-eletu.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/clem-onojeghuo.jpg") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/vue-mk-headerr.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/christian.jpg")
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

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>

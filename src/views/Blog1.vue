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
                  <h3 class="title">Carla Hortensia</h3>
                  <h6>Designer</h6>
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
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.
              La formation professionnelle fait partie des droits des salariés inscrits dans le Code du travail. Ainsi, les employeurs sont tenus d’en proposer au sein de leur établissement. Les travailleurs, en revanche, sont libres d’accepter ou de refuser d’intégrer ces programmes.

              Cette attitude est toutefois incompatible avec la construction d’une carrière. Ainsi, les travailleurs ont intérêt à saisir ces opportunités. De leur côté, les entreprises pourront améliorer leurs résultats, grâce au développement des compétences individuelles et collectives.

              Les employeurs évoquent parfois des problèmes organisationnels comme freins à la formation. Ils ont pourtant la possibilité d’organiser les séances pendant ou hors du temps de travail. De plus, ces programmes peuvent être réalisés en interne ou confiés à des professionnels tiers.

              L’intervention d’étrangers permet notamment de marquer le caractère extraordinaire de la formation. Ainsi, les participants seront plus curieux et réceptifs au contenu. Ces conditions sont particulièrement favorables à l’assimilation.

              De plus, la situation encourage les échanges entre intervenants et collaborateurs. Ces derniers auront en effet moins d’appréhension face à ces nouveaux visages. Enfin, cette ouverture vers le monde extérieur participe au développement personnel et professionnel des salariés.


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
      default: require("@/assets/img/profile_city.jpg")
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

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
                  <h3 class="title">Anass Belkas</h3>
                  <h6>Quel est le rôle de la formation ?</h6>
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
              La formation permet au salarié de développer sa carrière professionnelle, sur le long terme. Grâce à ces cursus, il pourra en effet améliorer ses capacités, s’adapter au changement et éventuellement obtenir une promotion. Le renforcement de ses compétences sera par ailleurs favorable à sa mobilité interne, voire externe.

              Les objectifs de la formation peuvent varier en fonction de l’entreprise et des collaborateurs concernés. Ces programmes sont notamment indispensables pour réajuster les connaissances du personnel aux besoins de l’établissement ou à l’évolution du métier.

              Le salarié peut également avoir besoin d’étoffer ses compétences pour mieux remplir ses missions actuelles ou futures. D’ailleurs, de nombreux participants sont motivés par l’envie de progresser dans la hiérarchie. Ils seront ainsi en mesure de concrétiser leurs projets professionnels grâce à la formation.

              Aujourd’hui, un salarié expérimenté peut vite devenir moins performant face aux nombreux progrès dans son secteur. Il a donc besoin d’une remise à niveau pour gagner en efficacité dans son travail. De plus, les acquis de ces personnes sont précieux pour l’entreprise. La formation permettra ainsi de combler leurs lacunes et de mettre en valeur leurs atouts.



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
      default: require("@/assets/img/ identité.jpg")
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

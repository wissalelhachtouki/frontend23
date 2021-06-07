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
                  <h6>Gérer la communication avec vos apprenants avant et après une formation</h6>

                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Pour initier un contact avec vos apprenants, et la formation n’ayant pas démarré, vous n’avez pas beaucoup d’outils à votre disposition. Le plus simple et le plus efficace de tous ? L’e-mail !

              Que celui-ci soit envoyé par l’organisme ou par le formateur ou la formatrice directement, ce message électronique commencera de préférence par des présentations. En quelques lignes, pas plus, dites qui est le formateur ou la formatrice. Donnez quelques éléments de CV, un hobby ou un élément biographique qui ne s’oublie pas (un tour du monde, un changement de voie professionnelle radicale qui l’a amené(e) à devenir formateur, formatrice…).

             <br> Osez éventuellement une pointe d’humour, ou une devinette sur laquelle méditer en attendant de se retrouver, de manière à marquer les esprits.

              <br>Enfin, bien sûr, donnez toutes les informations pratiques qui permettront aux apprenants d’arriver jusqu’à vous le jour J : dates, horaires, adresse physique du lieu de formation ou lien de connexion à l’outil de visioconférence…

              Si la formation s’effectue en présentiel, n’hésitez pas à consigner ces informations dans une convocation que vous glisserez en pièce jointe pour que vos apprenants puissent l’imprimer facilement.
              <br>Et puis, ajoutez des ressources si cela est pertinent (via un lien dropbox, Google Drive, ou directement en glissant les documents en pièce jointe).

              <br>Enfin, si la formation est effectuée en visioconférence, n’hésitez pas à rappeler quelques bonnes pratiques.
              <br>Il est essentiel pour les apprenants, et pour la bonne conduite d’une formation à distance, qu’ils s’installent dans un lieu calme, éloigné de l’open space, où ils ne seront pas dérangés.

             <br> Il est également important, pour une bonne compréhension des interventions de chacun (le formateur ou la formatrice, et les autres apprenants), mais aussi pour éviter les désagréments sonores (écho, son de mauvaise qualité…), que chacun utilise un casque ou des écouteurs. Encouragez également chacun à activer sa webcam.

              <br>Cela pour faciliter l’établissement d’une cohésion du groupe, mais aussi l’animation de la formation. Il s’agit là d’un point essentiel que vous pouvez expliquer. <br>
              Pour conclure, partagez votre plaisir d’animer cette formation et assurez tout le monde de votre disponibilité pour répondre aux questions en amont de la formation.
<br>
              <br>

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

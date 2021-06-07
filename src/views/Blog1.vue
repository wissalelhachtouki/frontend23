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
                  <h6>Les 2 clés pour assurer le succès de votre formation e-learning</h6>

                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Dans le domaine florissant de l’e-learning, tout le monde veut se faire sa place au soleil. De ce fait, le marché grandit à vue d’œil et la concurrence se fait plus rude. Surtout pour les formateurs indépendants qui ne disposent pas d’une notoriété ou d’une plateforme conséquentes.

              Que ce soit votre premier ou votre dixième parcours, la question reste toujours la même : êtes-vous en train de créer une formation qui va marcher ?

              Vous le savez aussi bien que nous, la création d’une formation est un processus tel qu’il serait fâcheux de s’engager sans même savoir si votre offre va connaître le succès qu’elle mérite. Par ailleurs, lorsque vous êtes seul.e aux commandes, difficile d’avoir le recul et les retours nécessaires pour savoir dans quelle voie s’engager.

              C’est en pensant à vous que nous est venue l’idée de cet article. Plus qu’une information, ce contenu se veut un guide pour vous aider à faire les meilleurs choix possible en vous basant sur une population : vos futurs apprenants. Cette méthode est nourrie par les enseignements de Geneviève Gauvin, une indépendante qui aide les indépendants à se lancer.

              Avant de commencer, sachez qu’il y a un prérequis à ce guide : vous avez déjà une communauté, c’est-à-dire des personnes qui vous connaissent et qui connaissent votre activité. Cette communauté n’a pas de limite de membres (aussi petite soit-elle), ni d’ancienneté. Toutefois, si personne ne vous suit ou ne vous reconnaît, il faudra passer par cette étape.

              Inspirez-vous de notre article : comment développer une communauté quand on est un organisme de formation.<br>

              <strong>Phase 1</strong> : l’idée même de votre formation est attrayante
              Le but de cette étape est de faire comprendre à vos prospects que votre formation s’adresse à eux. Votre objectif ? Que votre présentation et votre contenu soient si bien travaillés qu’ils le comprennent d’eux-mêmes. Ils voient tout de suite que vos modules règlent un problème qu’ils rencontrent.

              Les 2 étapes incontournables <br>
              ➤ Votre formation est spécifique par son sujet et son objectif.
              Pourquoi un sujet spécifique ? Pour ne pas vous disperser et créer une formation bulldozer qui ne sert pas tant que ça.

              Pourquoi un objectif spécifique ? Pour que les prospects le comprennent, l’atteignent et développent un sentiment d’accomplissement lorsqu’ils le réalisent.

              Comment faire ? Diagnostiquez votre idée de formation : pouvez-vous la découper en sous-parties ? Pourrait-elle se transformer en plusieurs formations ? Si oui, pensez à proposer un panel de parcours, ou au moins, plusieurs axes. Sinon, vous avez votre formation pointue.

             <br>  ➤ Votre cible est spécifique.
              Pourquoi une cible spécifique ? En vous adressant à tout le monde, vous ne vous adressez à personne. Et donc, vous perdez vos chances de toucher les bonnes personnes.

              Comment faire ? Analysez deux paramètres : l’expérience et le comportement de votre cible. Son expérience correspond à son niveau de connaissance sur le sujet. Son comportement reprend plus son profil, ses attentes, ses peurs…



              <br>  <strong>Phase 2</strong> : votre idée est validée par votre communauté
              Vous pensez sûrement que votre formation est aussi utile qu’innovante, mais vous êtes peut-être le/la seul.e à le penser. C’est en tout cas ce que vous allez vérifier maintenant.

              N’oubliez jamais, vous créez une formation pour votre communauté, pas pour vous. Si elle ne valide pas votre idée, c’est que votre idée est à retravailler.

              La bonne idée : contacter des prospects. Lorsque vous avez défini votre cible, choisissez 5 personnes parmi votre entourage ou en dehors de votre cercle  et allez leur poser des questions. Lesquelles ? Tentez :

              Qu’est-ce qui vous préoccupe le plus dans votre situation présente ?
              Qu’arrivera-t-il si votre situation ne change pas ?
              De quoi avez-vous besoin pour régler votre problème ?
              Si vous réglez le problème, quel changement va s’opérer dans votre vie ?
              Qu’est-ce qui vous pousserait à suivre ma formation ?
              Qu’est-ce qui vous freinerait ?
              Votre but ici est de connaître les peurs, les freins, les besoins et les attentes de votre cible. D’un, vous validez ou invalidez vos intuitions et de deux, vous récupérez des éléments de langage. C’est toujours pratique dans vos communications.

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

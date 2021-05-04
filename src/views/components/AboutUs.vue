<template>
  <div class="wrapper">


      <div class="section profile-content">

          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">


              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              L'application mobile Turkish Airlines vous offre une expérience de voyage améliorée. Vous pouvez acheter un billet et traiter les transactions d'enregistrement sur mobile tout en planifiant vos vacances du début à la fin. Toutes les informations dont vous avez besoin pour votre voyage sont désormais à portée de main ! Pour télécharger notre application mobile, vous pouvez suivre les liens Turkish Airlines pour iOS ou Turkish Airlines pour Android en fonction du système d'exploitation de votre smartphone.
            </p>

        <md-button href="#/login" class="md-simple  md-success md-round md-lg"
        ><strong>Créer Votre Compte gratuit </strong> </md-button
        >
      </div>

    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
export default {
  components: {

  },
  bodyClass: "profile-page",


    props: {



  },
  computed: {

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

<template >
  <div class="wrapper">


      <div class="section profile-content">

          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">


              </div>
            </div>
          </div>
          <div class="description text-center">
            <h4>
              <strong style="color: #1b5e20">Digiforma </strong> est un produit  qui édite des solutions innovantes en mode SaaS. Forts de notre expertise en technologies web et de notre expérience de la formation, nous développons des outils à destination des organismes de formation et des formateurs indépendants : outils pédagogiques, solution de formation à distance pour
              les équipes commerciales et logiciel de gestion administrative.
            </h4>

        <md-button href="#/register" class="md-simple  md-success md-round md-lg"
        ><strong>Essayer maintenant! </strong> </md-button
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

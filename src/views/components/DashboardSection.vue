<template>
  <div class="wrapper">
    <div id="dashboard">
      <div class="md-layout">

        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs
              :tab-name="['Dashboard', 'Schedule', 'Gestion']"
              :tab-icon="['dashboard', 'schedule', 'list']"
              plain
              nav-pills-icons
              color-button="primary"
          >

          </tabs>
        </div>

        <div class="md-layout-item md-size-50 md-small-size-100">
          <h3><strong>AMÉLIOREZ VOTRE SUIVI AVEC DASHBOARD INTÉGRÉ</strong></h3>
          <tabs
              :tab-name="['Dashboard']"
              :tab-icon="['dashboard']"
              plain
              flex-column
              nav-pills-icons
              color-button="primary"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              <h4>● Générateur de documents formation</h4>
              <h4>● Tableau de bord des formations inter/intra</h4>
              <h4>● Un système d’évaluations numériques ultra complet</h4>
              <h4>● Bilan Pédagogique et Financier automatique</h4>
              <h4>● Améliorez vos formations avec les indicateurs de performances</h4>
            </template>

          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";

export default {

  components: {
    Tabs
  }
};
</script>

<style lang="css"></style>

<template>
  <div class="wrapper">
    <div id="details">
      <br>

      <div class="title">
        <h3><strong>PILOTEZ VOS FORMATIONS EN TEMPS RÉEL</strong></h3>
      </div>

      <div class="md-layout">

        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs :tab-name="['Schedule']" :tab-icon="['schedule']" plain flex-column nav-pills-icons color-button="info">
            <!-- here you can add your content for tab-content -->

            <template slot="tab-pane-1">
              <h4>● Générateur de documents formation</h4>
              <h4>● Tableau de bord des formations inter/intra</h4>
              <h4>● Planning des sessions et des ressources</h4>
              <h4>● Bilan Pédagogique et Financier automatique</h4>
              <h4>● Catalogue de formations</h4>
            </template>
        </tabs>
      </div>

        <div class="md-layout-item md-size-50 md-small-size-100">
          <img :src="cal" class="rounded" alt="Cinque Terre">
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
    },
  props: {
    cal: {
      type: String,
      default: require("@/assets/img/dashboard.jpg")
    }
  }

};
</script>

<style lang="css"></style>

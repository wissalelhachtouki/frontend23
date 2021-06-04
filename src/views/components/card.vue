<template>
  <div class="wrapper">
    <div id="details">
      <br>

      <div
        class="title"
      >
        <h4 class="card-title">   ☞ Pilotez vos formations en temps réel</h4>
      </div>

      <div class="md-layout">

        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs :tab-name="['Rapport']" :tab-icon="['description']" plain flex-column nav-pills-icons color-button="rose">
            <!-- here you can add your content for tab-content -->

            <template slot="tab-pane-1">
              <h4> ✓ Générateur de documents formation</h4>
              <h4> ✓ Tableau de bord des formations inter/intra</h4>
              <h4> ✓ Planning des sessions et des ressources</h4>
              <h4> ✓ Bilan Pédagogique et Financier automatique</h4>
              <h4> ✓ Catalogue de formations</h4>
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
      default: require("@/assets/img/calendrier.jpg")
    }
  }

};
</script>

<style lang="css">

</style>

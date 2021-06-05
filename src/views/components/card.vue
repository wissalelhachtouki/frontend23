<template>
  <div class="wrapper">
    <div id="details">
      <br>

      <div
        class="title"
      >
        <h4 class="card-title">   ☞ Soyez au top de la démarche qualité</h4>
      </div>

      <div class="md-layout">

        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs :tab-name="['Rapport']" :tab-icon="['description']" plain flex-column nav-pills-icons color-button="rose">
            <!-- here you can add your content for tab-content -->

            <template slot="tab-pane-1">
              <h4> ✓ Infographie de la formation et du transfert des acquis pour impressionner vos clients.</h4>
              <h4> ✓ Améliorez vos formations avec les indicateurs de performances.</h4>
              <h4> ✓ Un système d’évaluations numériques ultra complet.</h4>

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
      default: require("@/assets/img/rapport.jpg")
    }
  }

};
</script>

<style lang="css">

</style>

<template>
  <div class="wrapper">
    <div id="details">
      <br>

      <div class="title">
        <h4 class="card-title">  ☞ Pilotez vos formations en temps réel</h4>
      </div>

      <div class="md-layout">

        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs :tab-name="['Schedule']" :tab-icon="['calendar_today']" plain flex-column nav-pills-icons color-button="info">
            <!-- here you can add your content for tab-content -->

            <template slot="tab-pane-1">
              <h4> ✓ Une mise à jour en temps réel et un gain de temps maximal.</h4>
              <h4> ✓ Avoir une vision globale de l’activité.</h4>
              <h4> ✓ Une bonne gestion de l’emploi du temps.</h4>
              <h4> ✓ L’amélioration de la productivité.</h4>

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

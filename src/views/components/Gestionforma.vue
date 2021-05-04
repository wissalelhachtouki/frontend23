<template>
  <div class="wrapper">
    <div id="gestion-forma">

      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <img :src="list" class="rounded" alt="Cinque Terre">

        </div>

        <div class="md-layout-item md-size-50 md-small-size-100">
          <div class="title">
            <h3><strong> UNE  LIST DETAILS POUR LA GESTION DES FORMATIONS</strong></h3>
          </div>
          <tabs
              :tab-name="['Gestion' ]"
              :tab-icon="['list']"
              plain
              flex-column
              nav-pills-icons
              color-button="primary"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br /><br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
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
  },
  props: {
    list: {
      type: String,
      default: require("@/assets/img/dashboard.jpg")
    }
  }
};
</script>

<style lang="css"></style>

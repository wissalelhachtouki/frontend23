<template>
  <div class="wrapper">
    <div id="gestion-forma">

      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <img :src="list" class="rounded" alt="Cinque Terre">

        </div>

        <div class="md-layout-item md-size-50 md-small-size-100">
          <div class="title">
            <h3><strong> Une  list details pour la gestion des formations</strong></h3>
          </div>
          <tabs
              :tab-name="['Gestion' ]"
              :tab-icon="['assignment']"
              plain
              flex-column
              nav-pills-icons
              color-button="danger"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              <h4>● Fixer vos Priorités</h4>
              <h4>● Mieux organiser votre journée</h4>
              <h4>● Gagner du temps</h4>
              <h4>● Diminuer son stress</h4>
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
      default: require("@/assets/img/listformations.jpg")
    }
  }
};
</script>

<style lang="css"></style>

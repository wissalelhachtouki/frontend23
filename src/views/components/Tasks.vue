<template>
  <div class="wrapper">
    <div id="details">
      <div class="title">
        <h3 ><strong>Améliorez votre performence avec <br> une To-Do list intégrer</strong></h3>
      </div>
      <div class="md-layout">

        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs
              :tab-name="['Tasks']"
              :tab-icon="['fact_check']"
              plain
              flex-column
              nav-pills-icons
              color-button="success"
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

        <div class="md-layout-item md-size-50 md-small-size-100">
          <img :src="task" class="rounded" alt="Cinque Terre">

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
    task: {
      type: String,
      default: require("@/assets/img/aboutus.jpg")
    }
  }

};
</script>

<style lang="css"></style>

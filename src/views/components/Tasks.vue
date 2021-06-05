<template>
  <div class="wrapper">
    <div id="details">
      <div class="title">
        <h4  class="card-title"> ☞ Améliorez votre performence avec  To-Do list intégrer</h4>
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
              <h4> ✓ Fixer et faciliter la gestion de vos Priorités.</h4>
              <h4> ✓ Gagner du temps et libèrer votre esprit.</h4>
              <h4> ✓ Mieux organiser votre journée.</h4>
              <h4> ✓ Réduire le niveau de stress.</h4>


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
      default: require("@/assets/img/tasks.jpg")
    }
  }

};
</script>

<style lang="css"></style>

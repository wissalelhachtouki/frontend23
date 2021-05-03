<template>
  <div class="wrapper">
    <div id="details">
      <div class="title">
        <h3><strong>AMÉLIOREZ VOTRE PERFORMENCE AVEC <br> UNE TO-DO LIST INTÉGRÉ</strong></h3>
      </div>
      <div class="md-layout">

        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs
              :tab-name="['Tasks']"
              :tab-icon="['message']"
              plain
              flex-column
              nav-pills-icons
              color-button="primary"
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
  }

};
</script>

<style lang="css"></style>

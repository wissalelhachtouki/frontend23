<template>
  <div class="wrapper">
    <div id="nav-tabs">

      <div class="md-layout">
        <div class="md-layout-item md-size-30 md-small-size-100">

          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-success  " md-alignment="left">
                <md-tab id="tab-home"  md-icon="lock">
                  <h4><strong>Sécurité et <br> protection de vos <br> données </strong></h4>

                  <h4>Notre solution utilise un <br>cryptage 128 bits qui vous <br>
                    garantit une haute <br> protection de vos données <br>
                    et de celles de vos formés</h4>

                </md-tab>

              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>

        <div class="md-layout-item md-alignment-center md-size-30 md-small-size-100">
          <h3><small>Tabs on Plain Card </small></h3>


          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-warning" md-alignment="left">
                <md-tab id="tab-home"  md-icon="layers">
                  <h4><strong>Générateur de<br> documents en accord avec <br>la réglementation</strong></h4>

                  <h4>Remplissez vos <br>informations et générez automatiquement les documents
                    <br>
                    administratifs</h4>
                </md-tab>

              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>

        <div class="md-layout-item  md-size-30 md-small-size-100">

          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-info" md-alignment="center">
                <md-tab id="tab-home" md-icon="lock" >
                  <h4><strong>Technologie <br>
                    innovante et  <br>ergonomique n</strong></h4>
                  <h4>La technologie innovante <br>que nous utilisons offre
                    <br>fiabilité et sécurité.<br>L’application est rapide et<br>
                    simple à prendre en main.
                  </h4>
                </md-tab>

              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  components: {
    NavTabsCard
  }
};
</script>

<style lang="css"></style>

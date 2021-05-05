<template>
  <div class="wrapper">
    <div id="nav-tabs">

      <div class="md-layout">
        <div class="md-layout-item md-size-25 md-small-size-100">

          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-success md-alignment-centered" md-alignment="left">
                <md-tab id="tab-home"  >
                  <h4><strong>Sécurité et  protection de vos  données </strong></h4>

                  <h4>Notre solution utilise un cryptage 128 bits qui vous
                    garantit une haute  protection de vos données
                    et de celles de vos formés</h4>

                </md-tab>

              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>

        <div class="md-layout-item md-alignment-center md-size-25 md-small-size-100">
          <h3><small><div></div> </small></h3>


          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-warning md-alignment-centered" md-alignment="left">
                <md-tab id="tab-home"  >
                  <h4><strong>Générateur de<br> documents en accord avec la réglementation</strong></h4>

                  <h4>Remplissez vos informations et générez automatiquement les documents

                    administratifs</h4>
                </md-tab>

              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>

        <div class="md-layout-item  md-size-25 md-small-size-100">

          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-info md-alignment-centered" md-alignment="center">
                <md-tab id="tab-home"  >
                  <h4><strong>Technologie
                    innovante et  ergonomique</strong></h4>
                  <h4>La technologie innovante que nous utilisons offre
                    fiabilité et sécurité.<br>L’application est rapide et
                    simple à prendre en main.
                  </h4>
                </md-tab>

              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>

        <div class="md-layout-item md-alignment-center md-size-25 md-small-size-100">
          <h3><small><div></div> </small></h3>


          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-rose md-alignment-centered" md-alignment="left">
                <md-tab id="tab-home"  >
                  <h4><strong>Générateur de<br> documents en accord avec la réglementation</strong></h4>

                  <h4>Remplissez vos <br>informations et générez automatiquement les documents

                    administratifs</h4>
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

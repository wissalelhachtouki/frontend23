<template>
  <div class="todos">
    <div class="page-header header-filter">
      <MainSidebar />

      <div class="home_content">
        <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#0c2340ff"></stop><stop offset="95%" stop-color="#2a5788ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>
        <header><MainNavbar2/></header>
        <div class=" d-flex  width" style="margin-top: -5%">
          <div class="mt-5 w-100">
            <div class="container-fluid">
              <div class="col-md-12" style="margin-bottom: 3%">
                <div v-for="formation in formations"
                     :key="formation.id" class="card card-styling">
                  <div class="card-header card-header-primary card-header-icon">
                    <h4 class="card-title">
                      {{ formation.title }}
                      <div
                        class="md-layout-item md-size-10"
                        style="float: right"
                      >

                        <md-button
                            @click="
                            forQuality(formation.id);
                            showModalQuality = formation.id;
                          "
                          class=" md-warning md-sm  md-block"
                            :id="'btnMore'+formation.id"
                        >
                          <md-icon>add</md-icon> Plus
                        </md-button>

                      </div>
                    </h4>
                    <div v-if="showModalQuality == formation.id" v-cloak :id="'collapse'+formation.id">
                      <transition name="collapse">
                        <div class="collapse-mask">
                          <div class="collapse-wrapper">
                            <div class="collapse-dialog collapse-xl" role="document">
                              <div
                                  class="modal-content"
                                  style=" border-radius: 10px"
                              >
                                <div class="card-header"  style="border-bottom: none">
                                  <h4 class="card-title" >
                                    <strong style="text-align: left"></strong>
                                  </h4>

                                  <md-button
                                      type="button"
                                      class="md-simple md-just-icon md-round modal-default-button"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                      @click="showModalQuality = false"
                                  ><md-icon>clear</md-icon>
                                  </md-button>
                                </div>
                                <div
                                    class="modal-body"
                                    style="border-radius: 20px ; margin-top: -1%"
                                >
                                  <div class="row">
                                    <h2 class="col-md-10">
                                      <strong>Satisfaction: </strong>
                                    </h2>
                                    <h1 class="col-md-2">
                                      <strong style="color: green">{{ satisfaction }}%</strong>
                                    </h1>
                                  </div>


                                  <div class="progress">
                                    <div
                                        class="progress-bar bg-success progress-bar-striped"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        :style="{ width: satisfaction + '%' }"
                                    ></div>
                                  </div>
                                  <hr />
                                  <h6>
                                    Préparation de la formation:
                                    <strong style="color: #00b0ff"> {{ quality.preparation }}%</strong>
                                  </h6>
                                  <div class="progress">
                                    <div
                                        class="progress-bar bg-info progress-bar-striped"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        :style="{
                                        width: quality.preparation + '%'
                                      }"
                                    ></div>
                                  </div>
                                  <h6>
                                    Organisation de la formation:
                                    <strong style="color: #00b0ff">
                                      {{ quality.organisation }}%</strong
                                    >
                                  </h6>
                                  <div class="progress">
                                    <div
                                        class="progress-bar bg-info progress-bar-striped"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        :style="{
                                        width: quality.organisation + '%'
                                      }"
                                    ></div>
                                  </div>
                                  <h6>
                                    Déroulement de la formation:
                                    <strong style="color: #00b0ff"> {{ quality.deroulement }}%</strong>
                                  </h6>
                                  <div class="progress">
                                    <div
                                        class="progress-bar bg-info progress-bar-striped"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        :style="{
                                        width: quality.deroulement + '%'
                                      }"
                                    ></div>
                                  </div>
                                  <h6>
                                    Contenu de la formation:
                                    <strong style="color: #00b0ff"> {{ quality.contenu }}%</strong>
                                  </h6>
                                  <div class="progress">
                                    <div
                                        class="progress-bar bg-info progress-bar-striped"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        :style="{ width: quality.contenu + '%' }"
                                    ></div>
                                  </div>
                                  <h6>
                                    Efficacité de la formation:
                                    <strong style="color: #00b0ff"> {{ quality.efficacite }}%</strong>
                                  </h6>
                                  <div class="progress">
                                    <div
                                        class="progress-bar bg-info progress-bar-striped"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        :style="{
                                        width: quality.efficacite + '%'
                                      }"
                                    ></div>
                                  </div>
                                  <hr />
                                  <h3><strong>Avis</strong></h3>
                                  <p>{{ quality.avis }}</p>
                                </div>


                              </div>
                            </div>
                          </div>
                        </div>
                      </transition>
                    </div>
                  </div>




                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import MainNavbar2 from "@/layout/MainNavbar2";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Qualite",
  components: {
    MainSidebar,
    MainNavbar2
  },
  data() {
    return {
      showModalQuality: false,
      showQuality: "",
      satisfaction: 0,
      quality: {},
      formation: {}
    };
  },
  computed: {
    ...mapGetters(["formations"])
  },
  mounted() {
    this.$store.dispatch("setFormations");
  },
  methods: {
    async forQuality(id) {
      try {
        const response = await axios.get("showQuality/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            verification: "Bearer " + localStorage.getItem("tokenV")
          }
        });
        this.satisfaction =
            (response.data.data.preparation +
                response.data.data.organisation +
                response.data.data.deroulement +
                response.data.data.contenu +
                response.data.data.efficacite) /
            5;
        this.quality = response.data.data;
      } catch (e) {
        this.error = "Error occurred !";
        this.quality = {};
        this.quality.preparation = 0;
        this.quality.organisation = 0;
        this.quality.deroulement = 0;
        this.quality.contenu = 0;
        this.quality.efficacite = 0;
        this.satisfaction = 0;
      }
    }
  }
};
</script>

<style scoped>
.card-header:first-child {
  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
}
.border-0 {
  border: 0 !important;
}
.card-header {
  padding: 1.25rem 1.5rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
col-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;
}

h3 {
  font-size: 1.0625rem;
}
.card-styling {
  margin-top: 2%;
  background-color: white;
  color: #333533;

  box-shadow: 0 8px 8px 0 rgba(0, 0, 0.3, 0.3);
  transition: 0.3s;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  overflow-y: scroll;
  z-index: 100;

}
.sidebar.active ~ .home_content {
  z-index: 100;
  overflow-y: scroll;
}
.width {
  width: 95%;
  margin: 0 30px;
}
.home_content .text {
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}
.sidebar.active ~ .home_content {
  width: calc(100% - 240px);
  left: 240px;
}


.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

#btn1{
  background: rgb(0,183,225);
  background: linear-gradient(0deg, rgba(0,183,225,1) 0%, rgba(0,231,201,1) 100%);
}


.widget-subheading {
  color: #858a8e;
  font-size: 10px;
}

.card-header.card-header-tab .card-header-title {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.card-header .header-icon {
  font-size: 1.65rem;
  margin-right: 0.625rem;
}

.card-header.card-header-tab .card-header-title {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.btn-actions-pane-right {
  margin-left: auto;
  white-space: nowrap;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.scroll-area-sm {
  height: 288px;
  overflow-x: hidden;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}

.todo-indicator {
  position: absolute;
  width: 4px;
  height: 60%;
  border-radius: 0.3rem;
  left: 0.625rem;
  top: 20%;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.bg-warning {
  background-color: #f7b924 !important;
}

.widget-content {
  padding: 1rem;
  flex-direction: row;
  align-items: center;
}

.widget-content .widget-content-wrapper {
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
}

.widget-content .widget-content-right.widget-content-actions {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
}

.widget-content .widget-content-right {
  margin-left: auto;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn {
  transition: color 0.15s, background-color 0.15s, border-color 0.15s,
  box-shadow 0.15s;
}

#svg{
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}

.linebar{
  text-decoration: line-through
}
</style>

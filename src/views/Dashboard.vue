<template>
  <div class="dashboard">
    <MainSidebar />
    <div class="home_content">
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#0c2340ff"></stop>
            <stop offset="95%" stop-color="#2a5788ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <header>
        <MainNavbar2 />
      </header>
      <div v-if="loading" class="loader-xbox"></div>
      <div v-if="!loading" class="md-layout" style="margin: auto">
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <div class="md-card md-card-stats md-theme-default">
            <div class="md-card-header md-card-header-icon md-card-header-info">
              <div class="card-icon">
              <i class="md-icon md-icon-font md-theme-default">post_add</i></div>
              <p class="category">Nombre de formations</p>
              <h3 class="title"><span>{{ formations.length }}</span></h3>
            </div>
            <div class="md-card-actions md-alignment-left">
              <div class="stats">
                <i class="md-icon md-icon-font md-theme-default">update</i> Just Updated
              </div>
            </div>
          </div>
        </div>
        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <div class="md-card md-card-stats md-theme-default">
            <div class="md-card-header md-card-header-icon md-card-header-primary">
              <div class="card-icon">
                <i class="md-icon md-icon-font md-theme-default">equalizer</i>
              </div>
              <p class="category">Revenu Global</p>
              <h3 class="title"><span>{{ revenuGlobal }}</span> DH</h3>
            </div>
            <div class="md-card-actions md-alignment-left">
              <div class="stats">
                <i class="md-icon md-icon-font md-theme-default">update</i> Just Updated

              </div>
            </div>
          </div>
        </div>

        <div
            class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <div class="md-card md-card-stats md-theme-default">
            <div
                class="md-card-header md-card-header-icon md-card-header-red"
            >
              <div class="card-icon">
                <i class="md-icon md-icon-font md-theme-default">groups</i>
              </div>
              <p class="category">Moyenne des participants</p>
              <h3 class="title"><span>{{ moyennePart }}</span></h3>
            </div>
            <div class="md-card-actions md-alignment-left">
              <div class="stats">
                <i class="md-icon md-icon-font md-theme-default">update</i> Just
                Updated
              </div>
            </div>
          </div>
        </div>

        <div
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <div class="md-card md-card-stats md-theme-default">
            <div
              class="md-card-header md-card-header-icon md-card-header-green"
            >
              <div class="card-icon">
                <i class="md-icon md-icon-font md-theme-default">attach_money</i>
              </div>
              <p class="category">Revenue</p>
              <h5 class="title"><span>{{ revenu }}</span> DH <br> <span>{{ revenuParjour }}</span> DH/Jour</h5>
            </div>
            <div class="md-card-actions md-alignment-left">
              <div class="stats">
                <i class="md-icon md-icon-font md-theme-default">date_range</i>
                Derniére <span>formation</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
          <div class="md-card md-card-chart md-theme-default" data-count="8">
            <AreaChart/>
            <div class="md-card-content">
              <!---->

              <h4 class="title">Tarifs et Nombre de Participants</h4>

            </div>
            <div class="md-card-actions md-alignment-left">
              <div class="stats">
                <i class="md-icon md-icon-font md-theme-default">access_time</i>
                Mise à jour à partir de la dernière formation
              </div>
            </div>
          </div>
        </div>
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
          <div class="md-card md-card-chart md-theme-default" data-count="7">
            <LineChart/>
            <div class="md-card-content">
              <!---->

              <h4 class="title">Revenu des Formations</h4>

            </div>
            <div class="md-card-actions md-alignment-left">
              <div class="stats">
                <i class="md-icon md-icon-font md-theme-default">access_time</i>
                Mise à jour à partir de la dernière formation
              </div>
            </div>
          </div>
        </div>
        <div class="row md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <div
          class="md-layout-item md-medium-size-66 md-xsmall-size-66 md-size-66"
        >
          <div class="md-card md-card-chart md-theme-default" data-count="7">
            <BarChart/>
            <div class="md-card-content">
              <!---->

              <h4 class="title">Nombre de Jour par Formation</h4>

            </div>
            <div class="md-card-actions md-alignment-left">
              <div class="stats">
                <i class="md-icon md-icon-font md-theme-default">access_time</i>
                Mise à jour à partir de la dernière formation
              </div>
            </div>
          </div>
        </div>

          <div
          class="md-layout-item md-medium-size-34 md-xsmall-size-34 md-size-34"
        >
          <div class="md-card md-card-chart md-theme-default" data-count="7">
            <PieChart/>
            <div class="md-card-content">
              <!---->

              <h4 class="title">Rapport de la derniére formation (%)</h4>

            </div>
            <div class="md-card-actions md-alignment-left">
              <div class="stats">
                <i class="md-icon md-icon-font md-theme-default">access_time</i>
                Mise à jour à partir de la dernière formation
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
import LineChart from "./components/LineChart.vue";
import BarChart from "./components/BarChart.vue";
import AreaChart from "./components/AreaChart.vue";
import PieChart from "./components/PieChart.vue";

export default {
  name: "Dashboard",
  components: {
    MainSidebar,
    LineChart,
    MainNavbar2,
    BarChart,
    AreaChart,
    PieChart
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10,
      }
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/vue-mk-headerr.jpg")
    }
  },
  computed: {
    ...mapGetters({ user: "user" }),
    ...mapGetters({ revenu: "revenu" }),
    ...mapGetters({ revenuParjour: "revenuParjour" }),
    ...mapGetters({ revenuGlobal: "revenuGlobal" }),
    ...mapGetters({ moyennePart: "moyennePart" }),
    ...mapGetters(["formations"]),
    ...mapGetters(["form"]),
    ...mapGetters({ loading: "loading" }),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
    console.log("this mounted");
    this.$store.dispatch("setFormations");
    this.$store.dispatch("setRevenu");
    this.$store.dispatch("setRevenuParjour");
    this.$store.dispatch("setRevenuGlobal");
    this.$store.dispatch("setMoyennePart");
    this.$store.dispatch("setForm");

    this.$store.dispatch("setAreas1");
    this.$store.dispatch("setAreas2");
    this.$store.dispatch("setLine");
    this.$store.dispatch("setBar");
    this.$store.dispatch("setPie");
    setTimeout(() => {
      this.$store.dispatch("setloading");
    },7000)
  }
};
</script>

<style scoped>
.text-muted {
  color: #6c757d;
}
.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  overflow-y: scroll;
}
.sidebar.active ~ .home_content {
  z-index: 100;
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
.background-color {
  background-color: #fff;
}
.border {
  -webkit-box-shadow: -1px -1px 17px 4px #e1e5ea;
  box-shadow: -1px -1px 17px 4px #e1e5ea;
  border: 2px solid #1c6ea4;
  border-radius: 10px;
}
.card-stats .card-header.card-header-icon,
.card-stats .card-header.card-header-text {
  text-align: right;
}

.card-stats .card-header .card-icon + .card-title,
.card-stats .card-header .card-icon + .card-category {
  padding-top: 10px;
}

.card-stats .card-header.card-header-icon .card-title,
.card-stats .card-header.card-header-text .card-title,
.card-stats .card-header.card-header-icon .card-category,
.card-stats .card-header.card-header-text .card-category {
  margin: 0;
}

.card-stats .card-header .card-category {
  margin-bottom: 0;
  margin-top: 0;
}

.card-stats .card-header .card-category:not([class*="text-"]) {
  color: red;
  font-size: 14px;
}

.card-stats .card-header + .card-footer {
  border-top: 1px solid #eee;
  margin-top: 20px;
}

.card-stats .card-header.card-header-icon i {
  font-size: 36px;
  line-height: 56px;
  width: 56px;
  height: 56px;
  text-align: center;
}

.card-stats .card-body {
  text-align: right;
}

.card .card-header-info .card-icon,
.card .card-header-info .card-text,
.card .card-header-info:not(.card-header-icon):not(.card-header-text),
.card.bg-info,
.card.card-rotate.bg-info .front,
.card.card-rotate.bg-info .back {
  background: linear-gradient(60deg, #26c6da, #00acc1);
}

.card .card-header-info .card-icon,
.card .card-header-info:not(.card-header-icon):not(.card-header-text),
.card .card-header-info .card-text {
  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(0, 188, 212, 0.4);
}

.card [class*="card-header-"] .card-icon {
  border-radius: 3px;
  background-color: #999999;
  padding: 15px;
  margin-top: -20px;
  margin-right: 15px;
  float: left;
}
.card-stats .card-header .card-icon + .card-title,
.card-stats .card-header .card-icon + .card-category {
  padding-top: 10px;
}

.card.card-chart .card-footer i:nth-child(1n + 2) {
  width: 18px;
  text-align: center;
}

.card.card-chart .card-category {
  margin: 0;
}

.card-chart .card-body + .card-footer,
.card-product .card-body + .card-footer {
  border-top: 1px solid;
}

.chart-wrapper {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
#svg {
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}
.md-layout-item.md-medium-size-50 {
  min-width: 50%;
  max-width: 50%;
  flex: 0 1 50%;
  padding-right: 15px;
  padding-left: 15px;
}
.md-layout {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.md-layout-item.md-size-25 {
  min-width: 25%;
  max-width: 25%;
  flex: 0 1 25%;
}
.md-layout-item {
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
}
.md-card.md-theme-default {
  color: rgba(0, 0, 0, 0.87);
  color: var(rgba(0, 0, 0, 0.87));
}
.md-card {
  display: -webkit-box;
  display: -ms-flexbox;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 30px 0;
  overflow: unset;
  font-size: 0.875rem;
  -webkit-box-shadow: 0 1px 4px 0;
  z-index: 1;
  border-radius: 6px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  background: #fff;
}


.loader-xbox {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
}

.loader-xbox, .loader-xbox:before, .loader-xbox:after {
  position: absolute;
  border: 3px solid transparent;
  border-top: 3px solid hsl(83, 82%, 53%);
  border-radius: 50%;
  animation: rotate linear infinite;
  content: '';
}

.loader-xbox {
  height: 100px;
  width: 100px;
  animation-duration: 1.05s;
}

.loader-xbox:before {
  height: 75px;
  width: 75px;
  top: 10px;
  left: 10px;
  animation-duration: 10s;
}

.loader-xbox:after {
  height: 50px;
  width: 50px;
  top: 22px;
  left: 22px;
  animation-duration: 4s;
}

@keyframes rotate {
  from {
    transform: rotateZ(360deg);
  }
  to {
    transform: rotateZ(0deg);
  }
}
</style>

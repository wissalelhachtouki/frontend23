<template>
  <div class="dashboard">


    <MainSidebar />
    <div class="home_content">
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#0c2340ff"></stop><stop offset="95%" stop-color="#2a5788ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>
      <header>
        <MainNavbar2/>
      </header>
      <div>
      <br>
      <div class="row" style="margin: auto">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <p class="card-category">Nombre de Formations</p>
              <h3 class="card-title">{{ formations.length }}</h3>
            </div>

          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <p class="card-category">Moyenne</p>
              <h3 class="card-title"></h3>
            </div>

          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <p class="card-category">test</p>
              <h3 class="card-title">75</h3>
            </div>

          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <p class="card-category">test</p>
              <h3 class="card-title">$245</h3>
            </div>

          </div>
        </div>

      </div>



        <div class="row width mb-4">

        <div class=" col-12 col-xl mb-4 align-items-stretch">
          <div class="border  p-2 mt-5 w-100 background-color">
            <AreaChart :height="300" />
          </div>
        </div>

        </div>


        <div class="row width mb-4">

        <div class=" col-6 col-xl mb-4 align-items-stretch">
          <div class="border  p-2 mt-5 w-100 background-color">
            <LineChart :height="300" />
          </div>
        </div>
          <div class=" col-6 col-xl mb-4 align-items-stretch">
          <div class="border  p-2 mt-5 w-100 background-color">
            <BarChart :height="300" />
          </div>
        </div>

        </div>

      <div class="col-12 col-xl mb-4 align-items-stretch">
        <div class="card h-100 border-0 rounded-0">
          <div class="card-title mb-1 p-3 d-flex">
            <h6>Purchases</h6>
            <a class="btn ml-auto p-0 text-lightning"> <i class="fas fa-ellipsis-h"></i> </a>
          </div>
          <div class="card-body">
            <div class="table-responsive-md">
              <div class="table-responsive">
                <table class="table ">
                  <thead>
                  <tr>
                    <th style="width:40%;">Product</th>
                    <th class="number">Price</th>
                    <th style="width:20%;">Date</th>
                    <th style="width:20%;">State</th>
                    <th class="actions" style="width:5%;"></th>
                  </tr>
                  </thead>
                  <tbody class="no-border-x">
                  <tr>
                    <td>Sony Xperia M4</td>
                    <td class="number">$149</td>
                    <td>Aug 23, 2018</td>
                    <td class="text-success">Completed</td>
                    <td class="actions"><a class="icon" href="#"><i class="mdi mdi-plus-circle-o"></i></a></td>
                  </tr>
                  <tr>
                    <td>Apple iPhone 6</td>
                    <td class="number">$535</td>
                    <td>Aug 20, 2018</td>
                    <td class="text-success">Completed</td>
                    <td class="actions"><a class="icon" href="#"><i class="mdi mdi-plus-circle-o"></i></a></td>
                  </tr>
                  <tr>
                    <td>Samsung Galaxy S7</td>
                    <td class="number">$583</td>
                    <td>Aug 18, 2018</td>
                    <td class="text-warning">Pending</td>
                    <td class="actions"><a class="icon" href="#"><i class="mdi mdi-plus-circle-o"></i></a></td>
                  </tr>
                  <tr>
                    <td>HTC One M9</td>
                    <td class="number">$350</td>
                    <td>Aug 15, 2018</td>
                    <td class="text-warning">Pending</td>
                    <td class="actions"><a class="icon" href="#"><i class="mdi mdi-plus-circle-o"></i></a></td>
                  </tr>
                  <tr>
                    <td>Sony Xperia Z5</td>
                    <td class="number">$495</td>
                    <td>Aug 13, 2018</td>
                    <td class="text-danger">Cancelled</td>
                    <td class="actions"><a class="icon" href="#"><i class="mdi mdi-plus-circle-o"></i></a></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

    </div>
  </div>

      </div>
      <md-footer>
        <div class="md-toolbar-section-start">
          <h2  ><strong>Forma</strong></h2>
        </div>
        <div class="md-toolbar-section-end">
          <h3 v-if="$route.name" class="md-rose">© 2021, made with <md-icon> favorite</md-icon> by Us.</h3>
        </div>
      </md-footer>
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

export default {
  name: "Dashboard",
  components: {
    MainSidebar,
    LineChart,
    MainNavbar2,
    BarChart,
    AreaChart
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
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
    ...mapGetters(["formations"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
    this.$store.dispatch("setFormations");
  }
};
</script>

<style scoped>
.text-muted{
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

.card-stats .card-header .card-icon+.card-title,
.card-stats .card-header .card-icon+.card-category {
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

.card-stats .card-header+.card-footer {
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
  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4);
}

.card [class*="card-header-"] .card-icon
{
  border-radius: 3px;
  background-color: #999999;
  padding: 15px;
  margin-top: -20px;
  margin-right: 15px;
  float: left;
}
.card-stats .card-header .card-icon+.card-title,
.card-stats .card-header .card-icon+.card-category {
  padding-top: 10px;
}


.card.card-chart .card-footer i:nth-child(1n+2) {
  width: 18px;
  text-align: center;
}

.card.card-chart .card-category {
  margin: 0;
}

.card-chart .card-body+.card-footer,
.card-product .card-body+.card-footer {
  border-top: 1px solid ;
}

.chart-wrapper {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
#svg{
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}
</style>

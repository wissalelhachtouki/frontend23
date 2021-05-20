<template>
  <div class="dashboard">


    <MainSidebar />
    <div class="home_content">
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 113.33333333333331,187.73333333333335 226.66666666666663,175.46666666666667 399,188 C 571.3333333333334,200.53333333333333 802.6666666666667,237.86666666666667 986,244 C 1169.3333333333333,250.13333333333333 1304.6666666666665,225.06666666666666 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 196.8,368 393.6,336 555,349 C 716.4,362 842.4000000000001,420 984,436 C 1125.6,452 1282.8,426 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 300)"></path></svg>
      <header>
        <MainNavbar2/>
      </header>
      <div class="card">
      <h4 class="mb-4 text-muted" style="margin-bottom: 3rem">Dashboard</h4>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <p class="card-category">TOTAL VISITOR</p>
              <h3 class="card-title">555</h3>
            </div>

          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <p class="card-category">ORDERS</p>
              <h3 class="card-title">343</h3>
            </div>

          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <p class="card-category">PRODUCTS</p>
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
              <p class="card-category">TOTAL SALE</p>
              <h3 class="card-title">$245</h3>
            </div>

          </div>
        </div>

<!--
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card border-0 rounded-0">
            <div class="card-body">
              <div class="card-innerBody d-flex align-items-center">
                <div class="card-icon text-light">
                  <i class="fas fa-dollar-sign" ></i>
                </div>
                <div class="ml-auto">
                  <p class="card-label text-right text-muted">Revenue</p>
                  <h4 class="card-text text-right ">$ 199,099</h4>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex ">
              <small class="text-muted">Since last month</small>
              <small class="text-success ml-auto">
                <i class="fa fa-caret-up" aria-hidden="true"></i>
                5,35%
              </small>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card border-0 rounded-0">
            <div class="card-body">
              <div class="card-innerBody d-flex align-items-center">
                <div class="card-icon text-light">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div class="ml-auto">
                  <p class="card-label text-right text-muted">Orders</p>
                  <h4 class="card-text text-right ">2,200</h4>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex ">
              <small class="text-muted">Since last month</small>
              <small class="text-success ml-auto">
                <i class="fa fa-caret-up" aria-hidden="true"></i>
                8,66%
              </small>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card border-0 rounded-0">
            <div class="card-body">
              <div class="card-innerBody d-flex align-items-center">
                <div class="card-icon text-light">
                  <i class="fa fa-users" aria-hidden="true"></i>
                </div>
                <div class="ml-auto">
                  <p class="card-label text-right text-muted">Visitors</p>
                  <h4 class="card-text text-right ">702,258</h4>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex ">
              <small class="text-muted">Since last month</small>
              <small class="text-danger ml-auto">
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                2,81%
              </small>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card border-0 rounded-0">
            <div class="card-body">
              <div class="card-innerBody d-flex align-items-center">
                <div class="card-icon text-light">
                  <i class="fa fa-heartbeat" aria-hidden="true"></i>
                </div>
                <div class="ml-auto">
                  <p class="card-label text-right text-muted">Followers</p>
                  <h4 class="card-text text-right "> +50K</h4>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex ">
              <small class="text-muted">Since last month</small>
              <small class="text-success ml-auto">
                <i class="fa fa-caret-up" aria-hidden="true"></i>
                1,74%
              </small>
            </div>
          </div>
        </div>-->

      </div>



        <div class="row width mb-4">

        <div class=" col-12 col-xl mb-4 align-items-stretch">
          <div class="border  p-2 mt-5 w-100 background-color">
            <LineChart :height="300" />
          </div>
        </div>

        </div>

      <div class="col-12 col-xl mb-4 align-items-stretch">
        <div class="card h-100 border-0 rounded-0">
          <div class="card-title mb-1 p-3 d-flex">
            <h6>Chart Doughnut</h6>
            <a class="btn ml-auto p-0 text-lightning"> <i class="fas fa-ellipsis-h"></i> </a>
          </div>
          <div class="card-body">
            <div class="chart-container d-flex h-100 align-items-center justify-content-center" style="position: relative;">
              <canvas id="chart-doughnut" style="height:100%"></canvas>
            </div>
          </div>
          <div class="card-footer">
            <div class="legend d-flex just">
              <div class="flex-fill text-center"><span class="d-inline-block rounded-circle mr-2"
                                                       style="background: #5b6582;"></span><small>HTML</small></div>
              <div class="flex-fill text-center"><span class="d-inline-block rounded-circle mr-2"
                                                       style="background: #98a4c7;"></span><small>CSS</small></div>
              <div class="flex-fill text-center"><span class="d-inline-block rounded-circle mr-2"
                                                       style="background: #36a2eb;"></span><small>Javascript</small></div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12 col-xl-8 mb-4 align-items-stretch">
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
      <footer> <h2>hhh</h2></footer>
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
    MainNavbar2
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
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
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

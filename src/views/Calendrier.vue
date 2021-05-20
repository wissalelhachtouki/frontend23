<template>
  <div class="calendar">
    <MainSidebar />
    <div class="home_content">
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 113.33333333333331,187.73333333333335 226.66666666666663,175.46666666666667 399,188 C 571.3333333333334,200.53333333333333 802.6666666666667,237.86666666666667 986,244 C 1169.3333333333333,250.13333333333333 1304.6666666666665,225.06666666666666 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 196.8,368 393.6,336 555,349 C 716.4,362 842.4000000000001,420 984,436 C 1125.6,452 1282.8,426 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 300)"></path></svg>
      <header><MainNavbar2/></header>
      <div class="container-fluid">
        <vue-cal
          class="vuecal--green-theme"
          selected-date="2021-1-21"
          :disable-views="['years', 'year']"
          default-view="month"
          events-on-month-view="true"
          :events="events"
          overlaps-per-time-step
          style="
          background-color: white;
            margin-top: 1%;
            border: 1px transparent;
            border-radius: 10px;"
        >
        </vue-cal>
      </div>
      <footer> <h2>hhh</h2></footer>
    </div>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import MainNavbar2 from "@/layout/MainNavbar2";

import vuecal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { mapGetters } from "vuex";

export default {
  name: "Calendrier",
  components: {
    MainSidebar,
    "vue-cal": vuecal,
    MainNavbar2,

  },
  data: () => ({}),
  props: {
    header: {
      type: String,
      default: require("@/assets/img/vue-mk-headerr.jpg"),
    }
  },
  computed: {
    //...mapGetters(["formations"]),
    ...mapGetters(["events"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,

      };
    }
  },
  mounted() {
    this.$store.dispatch("setEvents");
  }
};
</script>

<style lang="scss" scoped>
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

.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
  width: 90%;
  height: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

#svg{
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}

</style>

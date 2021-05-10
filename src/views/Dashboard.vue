<template>
  <div class="dashboard">
    <MainSidebar/>
    <div class="home_content">
      <div class="text">
        <h3 v-if="user">Hi, {{ user.name }}</h3>
        <h3 v-if="!user">you are not logged in!</h3>
      </div>
      <div id="app">
        <LineChart/>
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import { mapGetters } from "vuex";
import LineChart from "./components/LineChart.vue"

export default {
  name: "Dashboard",
  components: {
    MainSidebar,
    LineChart
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    }   
  },

  computed: {
    ...mapGetters({ user: "user" })
  }
};
</script>

<style scoped>
.home_content{
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  background: #e4e9f7;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home_content{
  z-index: 100;
}
.home_content .text{
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}
.sidebar.active ~ .home_content{
  width: calc(100% - 240px);
  left: 240px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

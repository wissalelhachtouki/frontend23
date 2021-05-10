<template>
  <div class="dashboard">
    <MainSidebar/>
    <div class="home_content">
      <div class="d-flex justify-content-center width">
         <div class="border  p-2 mt-5 w-100 ">
         <LineChart  :height="300"/>
         </div>
      </div>
      <div class="row container mt-3">
       <div class="col-md-3"><div class="card border">
  <div class="card-body">
   <button class="btn btn-primary">this is a button</button>
  </div>
</div></div>
       <div class="col-md-3"><div class="card border">
  <div class="card-body">
    <button class="btn btn-primary">this is a button</button>
  </div>
</div></div>
       <div class="col-md-3"><div class="card border ">
  <div class="card-body">
 <button class="btn btn-primary">this is a button</button>
  </div>
</div></div>
       <div class="col-md-3"><div class="card border ">
  <div class="card-body">
    <button class="btn btn-primary">this is a button</button>
  </div>
</div></div>
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
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home_content{
  z-index: 100;
}
.width{
  width:95%;
  margin:0 30px;
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
.border{
  -webkit-box-shadow: -1px -1px 17px 4px #e1e5ea; 
box-shadow: -1px -1px 17px 4px #e1e5ea;
border: 2px solid #1C6EA4;
border-radius:10px;
}


</style>

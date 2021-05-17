<template>
  <div class="calendar">
    <MainSidebar />
    <div class="home_content">
      <div class="card">
        <vue-cal
          class="vuecal--blue-theme"
          selected-date="2021-1-21"
          :disable-views="['years', 'year']"
          default-view="month"
          events-on-month-view="short"
          overlaps-per-time-step

          style="height: 600px"
        >
          <p>POOOPPOOO</p>
        </vue-cal>
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import vuecal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { mapGetters } from "vuex";

export default {
  name: "Calendrier",
  components: {
    MainSidebar,
    "vue-cal": vuecal
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(["formations"])
  },
  mounted() {
    this.$store.dispatch("setFormations");
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
</style>

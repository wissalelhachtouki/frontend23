<template>
  <div>
    <h3 v-if="user">Hi, {{user.name}}</h3>
    <h3 v-if="!user">you are not logged in!</h3>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {
    console.log("this is ngoninit Dashboard")
  }
};
</script>

<style scoped>

</style>

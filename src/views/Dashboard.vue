<template>
  <div>
    <h3 v-if="user">Hi, {{user.name}}</h3>
    <h3 v-if="!user">you are not logged in!</h3>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import store from "../vuex";
export default {
  name: "Dashboard",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({user: "user"})
  }
};
</script>

<style scoped>

</style>

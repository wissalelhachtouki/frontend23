<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view/>
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  async created() {
    const response = await axios.get("user");

    this.$store.dispatch("user", response.data);
  }
};
</script>

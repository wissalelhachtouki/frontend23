<template>
  <div>
    <div style="margin: 12% 10%;
                position: absolute;">
      <h1>404 not found</h1>
      <h2>it seems you're in the wrong page</h2>
      <md-button @click="gohome" class="md-info">Go to home page</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NonAuth",
  methods: {
    gohome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>

</style>

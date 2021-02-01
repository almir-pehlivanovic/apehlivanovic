<template>
  <div class="experience">
      <h1>Experience page</h1>
       
        <br>
        <button @click="goBack()">Previous page</button>
      <router-link  :to="{ name: 'Projects' }">Projects</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$store.commit("setPageTransition", "back");
      this.$router.push({
        name: "Home"
      });
    }
  }
}
</script>

<style scoped>
.experience{
  height: 100vh;
  background: bisque; 
}
</style>

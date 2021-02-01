<template>
  <div class="home">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Home page</h1>
    <br>
      <router-link :to="{ name: 'About' }">About</router-link>
  </div>
</template>
   
<script>

export default {
  name: 'Home',
  data(){
    return {
      touch: {
        startX: 0,
        endX: 0
      }
    }
  },
  components: {},
  methods:{
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX;
      this.touch.endX = 0;
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX;
    },
    touchend() {
      if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20)
      return;
      if(this.touch.endX < this.touch.startX){
          this.$store.commit("setPageTransition", "default");
          this.$router.push({
            name: "About"
          });
      }
    }
  },
  mounted() {
    this.$el.addEventListener('touchstart', event => this.touchstart(event));
    this.$el.addEventListener('touchmove', event => this.touchmove(event));
    this.$el.addEventListener('touchend', () => this.touchend());
  }
}
</script>

<style  scoped>
.home{
  height: 100vh;
  background: tomato;
}
</style>


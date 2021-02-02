<template>
  <div class="experience">
    <div class="overflow"></div>
    <video autoplay muted loop class="video">
      <source src="../assets/video/Experience.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
        <button @click="goBack()">Previous page</button>
      <router-link  :to="{ name: 'Projects' }">Projects</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      touch: {
        startX: 0,
        endX: 0
      }
    }
  },
  methods: {
    goBack() {
      this.$store.commit("setPageTransition", "back");
      this.$router.push({
        name: "About"
      });
    },
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX;
      this.touch.endX = 0;
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX;
    },
    touchend() {
      if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 40)
      return;
      if(this.touch.endX < this.touch.startX){
          this.$store.commit("setPageTransition", "default");
          this.$router.push({
            name: "Projects"
          });
      }
      else{
        this.$store.commit("setPageTransition", "back");
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

<style scoped>
  .experience video {
    width: 100vw;
    height: 100vh; 
    z-index: -2;
    object-fit:cover;
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

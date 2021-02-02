<template>
  <div class="work-with">
    <div class="overflow"></div>
    <img src="../assets/img/workWith.jpg" alt="">
      <button @click="goBack()">Previous page</button>
      <router-link  :to="{ name: 'Contact' }">Contact</router-link>
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
        name: "Service"
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
            name: "Contact"
          });
      }
      else{
        this.$store.commit("setPageTransition", "back");
        this.$router.push({
          name: "Service"
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
  .work-with img {
    height: 100vh;
    width: 100vw;
    z-index: -2;
    object-fit: cover;
    position: absolute;
  }
    
</style>


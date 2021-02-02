<template>
  <div class="service">
    <div class="overflow"></div>
    <video autoplay muted loop class="video">
      <source src="../assets/video/Service.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
      <button @click="goBack()">Previous page</button>
      <router-link  :to="{ name: 'WorkWith' }">Work With</router-link>
      
      <div class="scroll">
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, itaque fugiat nesciunt id, quidem corrupti magni distinctio aspernatur qui excepturi quasi, error libero temporibus earum repudiandae vel cupiditate! Qui laborum eaque voluptatum delectus illo ducimus at. Dolorum quidem eum tempore hic dignissimos cupiditate, asperiores quod in inventore nulla architecto doloribus, autem, ea impedit dicta nobis porro minus veritatis aliquam totam.</p>
      </div>
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
        name: "Projects"
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
            name: "WorkWith"
          });
      }
      else{
        this.$store.commit("setPageTransition", "back");
        this.$router.push({
          name: "Projects"
        });
      }
    },
  },
  mounted() {
    this.$el.addEventListener('touchstart', event => this.touchstart(event));
    this.$el.addEventListener('touchmove', event => this.touchmove(event));
    this.$el.addEventListener('touchend', () => this.touchend());
  }
}
</script>

<style scoped>
  .service video {
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
  .scroll{
    width: 80%;
    background: red;
    position: absolute;
    left: 0;
    transform: translateY(100%);
  }
</style>
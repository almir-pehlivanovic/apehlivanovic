<template>
  <div class="not-found">
      <div class="overflow"></div>
      <h2>404</h2>
      <h4>Page not found</h4>
      <button @mouseover="hover = true"
              @mouseleave="hover = false"
              @click="goBack()">
        <div class="circle"></div>
        <svg :class="{'active-left': hover }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213"><path d="M476.213 223.106H57.426l34.393-34.393L70.606 167.5 0 238.106l70.606 70.607L91.819 287.5l-34.393-34.394h418.787z"/></svg>
      </button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hover: false,
    }
  },
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
  .overflow{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #08305D;
    opacity: 0.4;
  }
  .not-found{
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    background-image: url('../assets/img/404NotFound.jpg');
    color: #fff;
    z-index: 2;
    background-size: cover;
  }
  .not-found h2{
    font-weight: 400;
    font-size: 6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .not-found h4{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -40%);
  }
  .not-found button{
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    outline-style: none;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -30%);
    color: #fff;
  }
  .not-found button svg{
    height: 40px;
    fill: #fff;
    margin-left: -25px;
     transition: all 0.3s ease-in-out;
  }
  .circle{
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    opacity: 0.6;
    border-radius: 100%;
  }
  .active-left{
    transition: all 0.3s ease-in-out;
    margin-left: -46px !important;
  }
</style>

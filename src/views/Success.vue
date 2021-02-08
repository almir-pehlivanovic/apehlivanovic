<template>
  <div class="success-background">
    <svg  class="success-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h2>Thank you!</h2>
    <p>Your email has been sent successfully</p>

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
        name: "Contact"
      });
    }
   }
}
</script>

<style scoped>
.success-background{
    background: #08305D ;
}
button{
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    outline-style: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
button svg{
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
  h2, p{
      text-align: center;
      color: white;
  }
  .success-icon{
      color: rgb(104, 236, 104);
      height: 200px;
      width: 200px;
      margin: auto;
      display: block;
      margin-top: 10%;
  }
</style>
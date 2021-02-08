<template>
  <div class="page-loader"  v-if="!isloaded">
    <img src="../assets/img/logo.png" alt="">
      <div class="loader-text">
          <h1>Almir Pehlivanovic
              <div class="loader-background"></div>
          </h1>
          <h5>Bachelor of Electrical Engineering & Web Developer
               <div class="loader-background"></div>
          </h5>
      </div>
  </div>
</template>

<script>
export default {
    data: () => {
      return {
        isloaded: false
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") { 
          this.isloaded = true;
        } 
      }
    },
}
</script>

<style scoped>
    .page-loader{
        display: flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #08305D;
    }
    .page-loader img{
        width: 100px;
        height: 100px;
        transition: all 0.8s ease-in-out;
        filter: drop-shadow(0px 0px 12px rgb(0,0,0,0.25));
        animation: zoomIn 1s cubic-bezier(0.77,0.2,0.05,1.0);
        z-index: 99;
    }
    .loader-text{
        color: #cdcdcd;
        /* animation: slideRight 1s cubic-bezier(0.77,0.2,0.05,1.0); */
    }
    .loader-text h1, .loader-text h5{
        position: relative;
    }
    .loader-text h1 div, .loader-text h5 div{
        background: #08305D;
        z-index: 1;
        position: absolute;
        top: 0;
        right: -1px;
        bottom: 0;
        left:-2px;
        animation: slideRight 1s cubic-bezier(0.77,0.2,0.05,1.0) 1s;
         animation-fill-mode: forwards;
    }
    .loader-text h5 div{
        animation: slideRight 1s cubic-bezier(0.77,0.2,0.05,1.0) 1.3s;
         animation-fill-mode: forwards;
    }
     @keyframes zoomIn {
        0% {
           opacity: 0;
           transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }
    @keyframes slideRight
    {
        0% {
           transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
    }
</style>
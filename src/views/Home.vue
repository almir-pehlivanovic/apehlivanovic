<template>
  <div class="home">
    <div class="overflow"></div>
    <video autoplay muted loop class="video">
        <source src="../assets/video/Home.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>
    <div class="home-lines">
      <div class="left-line"></div>
      <div class="right-line"></div>
    </div>
    <div class="home-text">
      <h2>Hi there,</h2>
      <h1>I'm Almir</h1>
    </div>
    <div class="home-footer">
      <div class="home-footer-info">
        <div class="home-button">
          <router-link tag="button" :to="{ name: 'About' }">About me</router-link>
        </div>
        <div class="home-button">
          <router-link tag="button" :to="{ name: 'Contact' }">Get in touch</router-link>
        </div>
      </div>
      <div class="home-explore">
        <router-link tag="button" :to="{ name: 'About' }">Explore</router-link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213"><path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607z"/></svg>
      </div>
    </div>
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
      if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 40)
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
  .home video {
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
  .home-lines{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    z-index: -1;
  }
  .left-line, .right-line{
    height: 100vh;
    background: #08305D;
    opacity: 0.8;
  }
  .left-line{
    width: 20%;
    animation: slideLeft 0.8s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  .right-line{
    width: 40%;
    animation: slideRight 0.8s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  .home-text{
    color: #cdcdcd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
  }
  .home-text h1{
    font-size: 10rem;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 0px 12px rgb(0,0,0,0.25));
    animation: slideRight 1s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  .home-text h2{
    font-size: 4rem;
    transition: all 0.3s ease-in-out;
    font-weight: 300;
    filter: drop-shadow(0px 0px 12px rgb(0,0,0,0.25));
    animation: slideRight 1s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  .home-explore{
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 25%;
    border-bottom: 1px solid rgb(205, 205, 205, 0.5);
    right: 0;
    position: absolute;
  }
  .home-explore button, .home-footer .home-button button{
    color: #cdcdcd;
    border: none;
    background: transparent;
    outline:none;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
    padding-bottom: 5px;
    font-weight: bold;
  }
  .home-explore button{
    position: absolute;
    width: 100%;
    text-align: left;
  }
  .home-explore::after{
    content: "";
    background: #fff;
    height: 1px;
    position: absolute;
    bottom: 0;
    transition: .16s all 0.025s;
  }
  .home-explore::after {
    right: 100%;
    left: 0;
  }

  .home-explore:hover ~ a::after {
    right: 0;
    left: 100%;
  }

  .home-explore:hover::after {
    left: 0;
    right: 0;
  }
  .home-button{
    position: relative;
  }
  .home-button::after{
    content: "";
    background: #fff;
    height: 1.5px;
    position: absolute;
    bottom: 0;
    transition: .16s all 0.025s;
  }
  .home-button::after {
    right: 100%;
    left: 0;
  }

  .home-button:hover ~ button::after {
    right: 0;
    left: 100%;
  }

  .home-button:hover::after {
    left: 0;
    right: 10px;
  } 

  .home-explore svg{
    fill: #cdcdcd;
    height: 35px;
    padding-bottom: 5px;
    margin-left: 70px;
  }
  .home-footer{
    color: #cdcdcd;
    position: absolute;
    transform: translateY(90%);
    bottom: 10%;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .home-footer-info{
    display: flex;;
    position: absolute;
    left: 42%;
    transform: translateX(-58%);
    transition: all 0.3s ease-in-out;
  }
  @media (min-width: 1200px) {
    .home-footer-info{
      left: 40%;
      transform: translateX(-60%);
    }
  }
  @media (max-width: 530px) {
    .home-footer-info{
      left: 30%;
      transform: translateX(-50%);
    }
    .home-explore{
      width: 35%;
    }
    .home-explore button, .home-footer .home-button button{
      font-weight: 500;
    }
  }
  @media (max-width: 935px) {
    .home-text h1{
      font-size: 6rem;
    }
    .home-text h2 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 800px) {
    .home-text h1{
      font-size: 5rem;
    }
    .home-text h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 667px) {
    .home-text h1{
      font-size: 4rem;
    }
    .home-text h2 {
      font-size: 2rem;
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);;
    }
  }
   @keyframes slideRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);;
    }
  }
</style>


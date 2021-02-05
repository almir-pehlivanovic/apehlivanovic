<template>
  <div class="about">
    <div class="overflow"></div>
    <img src="../assets/img/aboutMe.jpg" alt="">
    <h1 class="title">about me</h1>
    <div class="carousel-navigation">
      <div class="left-navigation">
        <button @mouseover="hover = true"
                @mouseleave="hover = false"
                @click="goBack()">
          <div class="circle"></div>
          <svg :class="{'active-left': hover }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213"><path d="M476.213 223.106H57.426l34.393-34.393L70.606 167.5 0 238.106l70.606 70.607L91.819 287.5l-34.393-34.394h418.787z"/></svg>
        </button>
      </div>
      <div class="right-navigation"
          @mouseover="hoverRight = true"
          @mouseleave="hoverRight = false">
        <router-link tag="button" 
            :to="{ name: 'Experience' }">
          <svg :class="{'active-right': hoverRight }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213"><path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607z"/></svg>
          <div class="circle"></div>
        </router-link>
      </div>
    </div>
    <div class="scroll-to-explore">
      <p>Scroll to explore</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.51 0 0 114.497 0 256c0 141.49 114.497 256 256 256 141.488 0 256-114.497 256-256C512 114.512 397.503 0 256 0zm0 477.867c-122.337 0-221.867-99.529-221.867-221.867S133.663 34.133 256 34.133 477.867 133.663 477.867 256 378.337 477.867 256 477.867z"/><path d="M366.849 190.645H145.152c-14.162 0-22.198 16.358-13.456 27.565l110.848 142.089c6.835 8.761 20.092 8.742 26.913 0L380.306 218.21c8.709-11.166.756-27.565-13.457-27.565zM256 322.054l-75.889-97.275h151.777L256 322.054z"/></svg>
    </div>
    <div class="scroll">

        <h1>About me</h1>
        <h5>WEB DEVELOPER</h5>
        
        <div class="service-section">
          <div class="service-section-left">
            <ul>
              <li>bachelor</li>
              <li>frontend</li>
              <li>backend</li>
              <li>team player</li>
            </ul>
          </div>
          <div class="service-section-right">
            <div class="service-section-right-content">
                <h3>I'm Bachelor of Electrical Engineering and also a Web Developer</h3>
                <p>Electrical Engineer with a background in electrical circuits, automation, and controls. Understanding of control and power-delivery systems. Experienced in developing technical studies and investigations.</p>
                <br>  
                <p>Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Able to handle any part of the process with ease. Collaborative team player with excellent technical abilities offering 1 year and 6 months of related experience.</p>
            </div>
            <div class="service-section-right-content">
              <h3>Details</h3>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Location: </span>   
                <span style="padding-left:5px"> 77000 Bihać</span>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Age: </span>   
                <span style="padding-left:5px"> 24</span>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Phone: </span>   
                <span style="padding-left:5px"> +387 60 358 7468</span>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email: </span>   
                <span style="padding-left:5px"><a href="mailto:pehlivanovicalmir1@gmail.com"> pehlivanovicalmir1@gmail.com </a></span>
              </p>
            </div>
            <div class="service-section-right-content">
              <a href="/Resume.pdf" target="_blank">
                <button class="download-button">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
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
      },
      hover: false,
      hoverRight: false,
    }
  },
  methods: {
    goBack() {
      this.$store.commit("setPageTransition", "back");
      this.$router.push({
        name: "Home"
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
            name: "Experience"
          });
      }
      else{
        this.$store.commit("setPageTransition", "back");
        this.$router.push({
          name: "Home"
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
  .about img {
    height: 100vh;
    width: 100vw;
    z-index: -2;
    object-fit: cover;
    position: absolute;
  }
   /* 
  scroll section of the page
   */

  .scroll{
    width: 70%;
    background: #f0f0f3;
    transform: translateY(100vh) translateZ(0);
    padding: 120px;
    padding-top: 180px;
    transition: all 0.3s ease-in-out;
  }
  .scroll h1{
    font-size: 7.5rem;
    text-align: center;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    padding-bottom: 120px;
  }
  .scroll h5{
    font-size: 1.75rem;
    color: tomato;
  }
  .service-section{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .service-section-left{
    padding-right: 120px;
    padding-top: 40px;
  }
  .service-section-left ul li{
    list-style: none;
    font-size: 3rem;
    font-weight: 700;
  }
  .service-section-right{
    width: 50%;
    transition: all 0.3s ease-in-out;
  }
  .service-section-right-content{
    padding-top: 80px;
  }
  .service-section-right-content h3{
    font-size: 1.75rem;
    padding-bottom: 20px;
    font-weight: 500;
  }
  .service-section-right-content p{
    font-size: 1.3rem;
    color: rgb(99, 99, 99);
    display: flex;
    align-items: center;
    padding-top: 20px;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .service-section-right-content p svg{
    height: 24px;
    width: 24px;
    padding-right: 5px;
  }
  .service-section-right-content p span a{
    color: black;
    text-decoration: none;
    font-weight: 700;
  }
  @media (max-width: 1180px){
    .scroll{
      width: 60%;
    }
    .service-section-right{
      width: 100%;
    }
  }
  @media (max-width: 1024px){
    .scroll h1{
      font-size: 6rem;
    }
    .service-section-left ul li{
      font-size: 2.5rem;
    }
  }
  @media (max-width: 455px){
    .scroll{
      padding: 20px !important;
      padding-bottom: 40px !important;
    }
    .scroll h1 {
      font-size: 3rem !important;
      padding-bottom: 60px !important;
      padding-top: 40px;
    }
    .service-section-left{
      padding-top: 25px;
    }
  }

  /* 
  main content of the page 
  */

  .title{
    position: absolute;
    color: #cdcdcd;
    left: 40%;
    font-size: 7rem;
    font-weight: bolder;
    letter-spacing: 5px;
    top: 50%;
    transform: translate(-60%,-60%);
    text-shadow: 0px 2px 3px #fff;
    transition: all 0.3s ease-in-out;
  }
  .carousel-navigation{
    height: 0px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    right: 50px;
  }
  .left-navigation button, .right-navigation button{
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    outline-style: none;
    color: #fff;
  }
  .left-navigation button svg{
    height: 40px;
    fill: #fff;
    margin-left: -25px;
    transition: all 0.3s ease-in-out;
  }
  .right-navigation button svg {
    height: 40px;
    fill: #fff;
    margin-right: -25px;
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
  .active-right{
    transition: all 0.3s ease-in-out;
    margin-right: -46px !important;
  }
  .scroll-to-explore{
    position: absolute;
    display: flex;
    align-items: center;
    color: #cdcdcd;
    left: 30%;
    bottom: 10%;
    padding-left: 10px;
    transform: translate(-70%, 90%);
  }
  .scroll-to-explore svg{
    height: 25px;
    fill: #fff;
    transition: all 0.3s ease-in-out;
    margin-left: 10px;
    right: -30px;
    position: absolute;
    animation: moveUpDown 1s linear infinite;
  }
  .download-button{
    background: transparent;
    border: 1px solid rgb(160, 160, 160);
    border-radius: 5px;
    outline:none;
    cursor: pointer;
    font-size: 16px;
    padding: 18px 32px;
    color: tomato;
    transition: all 0.3s ease-in-out;
  }
  .download-button:hover{
    transition: all 0.3s ease-in-out;
    border: 1px solid black;
  }
  @media (max-width: 890px) {
    .scroll{
      padding:80px;
    }
    .carousel-navigation{
      transform: none;
      bottom: 7%;
      top: auto;
      left: 75px;
      right: 75px;
    }
    .circle{
      display: none;
    }
    .scroll-to-explore{
      transform: translateX(-50%);
      bottom: 6%;
      left: 50%;
      padding-left: 0;
    }
    .title{
      font-size: 6rem;
    }
    
  }
  @media (max-width: 640px) {
    .scroll{
      padding:40px;
    }
    .scroll h1 {
      font-size: 4rem;
      padding-bottom: 80px;
    }
    .scroll h5{
      font-size: 1.35rem;
    }
    .scroll-to-explore{
      margin-left: -15px;
    }
    .service-section-left{
      padding-right: 25px;
    }
    .service-section-left ul li{
      font-size: 1.7rem;
    }
    .service-section-right-content h3{
      font-size: 1.4rem;
    }
    .service-section-right-content p{
      font-size: 1.1rem;
    }
    .service-section-right-content{
      padding-top: 60px;
    }
    .title{
      font-size: 4rem;
      left: 50px;
      transform: translate(0,-60%);
    }
  }
  @media (max-width: 380px){
    .scroll-to-explore{
      bottom: 56px;
      font-size: 14px;
    }
    .scroll-to-explore svg {
      height: 20px;
      margin-left: 5px;
    }
    .carousel-navigation{
      right: 70px;
    }
  }
  @media (max-width: 340px) {
    .scroll-to-explore p{
       display: none;
    }
  }
  @keyframes moveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 5px;
  }
}
</style>

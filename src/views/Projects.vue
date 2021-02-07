<template>
  <div class="projects" @mousemove="mouseMove">
    <div class="projects-parallax">
      <div class="overflow"></div>
      <img class="parallax" src="../assets/img/projects.jpg" alt="">
    </div>
    <h1 class="title">projects</h1>
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
            :to="{ name: 'Service' }">
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

        <h1>Projects</h1>
        <h5>MOST RECENT</h5>
        
        <div class="service-section">
          <div class="service-section-left">
            <ul>
              <li><a target="_blank" href="#">modern portfolio</a></li>
              <li><a target="_blank" href="#">q&a</a></li>
              <li><a target="_blank" href="https://ui-inbox.herokuapp.com/">inbox UI</a></li>
              <li><a target="_blank" href="http://booking-rooms.herokuapp.com/">booking rooms</a></li>
              <li><a target="_blank" href="https://pehlivanovic.netlify.app/">portfolio</a></li>
            </ul>
          </div>
          <div class="service-section-right">
            <div v-for="(project, index) in projects" :key="index" class="service-section-right-content">
                <h3>{{ project.title }}</h3>
                  <a target="_blank" :href="project.url">
                    <div class="hover-image">
                      <img class="project-image" :src="project.image" alt="">
                      <p v-for="(tag,index) in project.tags" :key="index">{{tag}}</p>
                    </div>
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
      projects: [
        {
          title: 'Modern portfolio',
          url: '#',
          image: require('@/assets/img/modern-portfolio.png'),
          tags: [
            'desing', 'development'
          ],
        },
        {
          title: 'Q&A coming soon',
          url: '#',
          image: require('@/assets/img/q&a.png'),
          tags: [
            'desing', 'development'
          ],
        },
        {
          title: 'Inbox UI',
          url: 'https://ui-inbox.herokuapp.com/',
          image: require('@/assets/img/inboxUI.png'),
          tags: [
            'development'
          ],
        },
        {
          title: 'Booking Rooms',
          url: 'http://booking-rooms.herokuapp.com/',
          image: require('@/assets/img/booking-rooms.png'),
          tags: [
            'desing', 'development'
          ],
        },
        {
          title: 'Portfolio',
          url: 'https://pehlivanovic.netlify.app/',
          image: require('@/assets/img/portfolio.png'),
          tags: [
            'desing', 'development'
          ],
        },
      ]
    }
  },
  methods: {
    mouseMove(e){
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let img = document.querySelector('.parallax');

      let img_x = mouseX - this.coords(img).x;
      let img_y = mouseY - this.coords(img).y;

      img.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;
    },
    coords (el) {
      let coords = el.getBoundingClientRect();
      return {
        x: coords.left / 2,
        y: coords.top / 2
      }
    },
    goBack() {
      this.$store.commit("setPageTransition", "back");
      this.$router.push({
        name: "Experience"
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
            name: "Service"
          });
      }
      else{
        this.$store.commit("setPageTransition", "back");
        this.$router.push({
          name: "Experience"
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
  .projects-parallax{
    perspective: 1000px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .projects-parallax img{
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
    padding-top: 40px;
  }
  .service-section-left ul li{
    list-style: none;
    font-size: 3rem;
    font-weight: 700;
  }
   .service-section-left ul li a{
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;
  }
  .service-section-left ul li a:hover{
    color: tomato;
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
  .project-image {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    position: relative !important ;
    cursor: pointer;
    -webkit-box-shadow: 0px 17px 50px -24px #000000; 
    box-shadow: 0px 17px 40px -24px #000000;
  }
  .service-section-right-content a{
    display: block;
    text-decoration: none;
  }
  .hover-image{
    position: relative;
    opacity: 0.8;
    transition: all .4s ease-in-out;
  }
  .hover-image:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    opacity:1;
  }
  .hover-image::after{
    content: "";
    background: tomato;
    height: 3px;
    position: absolute;
    top: 0;
    transition: all .4s ease-in-out;
  }
  .hover-image::after {
    right: 100%;
    left: 0;
  }

  .hover-image:hover ~ a::after {
    right: 0;
    left: 100%;
  }

  .hover-image:hover::after {
    left: 0;
    right: 0;
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
    filter: drop-shadow(0px 0px 12px rgb(0,0,0,0.25));
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

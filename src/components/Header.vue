<template>
  <div class="test">
    <nav role="navigation">
      <div id="menuToggle">
        <!--
        A fake / hidden checkbox is used as click reciever,
        so you can use the :checked selector on it.
        -->
        <p class="menu-text" :style="{color: activeColor }">{{ title }}</p>
        <input @click="menuClose" type="checkbox"  v-model="checked" true-value="yes" false-value="no" />

        <a href="#"><router-link :to="{ name: 'Home' }"> <img :class="{'hidden': isActive}" src="../assets/img/logo.png" alt=""> </router-link></a>
        <a @click="menuClose" href="#"><router-link :to="{ name: 'Home' }"> <img :class="{'hidden': !isActive}" src="../assets/img/logoBlack.png" alt=""> </router-link></a>
         
       
        <!--
        Some spans to act as a hamburger.
        
        They are acting like a real hamburger,
        not that McDonalds stuff.
        -->
        <span></span>
        <span></span>
        <span></span>
        <!--
        Too bad the menu has to be inside of the button
        but hey, it's pure CSS magic.
        -->
        <ul class="menu">
          <a @click="menuClose" href="#"><router-link tag="li" :to="{ name: 'Home' }">Home</router-link></a>
          <a @click="menuClose" href="#"><router-link tag="li" :to="{ name: 'About' }">About</router-link></a>
          <a @click="menuClose" href="#"><router-link tag="li" :to="{ name: 'Experience' }">Experience</router-link></a>
          <a @click="menuClose" href="#"><router-link tag="li" :to="{ name: 'Projects' }">Projects</router-link></a>
          <a @click="menuClose" href="#"><router-link tag="li" :to="{ name: 'Service' }">Service</router-link></a>
          <a @click="menuClose" href="#"><router-link tag="li" :to="{ name: 'WorkWith' }">Work With</router-link></a>
          <a @click="menuClose" href="#"><router-link tag="li" :to="{ name: 'Contact' }">Contact</router-link></a>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: 'menu',
      isActive: false,
      checked: false,
      activeColor: '#fff',
    }
  },

  methods:{
    menuClose(){
      this.isActive = !this.isActive;
      if(this.isActive){
        this.title = 'close';
        this.checked = true;
        this.activeColor = '#232323'
      }else{
        this.title = 'menu'
        this.checked = false
        this.activeColor = '#fff'
      }
    }
  }
}
</script>

<style>
nav{
  height: 0;
}
.hidden{
  display: none;
  transition: all 0.8s ease-in-out;
}
.menu-text{
  position: absolute;
  left: 40px;
  top: -5.5px;
  z-index: 999;
  font-weight: 700;
  letter-spacing: -1px;
  transition: color 0.8s ease-in-out;
}

/* 
  Codepen.io menu example modified 
*/

#menuToggle
{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 999; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 28px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
#menuToggle img{
    position: absolute;
    z-index: 2;
    height: 60px;
    width: 60px;
    top: 35px;
    right: 80px;
    transform-origin: 0% 0%;
    transform: translate(0, -100%);
    
    transition: transform 0.8s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(0) translate(0, 6px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(0) translate(0, -8px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
.menu
{
  position: absolute;
  width: 100%;
  margin: -100px 0 0 -50px;
  padding-top: 125px;
  height: 88.2vh;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(0, -100%);
  
  transition: transform 0.8s cubic-bezier(0.77,0.2,0.05,1.0);
}

.menu li
{
  padding: 10px 0;
  font-size: 22px;
  transform: translateX(35%);
  line-height: 2;
}

@media (min-width: 640px){
  .menu li {
    font-size: 44px;
    line-height: 1.5;
  }
  .menu {
    height: 90vh;
  }
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}


</style>
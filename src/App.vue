<template>
  <div id="app">

    <app-page-loader></app-page-loader>
    
    <app-header></app-header>
  
    <transition
      :name="$store.state.pageTransition.name"
      :mode="$store.state.pageTransition.mode"
      v-on:after-enter="afterEnter"
      v-on:after-leave="afterLeave"
    >
      <router-view class="transition"/>
    </transition>
  </div>
</template>


<script>
  import Store from "./store/index";

  import Header from './components/Header'
  import PageLoader from './components/PageLoader'

  export default {
    components:{
      'app-header': Header,
      'app-page-loader': PageLoader
    },
    methods: {
      afterEnter: () => {
        window.scrollTo(0, 0);
      },
      afterLeave: () => {
        Store.commit("setPageTransition", "default");
      }
    }
  }
</script>

<style>
  
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  *{
    padding: 0;
    margin: 0; 
    box-sizing: border-box;
  }
  #app{
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    overflow-x:hidden;
  }
  .overflow{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #08305D;
    opacity: 0.5;
    z-index: -1;
  }
  .video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    z-index: -2;
  }
  .transition{
    overflow-x: hidden;
    height: 100vh;
  }
  .router-view-enter-active, .router-view-back-enter-active, .router-view-leave-active, .router-view-back-leave-active {
    position: absolute;
    width: 100%;
  }
  .router-view-leave-active {
    transition: transform 0.8s cubic-bezier(0.77,0.2,0.05,1.0);
    z-index: 2;
    transform: translateX(-100%);
  }
  .router-view-leave-to {
    z-index: 2;
    transform: translateX(-100%);
  }
  .router-view-back-leave-active {
    /* transition: transform 0.8s ease-in-out; */
    transition: transform 0.8s cubic-bezier(0.77,0.2,0.05,1.0);
    z-index: 2;
    transform: translateX(0%);
  }
  .router-view-back-leave-to {
    z-index: 2;
    transform: translateX(100%);
  }
</style>

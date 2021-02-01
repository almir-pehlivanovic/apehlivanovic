<template>
  <div id="app">
    
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

  export default {
    components:{
      'app-header': Header
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
  }
  #app{
    font-family: 'Open Sans', sans-serif;
    overflow: hidden !important;
    height: 100vh;
  }
  .transition {
    overflow: hidden !important;
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

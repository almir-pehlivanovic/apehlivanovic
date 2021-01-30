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
  *{
    padding: 0;
    margin: 0; 
  }

  #app{
    overflow: hidden;
  }
  .transition {
    overflow: hidden;
  }
  .router-view-enter-active, .router-view-back-enter-active, .router-view-leave-active, .router-view-back-leave-active {
    position: fixed;
    width: 100%;
    background: white;
    min-height: 100vh;
    top: 0;
  }
  .router-view-enter-active {
    transition: transform 0.6s ease-in-out;
    z-index: 2;
    transform: translateX(100%);
  }
  .router-view-enter-to {
    z-index: 2;
    transform: translateX(0%);
  }
  .router-view-leave-active {
    z-index: -1;
  }
  .router-view-leave-to {
    z-index: -1;
  }
  .router-view-back-leave-active {
    transition: transform 0.6s ease-in-out;
    z-index: 2;
    transform: translateX(0%);
  }
  .router-view-back-leave-to {
    z-index: 2;
    transform: translateX(100%);
  }
</style>

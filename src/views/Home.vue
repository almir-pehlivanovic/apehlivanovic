<template>
  <div class="home">
    <h1>Home page</h1>
    <br>
      <router-link :to="{ name: 'Experience' }">Experience</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  methods:{
    next(){
      this.$emit('next');
    }
  }
}
</script>


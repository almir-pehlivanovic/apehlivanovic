<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Experience' }">Experience</router-link>
    <router-link :to="{ name: 'Projects' }">Projects</router-link>
    <router-link :to="{ name: 'Service' }">Service</router-link>
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
    <router-link :to="{ name: 'WorkWith' }">Work With</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
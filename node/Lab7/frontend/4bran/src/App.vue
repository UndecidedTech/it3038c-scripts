<template>
  <div id="app">
    <originalPost/>
  </div>
</template>

<script>
import originalPost from './components/originalPost.vue'

export default {
  name: 'App',
  components: {
    originalPost
  }
}
</script>

<style>
#app {
  background-color: #eef2ff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>

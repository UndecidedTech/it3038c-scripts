<template>
  <div id="app">
    <originalPost/>
    <thread/>
  </div>
</template>

<script>
import originalPost from './components/originalPost.vue'
import thread from './components/thread.vue'
export default {
  name: 'App',
  components: {
    originalPost,
    thread
  }
}
</script>

<style>
#app {
  background-color: #eef2ff;
  font-family: arial,helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>

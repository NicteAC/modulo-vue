<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
    <PrimerComponente />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PrimerComponente from './components/PrimerComponente.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimerComponente
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
}
</style>

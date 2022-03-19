<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Personas />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Personas from '../components/Personas.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Personas
  }
}
</script>

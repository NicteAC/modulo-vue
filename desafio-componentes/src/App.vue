<template>
  <Personajes  />
  <ul v-for="personaje in character" :key="personaje.id">
    <li>{{personaje}}</li>
  </ul>
</template>

<script>
import Personajes from "./components/Personajes.vue";

export default {
  name: "App",
  components: {
    Personajes,
  },
  data() {
    return {
      character: {
        name: "",
        id: "",
      },
    };
  },
  created() {
    this.rickApi();
  },
  methods: {
    rickApi() {
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((json) => (this.character = json));
    },
  },
  computed : {
    personajeId() {
      return this.character.results.id
    },
    picture() {
      return this.character.image
    },
    personajeNombre() {
      return this.character.name
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

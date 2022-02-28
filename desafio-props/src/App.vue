<template>
  <form>
    <label for="tareas">Tarea</label>
    <input
      type="text"
      v-model="input"
      id="tareas"
      placeholder="ingresa nueva tarea"
    />
    <button type="button" v-on:click.prevent="add()">Añade</button>
  </form>
  <HelloWorld :lista="this.lista" @deleteItem="deleteItem" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      lista: [],
      input: "",
    };
  },
  methods: {
    add() {
      this.lista.push(this.input);
      this.input = "";
    },
    deleteItem(index) {
      this.lista.splice(index, 1);
    },
  },
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

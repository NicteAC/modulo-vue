<template>
  <div class="hello">
    <h1>Crea una nueva tarea</h1>
    <label>
      Tarea
      <input type="text" v-model="input" />
    </label>
    <button @click="add">Crear</button>
    <h2>Lista</h2>
    <ul v-for="(item, $index) in lista" :key="$index">
      <li>{{ $index }} {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    add() {
      this.lista.push(this.input);
      this.input = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

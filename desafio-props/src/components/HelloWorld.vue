<template>
  <ul>
      <li v-for="(todo, index) in lista" :key="index">
          {{ lista[index] }}
          
        <button @click="deleteItem(index)">eliminar</button>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    lista: Array
  },
   methods: {
      deleteItem(index){
          this.$emit('deleteItem', index);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

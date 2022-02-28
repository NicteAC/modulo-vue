<template>
  <div id="app">
    <div>
      <h1>Random Gif Cat</h1>
    </div>
    <div>
      <div class="row">
        <div class="prop"><label>Título: </label></div>
        <div class="val"><input type="text" v-model="titulo"/></div>
      </div>
      <div class="row">
        <div class="prop"><label>Filtro: </label></div>
        <div class="val">
          <select @change="cambioFiltro($event)">
            <option v-for="(filtro, index) in filtros" :key="index" :value="filtro" v-text="filtro"></option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="prop"><label>Color: </label></div>
        <div class="val flex">
          <select @change="cambioColor($event)">
            <option v-for="(c, index) in colores" :key="index" :value="c.color" v-text="c.texto"></option>
          </select>
          <div class="color-redondeado" :style="{backgroundColor: color}"></div>
        </div>
      </div>
      <div class="row">
        <div class="prop"><label>Tamaño: </label></div>
        <div class="val"><input type="number" v-model="tamano"/></div>
      </div>
      
      <p><button @click="obtenerGatito">Obtener mi gatito</button></p>
      <div>
        <img :src="imagen">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      filtros: ['blur','mono','sepia','negative','paint','pixel'],
      colores: [
        {color: 'green', texto: 'verde'},
        {color: 'blue', texto: 'azul'},
        {color: 'red', texto: 'rojo'},
        {color: 'white', texto: 'blanco'},
        {color: 'black', texto: 'negro'},
      ],
      titulo: 'Miau',
      filtro: 'blur',
      color: 'green',
      tamano: 300,
      imagen: ''
    }
  },
  methods: {
    obtenerGatito(){
      this.imagen = this.urlGatito
    },
    cambioColor(event){
      this.color = event.target.value
    },
    cambioFiltro(event){
      this.filtro = event.target.value
    }
  },
  computed: {
    urlGatito(){
      return `https://cataas.com/cat/gif/says/${this.titulo}?filter=${this.filtro}&color=${this.color}&size=${this.tamano}`
    }
  },
}
</script>

<style>
html{
  background-color: lightblue;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.color-redondeado{
  height: 30px;
  border-radius: 15px;
  width: 30px;
  border: 1px solid lightgray;
  margin: 0 10px;
}

.prop{
  width: 50%;
  text-align: right;
  padding: 0 5px;
  box-sizing: border-box;
}

.val{
  width: 50%;
  text-align: left;
}

.row{
  width: 100%;
  display: inline-flex;
  padding: 10px;
  box-sizing: border-box;
  background-color: lightcoral;
}

.flex{
  display: inline-flex;
}
</style>

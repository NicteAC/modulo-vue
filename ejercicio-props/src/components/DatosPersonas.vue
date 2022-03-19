<template>
  <div class="col-4">
    <h2 v-show="operacion == 'add'">Registrar nueva persona</h2>
    <h2 v-show="operacion == 'update'">Editar Persona</h2>
    <div>
      <label>Nombre</label>
      <input class="form-control" type="text" v-model="persona.name" />
      <label>Nacionalidad</label>
      <select v-model="persona.nationality">
        <option value="Chile">Chile</option>
        <option value="Argentina">Argentina</option>
        <option value="Peru">Peru</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brasil">Brasil</option>
      </select>
      <label>Edad</label>
      <input type="number" min="18" max="60" v-model="persona.age"/>
      <label>Estado civil</label>
      <select v-model="persona.marital">
        <option value="Soltero">Soltero</option>
        <option value="Casado">Casado</option>
        <option value="Viudo">Viudo</option>
        <option value="Divorciado">Divorciado</option>
      </select>
      <label>Email</label>
      <input type="email" v-model="persona.email" />
      <button v-show="operacion == 'add'" @click="agregar">Agregar</button>
      <button v-show="operacion == 'update'" @click="editar">Editar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatosPersonas",
  props: ["operacion", "person"],
  methods: {
      agregar() {          
          this.$emit("HolaPersona", this.persona)
      },
      editar() {          
          this.$emit("HolaPersona", this.persona)
      }
  },
  computed: {
    persona() {
      const persona = {
        name: "",
        nationality: "",
        age: "",
        marital: "",
        email: "",
      };
      const person = this.person;
      return person ? person : persona;
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
  <h1>Hola este es el componente Personas</h1>
  <DatosPersonas @HolaPersona="addPersona" operacion="add"/>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Nacionalidad</th>
                    <th>Edad</th>
                    <th>Estado civil</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(p, index) in personas" :key="index">
                    <td>{{p.name}}</td>
                    <td>{{p.nationality}}</td>
                    <td>{{p.age}}</td>
                    <td>{{p.marital}}</td>
                    <td>{{p.email}}</td>
                    <td> <button @click="deletePerson(index)">Eliminar</button></td>
                    <td> <button @click="editPerson(index)">Editar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
     <DatosPersonas @HolaPersona="addPersona" operacion="update" :person="personaEdit"/>
  </div>
</template>

<script>
import DatosPersonas from './DatosPersonas.vue'
export default {
    name: 'Personas',
    data() {
        return {
            personas: [],
            personaEdit: {}
        }
    },
  components: { DatosPersonas },
  methods: {
      addPersona(persona) {
          this.personas.push(persona)
      },
      deletePerson (index) {
          this.personas.splice(index, 1)
      },
      editPerson(index) {
          const persona = Object.assign({}, this.personas[index])
          this.personaEdit = persona
      }
  }
}
</script>

<style>

</style>
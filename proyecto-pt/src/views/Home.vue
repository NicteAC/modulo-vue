<template>
  <div>
    <h1>Hola</h1>
    <Cards />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Cards from '../components/Cards.vue'
export default {
  name: "Home",
  components: { Cards }, 
  data: () => ({
    cartas: "",
  }),
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(['getData']) //spread operator
  },
};
</script>

<style>
</style>

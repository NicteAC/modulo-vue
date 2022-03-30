<template>
  <div class="container">
    <div v-if="juegoEditar">
      <h2 class="text-center mt-5">
        Editando la opinión de: {{ juegoEditar.juego.name }}
      </h2>
    </div>
    <div v-else>
      <div class="alert alert-danger mt-5 text-center" role="alert">
        La opinion que deseas editar no exste.
        <button
          type="button"
          class="btn btn-primary"
          @click="$router.push({ name: 'Administracion' })"
        >
          Regresar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

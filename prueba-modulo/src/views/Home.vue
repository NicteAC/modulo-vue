<template>
  <div class="container">
    <h1 class="text-center mt-5">Lista de Juegos Disponibles</h1>
    <div class="row">
      <div class="col12 col-md-4" v-for="(game, index) in games" :key="index">
        <div class="card">
          <img
            :src="`${game.background_image}`"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ game.name }}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Rating: {{ game.rating }}</li>
              <li class="list-group-item">Released {{ game.released }}</li>
              <li class="list-group-item">Updated {{ game.updated }}</li>
            </ul>
            <a href="#" class="btn btn-primary">Opinar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["games"]),
  },
};
</script>

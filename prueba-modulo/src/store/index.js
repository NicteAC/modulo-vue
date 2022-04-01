import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    games: [],
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
  },
  actions: {
    async getGames({ commit }) {
      const url = "/games.json";
      const response = await axios.get(url);
      const { data: games } = response;
      commit("SET_GAMES", games);
    },
  },
  modules: {},

  plugins: [createPersistedState()],
});
store.dispatch("getGames");

export default store;

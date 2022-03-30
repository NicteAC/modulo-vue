import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [],
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const request = await ("data.json");
        commit("SET_DATA", request.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},

  plugins: [createPersistedState()],
});

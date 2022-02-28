import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    viewCards(state, payload) {
      state.cards = payload.cards;
    }
  },
  actions: {
    async getData ({ commit }) {
      try {
        const data = await fetch(`https://api.magicthegathering.io/v1/cards`);
        const object = await data.json();
        commit("viewCards", object);
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  },

})

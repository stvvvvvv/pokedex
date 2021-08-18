import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/'
  },
  mutations: {},
  actions: {},
  getters: {
    GET_POKEMONRUL: state => {
      return state.pokemonUrl
    }
  },
  modules: {}
})

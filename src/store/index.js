import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    pokemons: []
  },
  mutations: {
    SET_POKEMONS_TO_STATE: (state, pokemons) => {
      state.pokemons = pokemons
    }
  },
  actions: {
    GET_POKEMONS_FROM_API ({ commit }) {
      return axios('https://pokeapi.co/api/v2/pokemon/?limit=21', {
        method: 'GET'
      })
        .then((pokemons) => {
          commit('SET_POKEMONS_TO_STATE', pokemons.data)
          return pokemons
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    POKEMONS (state) {
      return state.pokemons
    }
  },
  modules: {
  }
})

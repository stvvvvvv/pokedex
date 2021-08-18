<template>
    <div class="pokemon-page__wrapper">
        <div class="pokemon-page__container">
            <h1>{{ pokemonInfo }}</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PokemonPage',
  props: {
    pokemon_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      pokemonInfo: {
        type: Object,
        default () {
          return {}
        }
      },
      pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/'
    }
  },
  methods: {
    getPokemonID (pokemonId) {
      pokemonId = this.pokemon_data.url.split('/')
        .filter(function (part) { return !!part }).pop()
      return pokemonId
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => (this.pokemonInfo = response))
  }
}
</script>

<style lang="scss">
</style>

<template>
  <div class="wrapper">
      <Header />
      <Search />
      <Filter />
      <div class="wrapper__container">
        <PokemonCard
        v-for="pokemon in pokemons.results"
        :key="pokemon.name"
        />
      </div>
  </div>
</template>

<script>
import Header from './Header'
import Search from './Search'
import Filter from './Filter'
import PokemonCard from './PokemonCard'

export default {
  name: 'Wrapper',
  components: { Header, Search, Filter, PokemonCard },
  data () {
    return {
      imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/',
      pokemons: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  },
  props: {
  },
  methods: {
    async getPokemons () {
      this.pokemons = await fetch(`${this.$store.getters.GET_POKEMONRUL}`)
        .then(response => response.json())
      console.log(this.pokemons)
    }
  },
  created () {
    this.getPokemons()
  }
}
</script>

<style lang="scss">
</style>

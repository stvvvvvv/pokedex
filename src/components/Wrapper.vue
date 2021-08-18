<template>
  <div class="wrapper">
      <Header />
      <Search />
      <Filter />
      <PokemonPage
       v-if="viewMore"
       :pokemonUrl="pokemonUrl"
       @closeViewMore="closeViewMore"
      />
      <div class="wrapper__container">
        <PokemonCard
        v-for="pokemon in pokemons.results"
        :key="pokemon.name"
        :pokemon_data="pokemon"
        :imageURL="imageURL"
        @setPokemonUrl="setPokemonUrl"
        />
      </div>
  </div>
</template>

<script>
import Header from './Header'
import Search from './Search'
import Filter from './Filter'
import PokemonCard from './PokemonCard'
import PokemonPage from './PokemonPage'

export default {
  name: 'Wrapper',
  components: { Header, Search, Filter, PokemonCard, PokemonPage },
  data () {
    return {
      imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/',
      pokemons: {
        type: Object,
        default () {
          return {}
        }
      },
      pokemonUrl: '',
      viewMore: true
    }
  },
  props: {
  },
  methods: {
    async getPokemons () {
      this.pokemons = await fetch(`${this.$store.getters.GET_POKEMONRUL}`)
        .then(resp => resp.json())
        .catch((error) => {
          console.log(error)
        })
    },
    setPokemonUrl (url) {
      this.pokemonUrl = url
      this.viewMore = true
    },
    closeViewMore () {
      this.pokemonUrl = ''
      this.viewMore = false
    }
  },
  created () {
    this.getPokemons()
  }
}
</script>

<style lang="scss">
</style>

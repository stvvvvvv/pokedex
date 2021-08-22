<template>
  <div class="wrapper">
      <Header />
      <Search />
      <Filter />
      <div class="wrapper__container">
        <PokemonList
        :apiUrl="apiUrl"
        />
      </div>
  </div>
</template>

<script>
import Header from './Header'
import Search from './Search'
import Filter from './Filter'
import PokemonList from './PokemonList'

export default {
  name: 'Wrapper',
  components: { Header, Search, Filter, PokemonList },
  data () {
    return {
      imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/',
      apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
      viewMore: true
    }
  },
  props: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>

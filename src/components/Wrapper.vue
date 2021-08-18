<template>
  <div class="wrapper">
      <Header />
      <Search />
      <Filter />
      <div class="wrapper__container">
        <PokemonCard
        v-for="pokemon in POKEMONS.results"
        :key="pokemon.name"
        :pokemon_data="pokemon"
        />
      </div>
  </div>
</template>

<script>
import Header from './Header'
import Search from './Search'
import Filter from './Filter'
import PokemonCard from './PokemonCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Wrapper',
  components: { Header, Search, Filter, PokemonCard },
  methods: {
    ...mapActions([
      'GET_POKEMONS_FROM_API'
    ])
  },
  mounted () {
    this.GET_POKEMONS_FROM_API()
  },
  computed: {
    ...mapGetters([
      'POKEMONS'
    ])
  }
}
</script>

<style lang="scss">
</style>

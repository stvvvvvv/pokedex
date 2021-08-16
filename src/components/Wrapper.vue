<template>
  <div class="wrapper">
      <Header />
      <Search />
      <Filter />
      <div class="wrapper__container">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
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
  components: { Header, Search, Filter, PokemonCard }
}
</script>

<style lang="scss">
</style>

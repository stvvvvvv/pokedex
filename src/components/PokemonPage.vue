<template>
    <div class="pokemon-page__wrapper">
        <div class="pokemon-page__container">
            <h1></h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PokemonPage',
  props: {
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
  }
}
</script>

<style lang="scss">
</style>

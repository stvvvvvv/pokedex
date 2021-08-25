<template>
    <div class="pokemon-page__wrapper">
        <div class="pokemon-page__container">
          <div class="pokemon-page__img-container">
            <img class="pokemon-page__img" :src="imageUrl + pokemonStats.id + '.svg'" alt="Pokemon">
          </div>
          <div class="pokemon-page__stats">
            <h2 class="pokemon-page__title">{{ pokemonStats.name }}</h2>
            <p class="pokemon-page__stats-height">Height: <span>{{ pokemonStats.height }}</span> </p>
            <p class="pokemon-page__stats-weight">Weight: <span>{{ pokemonStats.weight }}</span></p>
            <button
            class="pokemon-page__btn"
            @click="closePage"
            >
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PokemonPage',
  props: [
    'pokemonStats',
    'imageUrl'
  ],
  data () {
    return {
      pokemon: {},
      show: false
    }
  },
  methods: {
    closePage () {
      this.$emit('closePage')
    }
  }
}
</script>

<style lang="scss">
</style>

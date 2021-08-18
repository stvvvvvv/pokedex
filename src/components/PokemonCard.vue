<template>
    <div class="pokemon-card__wrapper">
        <div class="pokemon-card__container">
            <div class="pokemon-card__img-container">
                <img class="pokemon-card__img" :src="imageURL + getPokemonID() + '.svg'" alt="Pokemon">
            </div>
            <div class="pokemon-card__info">
                <span class="pokemon-card__id">ID {{getPokemonID()}} </span>
                <h2 class="pokemon-card__title">{{ pokemon_data.name }}</h2>
                <div class="pokemon-card__stats">
                    <p class="pokemon-card__stats-height">Height: <span>17</span> </p>
                    <p class="pokemon-card__stats-weight">Weight: <span>22</span></p>
                </div>
            </div>
            <div class="pokemon-card__types">
                <div class="pokemon-card__types-container">
                    <img class="pokemon-card__types-img" src="../assets/images/icons/grass.svg" alt="grass">
                </div>
                <div class="pokemon-card__types-container">
                    <img class="pokemon-card__types-img" src="../assets/images/icons/poison.svg" alt="poison">
                </div>
            </div>
            <button
            class="pokemon-card__btn"
            @click="setPokemonUrl(pokemon_data.url)"
            >
              View more
            </button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PokemonCard',
  data () {
    return {
      imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
    }
  },
  props: {
    pokemon_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    getPokemonID (pokemonId) {
      pokemonId = this.pokemon_data.url.split('/')
        .filter(function (part) { return !!part }).pop()
      return pokemonId
    },
    setPokemonUrl (url) {
      this.$emit('setPokemonUrl', url)
    }
  }
}
</script>

<style lang="scss">
</style>

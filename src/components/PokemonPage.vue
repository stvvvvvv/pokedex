<template>
    <div class="pokemon-page__wrapper">
        <div class="pokemon-page__container">
          <div class="pokemon-page__img-container">
            <img class="pokemon-page__img" :src="imageUrl + pokemon.id + '.svg'" alt="Pokemon">
          </div>
          <div class="pokemon-page__stats">
            <h2 class="pokemon-page__title">{{ pokemon.name }}</h2>
            <p class="pokemon-page__stats-height">Height: <span>{{ pokemon.height }}</span> </p>
            <p class="pokemon-page__stats-weight">Weight: <span>{{ pokemon.weight }}</span></p>
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
    'pokemonUrl',
    'imageUrl'
  ],
  data () {
    return {
      pokemon: {},
      show: false
    }
  },
  methods: {
    getPokemonInfo () {
      const req = new Request(this.pokemonUrl)
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json()
          }
        })
        .then((data) => {
          this.pokemon = data
          this.show = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    closePage () {
      this.$emit('closePage')
    }
  },
  created () {
    this.getPokemonInfo()
  }
}
</script>

<style lang="scss">
</style>

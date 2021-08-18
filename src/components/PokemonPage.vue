<template>
    <div class="pokemon-page__wrapper">
        <div class="pokemon-page__container">
          <div class="pokemon-page__img-container">
            <img class="pokemon-page__img" src="../assets/images/pokemon/1.png" alt="Pokemon">
          </div>
          <div class="pokemon-page__stats">
            <h2 class="pokemon-page__title">Title</h2>
            <p class="pokemon-page__stats-height">Height: <span>17</span> </p>
            <p class="pokemon-page__stats-weight">Weight: <span>22</span></p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PokemonPage',
  props: {
    pokemonUrl: {
      type: String,
      default () {
        return ''
      }
    },
    imageURL: {
      type: String,
      default () {
        return ''
      }
    }
  },
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
            return resp.json
          }
        })
        .then((data) => {
          this.pokemon = data
          this.show = true
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getPokemonInfo()
  }
}
</script>

<style lang="scss">
</style>

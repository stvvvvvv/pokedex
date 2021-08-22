<template>
    <div class="pokemon-card__wrapper">
        <div class="pokemon-card__container">
            <div class="pokemon-card__img-container">
                <img class="pokemon-card__img" :src="imageUrl + getPokemonID() + '.svg'" alt="Pokemon">
            </div>
            <div class="pokemon-card__info">
                <span class="pokemon-card__id">ID {{getPokemonID()}} </span>
                <h2 class="pokemon-card__title">{{ pokemon_data.name }}</h2>
                <div class="pokemon-card__stats">
                    <p class="pokemon-card__stats-height">Height: <span>{{ pokemonInfo.height }}</span> </p>
                    <p class="pokemon-card__stats-weight">Weight: <span>{{ pokemonInfo.weight }}</span></p>
                </div>
            </div>
            <div class="pokemon-card__types">
                <div class="pokemon-card__types-container">
                    <img
                    class="pokemon-card__types-img"
                    :src="pokemonTypeImgUrl + pokemonType.type.name + '.svg'"
                    alt="grass"
                    v-for="(pokemonType, index) in pokemonInfo.types"
                    :key="'pokemontype'+index"
                    />
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
      pokemonInfo: {
        type: Object,
        default () {
          return {}
        }
      },
      pokemonTypeImgUrl: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/'
    }
  },
  components: { },
  props: {
    pokemon_data: {
      type: Object,
      default () {
        return {}
      }
    },
    imageUrl: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    getPokemonID () {
      const pokemonId = this.pokemon_data.url.split('/')
        .filter(function (part) { return !!part }).pop()
      return pokemonId
    },
    setPokemonUrl (url) {
      this.$emit('setPokemonUrl', url)
    },
    getPokemonInfo () {
      const req = new Request(this.pokemon_data.url)
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json()
          }
        })
        .then((data) => {
          this.pokemonInfo = data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getPokemonInfo()
  }
}
</script>

<style lang="scss">
</style>

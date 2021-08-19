<template>
    <div class="pokemon-list__wrapper">
        <div class="pokemon-list__container">
        <PokemonCard
        v-for="(pokemon, index) in pokemons"
        :key="'poke'+index"
        :pokemon_data="pokemon"
        @setPokemonUrl="setPokemonUrl"
        />
        <PokemonPage
        :pokemonUrl="pokemonUrl"
        @closeViewMore="closeViewMore"
        />
        <div
        class="scroll-trigger"
        id="scrollTrigger"
        ref="infinitescrolltrigger"
        >
          <i class="fas fa-spinner fa-spin scroll-trigger__icon"></i>
        </div>
        </div>
    </div>
</template>

<script>
import PokemonCard from './PokemonCard'
import PokemonPage from './PokemonPage'

export default {
  name: 'PokemonList',
  props: [
    'pokemonUrl',
    'apiUrl'
  ],
  data () {
    return {
      pokemons: [],
      nextUrl: '',
      currentUrl: ''
    }
  },
  components: { PokemonCard, PokemonPage },
  methods: {
    getPokemons () {
      const req = new Request(this.currentUrl)
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json()
          }
        })
        .then((data) => {
          this.nextUrl = data.next
          data.results.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/')
              .filter(function (part) { return !!part }).pop()
            this.pokemons.push(pokemon)
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    scrollTrigger () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 && this.nextUrl) {
            this.next()
          }
        })
      })
      observer.observe(this.$refs.infinitescrolltrigger)
    },
    next () {
      this.currentUrl = this.nextUrl
      this.getPokemons()
    }
  },
  created () {
    this.currentUrl = this.apiUrl
    this.getPokemons()
  },
  mounted () {
    this.scrollTrigger()
  }
}
</script>

<style lang="scss">
</style>

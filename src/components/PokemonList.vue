<template>
    <div class="pokemon-list__wrapper">
        <div class="pokemon-list__container">
        <PokemonCard
        v-for="(pokemon, index) in pokemons"
        :key="'pokemon'+index"
        :pokemon_data="pokemon"
        :imageUrl="imageUrl"
        @setPokemonUrl="setPokemonUrl"
        />
        <div
        class="scroll-trigger"
        id="scrollTrigger"
        ref="infinitescrolltrigger"
        >
          <i class="fas fa-spinner fa-spin scroll-trigger__icon"></i>
        </div>
        </div>
        <PokemonPage
        v-if="showPage"
        :pokemonUrl="pokemonUrl"
        :imageUrl="imageUrl"
        @closePage="closePage"
        />
    </div>
</template>

<script>
import PokemonCard from './PokemonCard'
import PokemonPage from './PokemonPage'

export default {
  name: 'PokemonList',
  props: [
    'apiUrl'
  ],
  data () {
    return {
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/',
      pokemons: [],
      pokemonStats: {},
      nextUrl: '',
      currentUrl: '',
      pokemonUrl: '',
      showPage: false
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
    // async getPokemonStats () {
    //   try {
    //     const resp = await fetch(this.pokemon.url)
    //     const results = await resp.json()
    //     this.pokemonStats.push(results)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
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
    },
    setPokemonUrl (url) {
      this.pokemonUrl = url
      this.showPage = true
    },
    closePage () {
      this.pokemonUrl = ''
      this.showPage = false
    }
  },
  created () {
    this.currentUrl = this.apiUrl
    this.getPokemons()
    // this.getPokemonStats()
  },
  mounted () {
    this.scrollTrigger()
  }
}
</script>

<style lang="scss">
</style>

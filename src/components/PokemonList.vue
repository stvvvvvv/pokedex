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
        <transition name="fade">
          <PokemonPage
          v-if="showPage"
          :pokemonStats="pokemonStats"
          :imageUrl="imageUrl"
          @closePage="closePage"
          />
        </transition>
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
    setPokemonUrl (pokemonInfo) {
      this.pokemonStats = pokemonInfo
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
  },
  mounted () {
    this.scrollTrigger()
  }
}
</script>

<style lang="css">
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div class="search__wrapper">
    <div class="search__container">
      <input
      class="search__input"
      type="text"
      v-model="searchValue"
      >
      <button class="search__btn"><i class="fas fa-search"></i>   </button>
    </div>
    <p>{{ searchValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>

<template>
    <div class="filter">
        <button
        class="filter__btn"
        :class="{ filter_open_lines: isOpen }"
        @click="isOpen = !isOpen"
        >
         Filter <span :class="{ filter_close: isOpen }"></span>
        </button>
        <div class="filter__wrapper" :class="{ filter_active: isOpen }">
            <div class="filter__container container">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Filter',
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss">
</style>

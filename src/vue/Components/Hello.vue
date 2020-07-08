<template>
  <div>
    <h2 class="c-heading">{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Hello'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .c-heading {
    font-size: 2.6rem;
    font-weight: bold;
    letter-spacing: 0.15em;
  }
</style>
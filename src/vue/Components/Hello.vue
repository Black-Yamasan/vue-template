<template>
  <div class="l-wrap">
    <h2 class="c-heading">{{ msg }}</h2>
    <ul class="c-list">
      <li class="c-list__child"
        v-for="(list, key) in listItem"
        :key="key"
        >List{{list}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Hello',
        listItem: [1, 2, 3, 4, 5]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .c-heading {
    margin-bottom: 40px;
    font-size: 2.6rem;
    font-weight: bold;
    letter-spacing: 0.15em;
  }

  .c-list {
    list-style: '🐱';
    padding-left: 20px;

    &__child {
      margin-bottom: 20px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
</style>

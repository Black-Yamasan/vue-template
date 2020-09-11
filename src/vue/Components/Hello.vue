<template>
  <div class="l-wrap">
    <h2 class="c-heading">{{ msg }}</h2>
    <ul class="c-list">
      <List class="c-list__child"
        v-for="(list, key) in listItem"
        :key="key"
        :listProps="`List${list}`"
      />
    </ul>
  </div>
</template>

<script>
  import List from '@/vue/Components/List';
  import Api from '@/scripts/mixins/_api';
  const API_URL = '/assets/data/dammy.json';

  export default {
    components: {
      List
    },
    mixins: [ Api ],
    name: 'Hello',
    data () {
      return {
        msg: 'Hello',
        listItem: []
      }
    },
    async created() {
      await this.getData();
    },
    methods: {
      async getData() {
        const res = await this.mixinGetData(API_URL);
        this.listItem = res.list;
      }
    }
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

<template>
  <div class="container">
    <input type="text" v-model="name">
    <button @click="setBlobUrl">add</button>
    <ul>
      <li v-for="item in member" :key="item.key">
        {{ item.title }} | {{ item.explain }} | {{ item.created }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        member: []
      }
    },
    async asyncData({ app }) {
      const store = await app.$axios.$get('/store.json') || []
      return {member: store}
    },
    methods: {
      setBlobUrl() {
        console.log('name',this.name)
      }
    }
  }
</script>

<style>
</style>

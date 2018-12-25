<template>
  <div>
    <p>Vuex store: {{ currentCount }}</p>
    <button @click="countUpStore">Vuex store add</button>
  </div>
</template>

<script>
export default {
  methods: {
    countUpStore() {
      this.$store.dispatch("plusCount")
    }
  },
  computed: {
    currentCount() {
      return this.$store.getters.currentCount
    }
  }
}
</script>

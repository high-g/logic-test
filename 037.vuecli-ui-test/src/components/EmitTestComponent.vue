<template>
  <div><button @click="add">emit test</button></div>
</template>

<script>
export default {
  data() {
    return {
      cnt: 0
    }
  },
  methods: {
    add() {
      this.cnt++
      this.$emit("eventAdd", this.cnt)
    }
  }
}
</script>

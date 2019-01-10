<template>
  <section class="container">
    <p>id: {{ getId }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    getId() {
      console.log(this.$router)
      return this.$router.params
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>


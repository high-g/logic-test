<template>
  <div>
    <h1>サンプル</h1>
    <p>{{ msg }}</p>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

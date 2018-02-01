<template>
  <div id="app">
    <ul class="globalMenu">
      <li><a href="#/">ルート</a></li>
      <li><a href="#/HelloCopy/">HelloCopy</a></li>
    </ul>
    
    {{msggggg}}
    <br>
    <img src="./assets/logo.png">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msggggg: 'Welcome to Your Vue.js App'
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

.globalMenu {
  list-style: none;
}
</style>

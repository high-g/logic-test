<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Create</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/mock">Mock</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #888;
    text-decoration: none;
    &.router-link-exact-active {
      color: #333;
      text-decoration: underline;
    }
  }
}
</style>

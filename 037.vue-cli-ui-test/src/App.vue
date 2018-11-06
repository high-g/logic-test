<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Create</router-link> |
      <router-link to="/list">List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
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
    color: #ccc;
    &.router-link-exact-active {
      color: #333;
    }
  }
}

.display-flex {display: flex;}
.align-items-center {align-items: center;}
.justify-content-center {align-items: center;}
</style>

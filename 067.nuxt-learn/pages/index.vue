<template>
  <div class="container">
    <h1>hello!</h1>
    <nuxt-link to="/about">About Page</nuxt-link>
  </div>
</template>

<script>
export default {
  head: {
    title: 'hello hello'
  },
  asyncData(context) {
    console.log('asyncData', context)
    return { name: 'World' }
  },

}
</script>

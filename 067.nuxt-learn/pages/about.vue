<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">top</nuxt-link>
  </div>
</template>

<script>
  export default {
    asyncData() {
      console.log('process', process)
      return {
        name: process.static ? 'static' : (process.server ? 'server' : 'client')
      }
    },
    head : {
      title: 'About page'
    }
  }
</script>
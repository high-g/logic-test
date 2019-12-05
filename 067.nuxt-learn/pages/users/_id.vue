<template>
  <div>test</div>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.id)
    }
  }
</script>
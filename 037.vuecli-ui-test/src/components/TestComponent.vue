<template>
	<div class="blog-post">
		<h3>aaaaa</h3>
    <p>cnt: {{ cnt }}</p>
    <button @click="increment">＋</button>
    <button @click="decrement">ー</button>
	</div>
</template>

<script>
export default {
	data () {
		return {
      cnt: 0
    }
	},
  methods: {
    increment() {
      this.cnt++
    },
    decrement() {
      this.cnt--
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

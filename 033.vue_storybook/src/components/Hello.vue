<template>
	<div>
		<p>Hello, {{name}}</p>
		<p>テスト</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			name: 'world'
		}
	}
}
</script>

<style scoped>
h1 {
	color: darkcyan;
}
</style>
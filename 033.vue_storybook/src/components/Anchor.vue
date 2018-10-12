<template>
	<span class="anchor" @click="onClick()">
		<slot></slot>
	</span>
</template>

<script>
export default {
	props: ['href'],
	methods: {
		onClick() {
			location.href = this.href
		}
	}
}
</script>

<style scoped>
.anchor {
	color: blue;
	text-decoration: underline;
	cursor: pointer;
}
</style>

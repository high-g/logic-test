<template>
	<div class="from-group">
		<textarea
			class="from-input"
			:value="text"
			@input="onInput"
			rows="10"
		></textarea>
	</div>
</template>

<script>
export default {
	props: {
		value: {type: String, required: true}
	}

}
</script>

<style>

</style>

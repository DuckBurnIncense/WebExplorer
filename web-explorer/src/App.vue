<style>
	html, body {
		margin: 0;
		padding: 0;
		border: none;
		color: white;
	}
	* {
		margin: 0;
	}
</style>

<style scoped>
	#app {
		border-radius: 5px;
	}
</style>

<template>
	<div id="app">
		<explorer />
	</div>
</template>

<script>
	import Explorer from '@/components/Explorer/Index';
	
	export default {
		name: 'App',
		components: {
			Explorer
		},
		data() {
			return {
				
			}
		}
	}
</script>
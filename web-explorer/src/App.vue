<style>
	html, body {
		margin: 0;
		padding: 0;
		border: none;
		height: 100%;
		color: white;
		box-sizing: border-box;
	}
	* {
		margin: 0;
		box-sizing: border-box;
	}
</style>

<style scoped>
	#app {
		border-radius: 5px;
		height: 100%;
	}
	#app>.explorer {
		height: 100%;
	}
</style>

<template>
	<div id="app">
		<explorer class="explorer" />
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
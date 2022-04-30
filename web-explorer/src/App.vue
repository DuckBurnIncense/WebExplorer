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
	/*滚动条*/
	::-webkit-scrollbar
	{
		width: 6px;
		height: 6px;
		background-color: #171717;
	}
	/*滚动条轨道*/
	::-webkit-scrollbar-track
	{
		border-radius: 10px;
		background-color: #171717;
	}
	/*滑块*/
	::-webkit-scrollbar-thumb
	{
		border-radius:10px;
		background-color:#959595;
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
	<div id="app" onselectstart="return false">
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
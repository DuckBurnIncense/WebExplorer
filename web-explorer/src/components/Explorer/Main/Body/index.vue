<style lang="less" scoped>
	.root-body {
		display: flex;
		flex-direction: row;
		height: 100%;
		min-height: 0px;

		.nav-pane {
			width: 200px;
			height: 100%;
		}
		.explorer {
			flex: 1;
			height: 100%;
			overflow: auto;
		}
	}
</style>

<template>
	<div class="root-body">
		<nav-pane class="nav-pane" />
		<explorer class="explorer" />
	</div>
</template>

<script>
	import NavPane from './NavPane/';
	import Explorer from './Explorer/';
	
	export default {
		name: 'Body',
		components: {NavPane, Explorer},
		data() {
			return {
				
			}
		}
	}
</script>
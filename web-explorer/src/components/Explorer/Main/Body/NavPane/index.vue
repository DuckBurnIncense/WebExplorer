<style lang="less" scoped>
	.root-nav-pane {
		background-color: #191919;
		border: 1px solid #2b2b2b;
		padding-top: 10px;
	}
</style>

<template>
	<div class="root-nav-pane">
		<block icon="folder" name="Root99999999999999999999999999999999999999999999" />
	</div>
</template>

<script>
	import Block from './Block';
	
	export default {
		//Navigation pane
		name: 'NavPane',
		components: {Block},
		data() {
			return {
				
			}
		}
	}
</script>
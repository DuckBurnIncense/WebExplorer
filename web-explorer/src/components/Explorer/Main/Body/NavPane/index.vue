<style lang="less" scoped>
	.root-nav-pane {
		background-color: #191919;
		border: 1px solid #2b2b2b;
		border-right: 0;
		padding-top: 10px;
		overflow: auto;
		
	}
</style>

<template>
	<div class="root-nav-pane">
		<e-item :isDir="1" name="Root" path="Root/" />
	</div>
</template>

<script>
	import EItem from './Item';
	
	export default {
		//Navigation pane
		name: 'NavPane',
		components: {EItem},
		data() {
			return {
				
			}
		}
	}
</script>
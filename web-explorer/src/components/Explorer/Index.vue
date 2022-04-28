<style lang="less" scoped>
	.root-explorer {
		background-color: #fff;
		display: flex;
		flex-direction: column;

		.body {
			flex: 1;
		}
	}
</style>

<template>
	<div class="root-explorer">
		<e-header class="header" />
		<e-body   class="body"   />
	</div>
</template>

<script>
	import EHeader from "./Main/Header/";
	import EBody from "./Main/Body/";
	
	export default {
		name: 'Explorer',
		components: {EHeader, EBody},
		data() {
			return {
				
			}
		},
		created() {
			
		}
	}
</script>
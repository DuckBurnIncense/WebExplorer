<style lang="less" scoped>
	.root {
		background-color: #fff;
		
	    .header {

		}
		.body {
			display: flex;
			flex-direction: column;

			.left {
				width: 20%;

			}
			.right {
				width: 80%;
			}
		}
	}
</style>

<template>
	<div class="root">
		<e-header class="header" />
		<div class="body">

		</div>
	</div>
</template>

<script>
	import EHeader from "./Main/Header";
	
	export default {
		name: 'Explorer',
		components: {EHeader},
		data() {
			return {
				
			}
		},
		created() {
			
		}
	}
</script>
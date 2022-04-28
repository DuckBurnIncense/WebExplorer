<style lang="less" scoped>
	.root {
		background-color: #1a212a;
		
		.title {
			height: 32px;
		}
		.ribbon {
			
		}
		.nav {
			
		}
	}
</style>

<template>
	<div class="root">
		<e-title class="title" />
		<e-ribbon class="ribbon" />
		<e-nav class="nav" />
	</div>
</template>

<script>
	import ETitle  from "./Title";
	import ERibbon from "./Ribbon";
	import ENav    from "./Nav";

	export default {
		name: 'Header',
		components: {ETitle, ERibbon, ENav}
	}
</script>

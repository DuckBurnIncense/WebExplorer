<style lang="less" scoped>
	.root-body {
		display: flex;
		flex-direction: row;
		height: 100%;
		min-height: 0px;

		.nav-pane {
			height: 100%;
		}
		.resize-nav-pane {
			cursor: e-resize;
			width: 0px;
			border-left: 5px solid #2b2b2b;
			height: 100%;
			// background-color: #2b2b2b;
		}
		.explorer {
			flex: 1;
			height: 100%;
			overflow: auto;
		}
	}
</style>

<template>
	<div class="root-body" @mouseup="resizeing = 0" @mousemove="resizeNavPane">
		<nav-pane v-if="showNavPane" class="nav-pane" :style="{width: nevPaneWidth}" />
		<div 
			v-if="showNavPane"
			class="resize-nav-pane" 
			@mousedown="resizeing = 1" 
		></div>
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
				resizeing: 0,
				nevPaneWidth: '200px',
				showNavPane: 0
			}
		},
		methods: {
			resizeNavPane(e) {
				if (!this.resizeing || e.clientX < 100 || e.clientX > 600) return;
				this.nevPaneWidth = (e.clientX - 1) + 'px';
			}
		},
		mounted() {
			this.$bus.$on('closeNavPane', () => {this.showNavPane = !this.showNavPane;});
		}
	}
</script>
<style lang="less" scoped>
	.root {
		display: flex;
		align-items: center;

		.icon {
			height: 1.5em;
			margin-right: 5px;
		}
		.title-content::before {
			content: ' | ';
			color: #696f75;
		}
		.title-content {
			color: #ffffff;
		}
		.exit-buttons {
			margin-left: auto;

			.btn {
				font-size: 1em;
				padding: 5px 15px;
				width: 2em;
				cursor: pointer;
			}
			.btn:hover {
				background-color: #272e38;
			}
			.close-btn:hover {
				background-color: #c42b1c;
			}
		}
	}
</style>

<template>
	<div class="root">
		<img class="icon" src="@/assets/shell32/disk.png" />
		<p class="title-content">Z:\WebExplorer\web-explorer\src\assets\</p>
		<div class="exit-buttons">
			<span class="btn">–</span>
			<span class="btn">▢</span>
			<span class="btn close-btn">⨉</span>
		</div>
	</div>
</template>

<script>
	// import  from "./";
	
	export default {
		name: 'Title',
		// components: {},
		data() {
			return {
				
			}
		},
		created() {
			
		}
	}
</script>
<style lang="less" scoped>
	.root-nav-pane-block {
		height: 28px;
		width: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;

		.more {
			margin: 0px 5px;
			font-size: 0.8em;
		}
		.more.open::before {
			content: '∨';
			color: #d0d0d0;
		}
		.more.close::before {
			content: '>';
			color: #696969;
		}
		.icon {
			width: 1.2em;
			margin: 0px 5px;
		}
		.name {
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
	.root-nav-pane-block:hover {
		background-color: #4d4d4d;
	}
	.root-nav-pane-block.focus {
		background-color: #333333;
	}
</style>

<template>
	<div class="root-nav-pane-block" @click="more()">
		<span class="more" :class="isOpen ? 'open' : 'close'"></span>
		<img :src="iconPath" class="icon" />
		<span class="name">{{name}}</span>
	</div>
</template>

<script>
	// import  from '';
	
	export default {
		name: 'NavPaneBlock',
		// components: {},
		props: {
			name: {
				type: String,
				required: true
			},
			icon: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				isOpen: 0
			}
		},
		computed: {
			iconPath() {
				return require('@/assets/shell32/' + this.icon + '.png');
			}
		},
		methods: {
			more() {
				this.isOpen = !this.isOpen;
			}
		}
	}
</script>
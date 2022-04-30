<style lang="less" scoped>
	.root {
		display: flex;
		color: white;
		cursor: pointer;
		height: fit-content;

		.big {
			flex-direction: column;
			align-items: center;
			padding: 5px;

			.icon {
				height: 45px;
			}
		}
		.small {
			flex-direction: row;
			align-content: flex-start;
			padding: 1px 3px;

			.icon {
				height: 1.5em;
			}
		}
		span {
			font-size: 14px;
		}
	}
	.root:hover {
		background-color: rgba(255, 255, 255, 0.3);
		// border: 1px solid white;
	}
</style>

<template>
	<div class="root" :class="sizeClass" tabindex="0" @click="$emit('emit')" @keyup.enter="$emit('emit')">
		<img :src="iconPath" class="icon" />
		<span>{{name}}</span>
	</div>
</template>

<script>
	// import  from '';
	
	export default {
		name: 'RibbonButton',
		// components: {},
		props: {
			size: { type: String, require: true},
			name: { type: String, require: true},
			icon: { type: String, require: true}
		},
		computed: {
			iconPath() {
				return require('@/assets/shell32/' + this.icon + '.png');
			},
			sizeClass() {
				return this.size == 'big' ? 'big' : 'small';
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			
		}
	}
</script>
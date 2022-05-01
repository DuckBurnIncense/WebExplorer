<style lang="less" scoped>
	.root-property {
		position: fixed;
		left: 100px;
		top: 100px;
		width: 400px;
		height: 400px;
		// padding: 0px 5px;
		border-radius: 5px;
		border: 1px solid #4a5459;
		display: flex;
		flex-direction: column;

		.title {
			background-color: #4a5459;
			height: 30px;
			display: flex;
			align-items: center;
			border-radius: 5px 5px 0 0;

			.name {
				padding: 0px 5px;
			}
			.close {
				border-radius: 0 5px 0 0;
				padding: 3px 5px;
				margin-left: auto;
				width: 30px;
				text-align: center;
				height: 100%;
			}
			.close:hover {
				background-color: #c42b1c;
			}
		}
		.body {
			border-radius: 0 0 5px 5px;
			background-color: #f9f9f9;
			flex: 1;
		}
	}
</style>

<template>
	<div class="root-property" :style="{left: x + 'px', top: y + 'px'}">
		<div class="title" @mousedown="mouseDown">
			<span class="name">{{title}}</span>
			<span class="close" @click.stop="$emit('close')">⨉</span>
		</div>
		<div class="body">
			<slot />
		</div>
	</div>
</template>

<script>
	// import  from '';
	
	export default {
		name: 'Property',
		// components: {},
		props: {
			title: {
				type: String,
				required: 1
			}
		},
		data() {
			return {
				moving: 0,
				x: 100,
				y: 100,
				clickX: 0,
				clickY: 0
			}
		},
		methods: {
			mouseDown(e) {
				this.moving = 1;
				this.clickX = e.x - this.x;
				this.clickY = e.y - this.y;
			},
			setPosition(x, y) {
				if (x > 10 && x < window.innerWidth && y > 10 && y < window.innerHeight) {
					this.x = x - this.clickX;
					this.y = y - this.clickY;
				}
			}
		},
		mounted() {
			document.addEventListener('mousemove', e => {
				if (this.moving) {
					this.setPosition(e.x, e.y);
				}
			});
			document.addEventListener('mouseup', e => {
				if (this.moving) {
					this.moving = 0;
					this.setPosition(e.x, e.y);
				}
			});
		},
	}
</script>
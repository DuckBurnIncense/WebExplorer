<style lang="less" scoped>
	.root {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px 15px;
		height: 56px;

		.btn {
			width: 1.5em;
			padding: 2px;
			font-size: 1.2em;
			text-align: center;
			border-radius: 2px;
			cursor: pointer;
		}
		.btn:hover {
			background-color: #434343;
		}
		.address-bar {
			display: flex;
			align-items: center;
			flex: 1;
			height: 32px;
			background-color: #191919;
			border: 1px solid #535353;

			.icon {
				height: 1.2em;
				margin: 2px;
				cursor: pointer;
			}
			.path-part::before {
				content: '>';
				font-size: 0.8em;
				margin-right: 5px;
			}
			.path-part {
				display: flex;
				align-items: center;
				height: 100%;
				padding: 0 5px;
				cursor: pointer;
			}
			.path-part:hover {
				background-color: #434343;
			}
		}
	}
</style>

<template>
	<div class="root">
		<span class="btn" tabindex="0">←</span>
		<span class="btn" tabindex="0">→</span>
		<span class="btn" tabindex="0">↑</span>
		<div class="address-bar">
			<img class="icon" src="@/assets/shell32/folder.png" />
			<div 
				class="path-part" 
				v-for="(p, index) in path" 
				:key="index" 
				@click="changePath(index)"
			>
				{{p}}
			</div>
		</div>
	</div>
</template>

<script>
	// import  from '';
	
	export default {
		name: '',
		// components: {},
		data() {
			return {
				
			}
		},
		computed: {
			path() {
				let pathText = this.$store.state.path;
				let p = pathText.split('/');
				if (p[p.length - 1] == '') {p.pop();}
				return p;
			}
		},
		methods: {
			changePath(v) {
				let p = '';
				for (let i = 0; i <= v; i++) {
					p += this.path[i] + '/';
				}
				this.$store.dispatch('changePath', p);
				this.$bus.$emit('changePath', p);
			}
		}
	}
</script>
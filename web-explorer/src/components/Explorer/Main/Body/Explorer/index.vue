<style lang="less" scoped>
	.root-explorer {
		background-color: #191919;
		border: 1px solid #2b2b2b;
		border-left: 0;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		padding: 5px 10px;

		.item {

		}
		.empty-tip {
			width: 100%;
			text-align: center;
			margin: 10px 0px;
			cursor: default;
		}
	}
</style>

<template>
	<div class="root-explorer" @contextmenu.prevent.stop="showContextMenu">
		<item 
			class="item" 
			v-for="data in datas" 
			:key="data.name" 
			:data="data" 
			@emit="changePath(data)"
		/>
		<p v-if="datas == false" class="empty-tip"> (此文件夹为空) </p>
		<context-menu 
			v-show="contextMenu.show" 
			:x="contextMenu.x" 
			:y="contextMenu.y" 
			type="explorer" 
			@emit="contextMenuEmit"
		/>
	</div>
</template>

<script>
	import Item from './Item';
	import ContextMenu from './ContextMenu';
	
	export default {
		name: 'Explorer',
		components: {Item, ContextMenu},
		data() {
			return {
				path: this.$store.state.path,
				datas: [],
				contextMenu: {
					x: 0,
					y: 0,
					show: 0
				}
			}
		},
		created() {
			this.changePath({name: 'Root', isDir: 1});
			this.$bus.$on('changePath', path => {
				this.changePathSendApi(path);
			});
		},
		methods: {
			changePath(data) {
				if (data.isDir) {
					this.changePathSendApi(this.path + '/' + data.name);
				}
			},
			changePathSendApi(path) {
				this.path = path;
				this.$store.dispatch('changePath', path);
				this.$ajax.post({
					path
				}, '/api.php?p=getFileList', v => {
					if (v.data) {
						this.datas = v.data.sort((a, b) => {
							return b.isDir - a.isDir;
						});
					} else {
						console.error('Failed: ', v);
					}
				});
			},
			showContextMenu(e) { 
				this.contextMenu.x = e.x;
				this.contextMenu.y = e.y;
				this.contextMenu.show = 1;
			},
			contextMenuEmit(t) {
				console.log(t);
				if (t == 'ref') {
					this.changePathSendApi(this.path);
				}
			}
		},
		mounted() {
			document.addEventListener('mouseup', () => {this.contextMenu.show = 0;});
		}
	}
</script>
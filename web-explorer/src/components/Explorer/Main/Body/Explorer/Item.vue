<style lang="less" scoped>
	.root-item {
		display: flex;
		flex-direction: column;
		padding: 10px;
		align-items: center;
		height: fit-content;
		flex-wrap: wrap;
		// width: ;
		border-radius: 5px;
		cursor: pointer;

		.icon {
			height: 5em;
		}
		.name {
			font-size: 1em;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			max-width: 5em;
		}
	}
	.root-item:hover {
		background-color: #4d4d4d;

		.name {
			white-space: normal;
			text-overflow: initial;
			overflow: auto;
			max-height: 3em;
			word-break: break-all;
		}
	}
</style>

<template>
	<div 
		class="root-item" 
		@dblclick="open()" 
		@keyup.enter="open()" 
		tabindex="0"
		@contextmenu.prevent.stop="showContextMenu" 
	>
		<img class="icon" :src="iconPath" />
		<span class="name">{{data.name}}</span>
		<context-menu 
			v-show="contextMenu.show" 
			:x="contextMenu.x" 
			:y="contextMenu.y" 
			:type="data.isDir ? 'folder' : 'file'" 
			:data="data" 
			@emit="contextMenuEmit"
		/>
		<iframe :src="downloadSrc" frameborder="0" style="display: none;" />
	</div>
</template>

<script>
	import ContextMenu from './ContextMenu';
	
	export default {
		name: 'Item',
		components: {ContextMenu},
		props: {
			data: {
				required: 1,
				type: Object
			}
		},
		data() {
			return {
				contextMenu: {
					x: 0,
					y: 0,
					show: 0
				},
				downloadSrc: ''
			}
		},
		computed: {
			iconPath() {
				const supportType = this.$store.state.supportType;
				let fname = 'file';
				if (this.data.isDir) {
					fname = 'folder';
				} else {
					let type = this.$cusFunctions.file.getFileType(this.data.name).toLowerCase();
					fname = supportType[type] != undefined ? supportType[type] : 'file'
				}
				return require('@/assets/shell32/' + fname + '.png');
			},
			path() {
				return this.$store.state.path + '/' + this.data.name
			}
		},
		methods: {
			showContextMenu(e) { 
				this.contextMenu.x = e.x;
				this.contextMenu.y = e.y;
				this.contextMenu.show = 1;
			},
			contextMenuEmit(t) {
				console.log(t);
				if (t == 'open') {
					this.$emit('emit');
				} else if (t == 'download') {
					this.downloadSrc = `/api.php?p=downloadFile&data={%22file%22:%22${this.path}%22}`
				}
			},
			open() {
				this.contextMenuEmit(this.data.isDir ? 'open' : 'download');
			}
		},
		mounted() {
			document.addEventListener('mouseup', () => {this.contextMenu.show = 0;});
		}
	}
</script>
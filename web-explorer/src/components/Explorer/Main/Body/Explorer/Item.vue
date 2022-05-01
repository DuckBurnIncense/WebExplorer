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
		.property::v-deep {
			padding: 10px;

			p {
				// white-space: nowrap;
				// overflow: auto;

				.key {
					width: 100px;
				}
				.value {
					width: auto;
					color: #c9c9c9
				}
			}
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
		<popup v-if="showProperty" :title="'属性: ' + fileInfo.name" @close="hideProperty">
			<div class="property">
				<p><span class="key">文件名称: </span><span class="value">{{fileInfo.name}}</span></p>
				<p><span class="key">文件类型: </span><span class="value">{{fileInfo.isDir ? '文件夹' : (getFileType(fileInfo.name) + ' 类型文件')}}</span></p>
				<p v-if="fileInfo.size"><span class="key">文件大小: </span><span class="value">{{formatSize(fileInfo.size)}}</span></p>
				<p><span class="key">创建时间: </span><span class="value">{{formatTimestamp(fileInfo.ctime)}}</span></p>
				<p><span class="key">修改时间: </span><span class="value">{{formatTimestamp(fileInfo.mtime)}}</span></p>
			</div>
		</popup>
	</div>
</template>

<script>
	import ContextMenu from './ContextMenu';
	import Popup from '../Popup/';
	
	export default {
		name: 'Item',
		components: {ContextMenu, Popup},
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
				downloadSrc: '',
				showProperty: 0
			}
		},
		computed: {
			iconPath() {
				const supportType = this.$store.state.supportType;
				let fname = 'file';
				if (this.data.isDir) {
					fname = 'folder';
				} else {
					let type = this.getFileType(this.data.name);
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
				} else if (t == 'property') {
					this.getFileInfo();
				}
			},
			open() {
				this.contextMenuEmit(this.data.isDir ? 'open' : 'download');
			},
			hideProperty() {
				this.showProperty = 0;
			},
			getFileInfo() {
				this.$ajax.post({
					file: this.path
				}, 'api.php?p=getFileInfo', v => {
					this.fileInfo = v.data;
					this.showProperty = 1;
				});
			},
			getFileType(v) {
				return this.$cusFunctions.file.getFileType(v).toLowerCase();
			},
			formatTimestamp(ts) {
				return this.$cusFunctions.timeDate.formatTimestamp(ts);
			},
			formatSize(s) {
				return this.$cusFunctions.file.formatSize(s);
			}
		},
		mounted() {
			document.addEventListener('mouseup', () => {this.contextMenu.show = 0;});
		}
	}
</script>
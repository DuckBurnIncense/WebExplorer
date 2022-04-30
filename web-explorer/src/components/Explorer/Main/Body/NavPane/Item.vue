<style lang="less" scoped>
	.root-nav-pane-block {
		width: 100%;
		display: flex;
		flex-direction: column;
		// align-items: center;

		.block {
			display: flex;
			align-items: center;
			height: 28px;
			flex-wrap: nowrap;
			cursor: pointer;

			.more {
				margin: 0px 5px;
				width: 5px;
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
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
		.block:hover {
			background-color: #4d4d4d;
		}
		.block.focus {
			background-color: #333333;
		}
		.children {
			padding-left: 10px;
		}
	}
</style>

<template>
	<div class="root-nav-pane-block">
		<div class="block" @click="more()" @keyup.enter="more()" tabindex="0">
			<span class="more" :class="isDir ? (isOpen ? 'open' : 'close') : ''"></span>
			<img :src="iconPath" class="icon" />
			<span class="name" :title="name">{{name}}</span>
		</div>
		<div class="children" v-if="isOpen">
			<e-item 
				v-for="item in childrenData" 
				:key="item.name"
				:isDir="item.isDir" 
				:name="item.name" 
				:path="item.isDir ? (path + '/' + item.name) : ''"
			/>
		</div>
	</div>
</template>

<script>
	import EItem from './Item.vue';
	
	export default {
		name: 'EItem',
		components: {EItem},
		props: {
			name: {
				type: String,
				required: true
			},
			isDir: {
				type: [Boolean, Number],
				required: true
			},
			path: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				isOpen: 0,
				childrenData: []
			}
		},
		computed: {
			iconPath() {
				const supportType = this.$store.state.supportType;
				let fname = 'file';
				if (this.isDir) {
					fname = 'folder';
				} else {
					let type = this.getFileType(this.name);
					fname = supportType[type] != undefined ? supportType[type] : 'file'
				}
				return require('@/assets/shell32/' + fname + '.png');
			}
		},
		methods: {
			more() {
				if (this.isDir) {
					this.isOpen = !this.isOpen;
					this.$ajax.post({
						path: this.path
					}, '/api.php?p=getFileList', v => {
						this.childrenData = v.data.sort((a, b) => {
							return b.isDir - a.isDir;
						});
					});
				}
			},
			getFileType(v){
  				return this.$cusFunctions.file.getFileType(v);
			}
		}
	}
</script>
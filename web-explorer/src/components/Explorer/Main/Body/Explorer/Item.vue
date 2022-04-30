<style lang="less" scoped>
	.root {
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
	.root:hover {
		background-color: #4d4d4d;
	}
</style>

<template>
	<div class="root" @dblclick="$emit('dblclick')">
		<img class="icon" :src="iconPath" />
		<span class="name">{{data.name}}</span>
	</div>
</template>

<script>
	// import  from '';
	
	export default {
		name: 'Item',
		// components: {},
		props: {
			data: {
				required: 1,
				type: Object
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			iconPath() {
				const supportType = this.$store.state.supportType;
				let fname = 'file';
				if (this.data.isDir) {
					fname = 'folder';
				} else {
					let type = this.$cusFunctions.file.getFileType(this.data.name);
					fname = supportType[type] != undefined ? supportType[type] : 'file'
				}
				return require('@/assets/shell32/' + fname + '.png');
			}
		}
	}
</script>
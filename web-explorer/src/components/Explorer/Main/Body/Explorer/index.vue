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
			text-align: center;
		}
	}
</style>

<template>
	<div class="root-explorer">
		<item 
			class="item" 
			v-for="data in datas" 
			:key="data.name" 
			:data="data" 
			@emit="changePath(data)"
		/>
		<p v-if="datas.data == false" class="empty-tip">文件夹为空</p>
	</div>
</template>

<script>
	import Item from './Item';
	
	export default {
		name: 'Explorer',
		components: {Item},
		data() {
			return {
				path: this.$store.state.path,
				datas: {}
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
			}
		}
	}
</script>
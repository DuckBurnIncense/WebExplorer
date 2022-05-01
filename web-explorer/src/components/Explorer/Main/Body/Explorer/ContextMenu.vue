<style lang="less" scoped>
	.root-context-menu {
		display: block;
		position: fixed;
		background-color: #303537;
		padding: 5px;
		border-radius: 10px;

		.item {
			padding: 5px 10px;
			border-radius: 5px;
			cursor: pointer;
		}
		.item:hover {
			background-color: #0067c0;
		}
	}
</style>

<template>
	<div class="root-context-menu" :style="{left: x + 'px', top: y + 'px'}">
		<template v-if="type == 'explorer'">
			<div class="item" @click="e('ref')">刷新</div>
			<div class="item" @click="e('newFile')">新建文件</div>
			<div class="item" @click="e('newFolder')">新建文件夹</div>
			<div class="item" @click="e('paste')">粘贴</div>
		</template>
		<template v-if="type == 'folder'">
			<div class="item" @click="e('open')">打开</div>
			<div class="item" @click="e('cut')">剪切</div>
			<div class="item" @click="e('copy')">复制</div>
			<div class="item" @click="e('zip')">压缩</div>
			<div class="item" @click="e('rename')">重命名</div>
			<div class="item" @click="e('del')">删除</div>
		</template>
		<template v-if="type == 'file'">
			<div class="item" @click="e('download')">下载</div>
			<div class="item" @click="e('cut')">剪切</div>
			<div class="item" @click="e('copy')">复制</div>
			<div class="item" @click="e('rename')">重命名</div>
			<div class="item" @click="e('del')">删除</div>
		</template>
		<div v-if="type != 'explorer'" class="item" @click="e('property')">属性</div>
	</div>
</template>

<script>
	// import  from '';
	
	export default {
		name: 'ContextMenu',
		// components: {},
		props: {
			x: {
				type: Number,
				required: 1
			},
			y: {
				type: Number,
				required: 1
			},
			type: {
				type: String,
				required: 1
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
		},
		methods: {
			e(t) {
				this.$emit('emit', t);
			}
		},
	}
</script>
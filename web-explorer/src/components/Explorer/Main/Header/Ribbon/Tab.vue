<style lang="less" scoped>
	.root {
		display: flex;
				
		.button-row {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		.divide-line {
			width: 0px;
			margin: 1px;
			border-left: 1px solid white;
		}
	}
</style>

<template>
	<div class="root">
		<template v-if="tab == 1">
			<ribbon-button size="big" icon="cut" name="剪切" />
			<ribbon-button size="big" icon="copy" name="复制" />
			<ribbon-button size="big" icon="paste" name="粘贴" />
			<ribbon-button size="big" icon="rubbish" name="删除" />
			<div class="divide-line"></div>
			<div class="button-row">
				<ribbon-button size="small" icon="copy-path" name="复制为路径" />
				<ribbon-button size="small" icon="rename" name="重命名" />
			</div>
			<div class="divide-line"></div>
			<div class="button-row">
				<ribbon-button size="small" icon="properties" name="属性" />
				<ribbon-button size="small" icon="folder" name="新建文件夹" />
			</div>
			<div class="divide-line"></div>
			<div class="button-row">
				<ribbon-button size="small" icon="select-all" name="全部选择" />
				<ribbon-button size="small" icon="select-others" name="反向选择" />
				<ribbon-button size="small" icon="select-none" name="取消选择" />
			</div>
		</template>

		<template v-if="tab == 2">
			<ribbon-button size="big" icon="person" name="设置权限" />
		</template>

		<template v-if="tab == 3">
			<ribbon-button size="big" icon="cloud" name="省流模式" />
			<ribbon-button size="big" icon="nav-pane" name="预览窗格" @emit="$bus.$emit('closeNavPane')" />
		</template>
	</div>
</template>

<script>
	import RibbonButton from './RibbonButton';
	
	export default {
		name: 'Tab',
		components: {RibbonButton},
		props: ['tab'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
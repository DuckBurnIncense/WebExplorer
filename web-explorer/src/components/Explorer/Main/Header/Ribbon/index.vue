<style lang="less" scoped>
	.root {
		@hover-bgc: #4d4d4d;

		.nav {
			display: flex;
			height: 27px;
			margin-left: 10px;

			.item {
				color: white;
				padding: 2px 10px;
				cursor: pointer;
			}
			.item.focus {
				border: 1px solid #2b2b2b;
				border-bottom-width: 0;
				background-color: #202020;
			}
			.item:hover {
				background-color: @hover-bgc;
			}
			.hide-tab {
				margin-right: 10px;
				margin-left: auto;
				padding: 2px 5px;
			}
			.hide-tab:hover {
				background-color: @hover-bgc;
			}
			.hide-tab.show::before {
				content: '∧';
			}
			.hide-tab.hide::before {
				content: '∨';
			}
		}
		.tabs {
			background-color: #202020;
			border: 1px solid #2b2b2b;

			.tab {
				height: 100px;
			}
		}
	}
</style>

<template>
	<div class="root">
		<div class="nav">
			<div class="item" :class="getTabingTabClass(1)" @click="changeTabingTab(1)" @keyup.enter="changeTabingTab(1)" tabindex="0">主页</div>
			<div class="item" :class="getTabingTabClass(2)" @click="changeTabingTab(2)" @keyup.enter="changeTabingTab(2)" tabindex="0">权限</div>
			<div class="item" :class="getTabingTabClass(3)" @click="changeTabingTab(3)" @keyup.enter="changeTabingTab(3)" tabindex="0">查看</div>
			<span class="hide-tab" :class="showTab ? 'show' : 'hide'" @click="showTab = !showTab"></span>
		</div>
		<div class="tabs">
			<tab v-if="showTab" class="tab" :tab="tabingTab" />
		</div>
	</div>
</template>

<script>
	import Tab from './Tab';

	
	export default {
		name: 'Ribbon',
		components: {Tab},
		data() {
			return {
				tabingTab: 1,
				showTab: 1
			}
		},
		methods: {
			getTabingTabClass(t) {
				return this.tabingTab == t ? 'focus' : '';
			},
			changeTabingTab(t) {
				this.tabingTab = t;
				this.showTab = 1;
			}
		}
	}
</script>
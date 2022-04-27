const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave:false,
	devServer:{
		proxy:{
			'/api':{
				target: 'http://192.168.1.99:88/WebExplorer/api',
				pathRewrite: {'^/api': ''}
			}
		}
	}
})

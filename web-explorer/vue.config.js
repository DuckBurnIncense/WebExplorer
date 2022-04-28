const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave:false,
	devServer:{
		proxy:{
			'api\.php':{
				target: 'http://192.168.1.99:88/WebExplorer/web-explorer/',
				//pathRewrite: {'^(api\.php)': ''}
			}
		}
	}
})

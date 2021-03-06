import $ajax from './ajax.js';

export default {
	install(Vue){
		Vue.prototype.$cusFunctions = {
			ajax: {
				get(...args){
					return $ajax.get(...args);
				},
				post(...args){
					return $ajax.post(...args);
				}
			},
			timeDate: {
				formatTimestamp(timestamp){
					//把时间戳搞成人能看懂的格式:yyyy-mm-dd hh:mm:ss
					function add0(m){ //加"0"
						return m < 10 ? '0' + m : m;
					}
					timestamp = timestamp * 1000;
					var time = new Date(timestamp);
					var y = time.getFullYear();
					var m = time.getMonth() + 1;
					var d = time.getDate();
					var h = time.getHours();
					var min = time.getMinutes();
					var s = time.getSeconds();
					return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(min) + ':' + add0(s);
				},
			},
			file: {
				getFileType(val){
					return val.substring(val.lastIndexOf(".") + 1);
			  	},
				formatSize(value){
					if(null == value || value == '') return "0 Bytes";
					var unitArr = new Array("Bytes","KB","MB","GB","TB","PB","EB","ZB","YB");
					var index = 0;
					var srcsize = parseFloat(value);
					index = ~~(Math.log(srcsize) / Math.log(1024));
					var size = srcsize / Math.pow(1024,index);
					size = size.toFixed(2);
					return size + ' ' + unitArr[index];
				}
			}
		}
	}
}
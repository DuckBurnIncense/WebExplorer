export default {
	install(Vue){
		Vue.prototype.$ajax = {
			get: function(api, cb){
				var xhttp = new XMLHttpRequest();
				xhttp.withCredentials = true;
				xhttp.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200){
						cb(this.responseText);
					}
				};
				xhttp.open("GET", api, true);
				xhttp.send();
			},
			post: function(send="", api, cb){
				send = JSON.stringify(send);
				var xhttp = new XMLHttpRequest();
				xhttp.withCredentials = true;
				xhttp.onreadystatechange=function(){
					if(this.readyState == 4 && this.status == 200){
						if(isJSON(this.responseText)){
							cb(JSON.parse(this.responseText));
						}else{
							cb(false);
							console.error('$ajax json error:', this);
						}
					}
				};
				xhttp.open("POST", api, false);
				xhttp.setRequestHeader("Content-type", "application/json");
				xhttp.send(send);
			}
		}
	}
}


function isJSON(str){
	if(typeof str=='string'){
		try{
			var obj=JSON.parse(str);
			if(typeof obj=='object'&&obj){
				return true;
			}else{return false;}
		}catch(e){return false;}
	}
}
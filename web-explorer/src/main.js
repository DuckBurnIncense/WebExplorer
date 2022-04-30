import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';

import $ajax from '@/plugins/ajax.js';
import $cusFunctions from '@/plugins/cusFunctions.js';
Vue.use($ajax);
Vue.use($cusFunctions);

Vue.config.productionTip = false;


window.version = 0.1;
console.log('WebExploer Version: ' + version);


new Vue({
    // router,
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
}).$mount('#app');

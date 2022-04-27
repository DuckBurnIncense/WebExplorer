import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';

Vue.config.productionTip = false;
window.version = 0.1;
console.log('WebExploer Version: ' + version);


new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app');

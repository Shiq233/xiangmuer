import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { request1, request2} from './service';
import qs from 'qs'

import 'bootstrap'
import $ from 'jquery'


import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MintUI from 'mint-ui'
//導入MintUI的樣式表文件
import 'mint-ui/lib/style.min.css'
//通過Vue.use()註冊為插件
Vue.use(MintUI)

//  axios.defaults.baseURL = 'http://127.0.0.1:3000'
 Vue.prototype.$http = request1;
 Vue.prototype.$axios = request2;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

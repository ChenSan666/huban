// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper'

global.GET_PROXY_API = 'https://bird.ioliu.cn/v1?url=';
global.POST_PROXY_API = 'https://bird.ioliu.cn/v2';
global.COMPRESS = '_/fw/486/gifto/true';
require('swiper/dist/css/swiper.css')



import './assets/css/reset.css'
import './assets/css/common.scss'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$http = axios;
/* eslint-disable no-new */
var vm = new Vue({
  el: '#root',
  router,
  components: { App },
  template: '<App/>'
})

console.log(vm);


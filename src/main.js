import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';



import "./assets/css/weui.min.css";
import "./assets/css/jquery-weui.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/main.css";
import "./assets/css/theme-color.css";
import "./assets/css/swiper.min.css";

// import axios from "./plugins/axios.js";
// Vue.use(axios)
import axios from "axios"
axios.defaults.withCredentials=true;

// axios.interceptors.request.use(function (config) {
//   // 在发出正确请求之前做点事
//   store.dispatch('showLoading');
//   return config;// 返回现在配置给拦截器,一定要反绘制
// }, function (error) {
//   // 在发出错误请求之前做点事
//   return Promise.reject(error);
// });
//
// axios.interceptors.response.use(function (response) {
//   // 在响应之后做点事
//   store.dispatch('hideLoading');
//   return response;  // 回来的数据对象
// }, function (error) {
//   return Promise.reject(error);
// });


Vue.prototype.$http=axios;

import "animate.css";

import loading from './components/loading';
Vue.use(loading)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

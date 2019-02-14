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

import axios from "./plugins/axios.js";
Vue.use(axios)
// axios.defaults.withCredentials=true;

import "animate.css";

import loading from './components/loading';
Vue.use(loading)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

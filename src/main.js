import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./plugins/element.js";

// 导入全局样式表
import "./assets/css/global.css";
import ElementUI from "element-ui";

Vue.use(ElementUI);


Vue.config.productionTip = false;

// 配置请求的根路径
// axios.defaults.baseURL = 'http://192.168.1.103:8080'
// 配置axios请求拦截器
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});
Vue.prototype.$http = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

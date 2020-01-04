// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import axios from 'axios'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'element-ui/lib/theme-chalk/index.css'

// 全局注册 axios
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(router)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

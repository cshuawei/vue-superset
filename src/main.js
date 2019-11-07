import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosConfig from '../axios.config'
import common from './superset/common'
import vuetify from './plugins/vuetify'
import 'vant/lib/index.css'
import './assets/css/common.css'

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(axiosConfig)
Vue.use(common)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

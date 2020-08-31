import Vue from 'vue'
import App from './App.vue'
import img from './directive/lazy'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(img)
Vue.prototype.$http=axios
new Vue({
  render: h => h(App),
}).$mount('#app')

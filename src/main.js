import Vue from 'vue'
import App from './App.vue'
import img from './directive/lazy'
Vue.config.productionTip = false
Vue.use(img)
new Vue({
  render: h => h(App),
}).$mount('#app')

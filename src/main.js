import Vue from 'vue'
import App from './App.vue'
import '@/assets/scss/styles.scss'
import store from './store'
import VueJwtDecode from 'vue-jwt-decode'

Vue.config.productionTip = false

Vue.use(VueJwtDecode)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

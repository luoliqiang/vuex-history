import Vue from 'vue'
import App from './App.vue'
import store from './store'
import history from './history.js'

// use vuex history plugin
Vue.use(history, store)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

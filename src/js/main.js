import Vue from 'vue'
import App from '../templates/app.vue'
import Thread from '../templates/thread.vue'
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})

Vue.component('app', App);
Vue.component('thread', Thread);

new Vue({
    el: '#main'
})


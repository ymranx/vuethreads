import Vue from 'vue'
import App from '../templates/app.vue'
import Thread from '../templates/thread.vue'
import Timeago from 'vue-timeago'

Vue.use(Timeago, {
  name: 'timeago', 
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})

Vue.component('app', App);
Vue.component('thread', Thread);

new Vue({
    el: '#main'
})


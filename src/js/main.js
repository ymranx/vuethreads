import Vue from 'vue'
import App from '../templates/app.vue'
import Thread from '../templates/thread.vue'

Vue.component('app', App);
Vue.component('thread', Thread);

new Vue({
    el: '#main'
})


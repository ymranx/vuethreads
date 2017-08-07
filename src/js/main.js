import Vue from 'vue'
import Clientmain from '../../templates/client.vue'
import Gcmenu from '../../templates/menu.vue'
import Gcheatmap from '../../templates/heatmap.vue'
import Gcduplicate from '../../templates/duplicateclicks.vue'
import Gcerrorlist from '../../templates/errorlist.vue'
import Gcerrorview from '../../templates/errortrace.vue'
import Gcperformance from '../../templates/performance.vue'

Vue.component('clientmain', Clientmain);
Vue.component('gcmenu', Gcmenu);
Vue.component('gcheatmap', Gcheatmap);
Vue.component('gcduplicate', Gcduplicate);
Vue.component('gcerrorlist', Gcerrorlist);
Vue.component('gcerrorview', Gcerrorview);
Vue.component('gcperformance', Gcperformance);

$("body").append(`<div id='clientmain'> 
                    <clientmain></clientmain>
                 </div>`);

new Vue({
    el: '#clientmain'
})


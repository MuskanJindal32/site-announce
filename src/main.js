// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var VueScrollTo = require('vue-scrollto');
import VTooltip from 'v-tooltip'
import Paginate from 'vuejs-paginate'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSlideToggle from 'vue-slide-toggle'

Vue.config.productionTip = false
Vue.component('paginate', Paginate)
Vue.use(VueScrollTo)
Vue.use(VTooltip)
Vue.use(VueSlideToggle)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBSupWJjJWJ6EKWoc-P553rD_UBWb8fZX8',
    libraries: 'places',
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

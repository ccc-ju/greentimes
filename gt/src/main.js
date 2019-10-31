// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import { Icon } from 'vant';
import { Toast } from "vant";
import { Panel } from 'vant';
import '../static/reset.css'
import vueTap from 'v-tap';
import 'vant/lib/index.css';
// import store from './store'
import axios from 'axios';
// import '../data/prolist';
import 'nprogress/nprogress.css';
import 'lib-flexible/flexible';
import Share from 'vue-social-share';
import 'vue-social-share/dist/client.css';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

Vue.use(Share)
Vue.use(Toast)
Vue.use(Icon);
Vue.use(Panel);
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(vueTap)
// 挂载全局
Vue.prototype.$axios= axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


function bodyScale(){
  var devicewidth=document.documentElement.clientWidth;
    var scale=devicewidth/375;
    document.body.style.zoom=scale;
  }
  window.onload=window.onresize=function(){
    bodyScale();
  }
  

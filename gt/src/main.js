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
import store from './store'
import axios from 'axios';
// import '../data/prolist';
import 'nprogress/nprogress.css';
import 'lib-flexible/flexible';
import Share from 'vue-social-share';
import 'vue-social-share/dist/client.css';
import { Swipe, SwipeItem } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { List } from 'vant';
import { Dialog } from 'vant';

import Loading from '@/components/Loading';
Vue.component('Loading',Loading)

Vue.use(Dialog);
Vue.use(List);
Vue.use(Tab).use(Tabs);
Vue.use(DropdownMenu).use(DropdownItem);
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
  store,
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
  

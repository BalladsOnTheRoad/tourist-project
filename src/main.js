import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import axios from 'axios';
import VueAxios from 'vue-axios';
import iView from 'iview';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import {store} from './store';

import 'iview/dist/styles/iview.css';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueAwesomeSwiper, /* { default global options } */);



const router = new VueRouter({
	routes: routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import axios from 'axios';
import VueAxios from 'vue-axios';
import iView from 'iview';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import {store} from './store';
import VueCookie from 'vue-cookie';
import VueQuillEditor from 'vue-quill-editor';
import VueVirtualScroller from 'vue-virtual-scroller';


import 'iview/dist/styles/iview.css';
import 'swiper/dist/css/swiper.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';


Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.use(VueCookie);
Vue.use(VueQuillEditor, /* { default global options } */);
Vue.use(VueVirtualScroller);

axios.interceptors.request.use(
  function(config) {
    axios.defaults.withCredentials = true;

    // axios.defaults.headers.common["Authorization"] = 'Bearer ';
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const router = new VueRouter({
	routes: routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
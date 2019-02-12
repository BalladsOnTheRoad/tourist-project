import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

import User from './storeMoudule/user';

export const store=new Vuex.Store({
    modules:{
        User,
    },
    plugins: [vuexLocal.plugin]
})
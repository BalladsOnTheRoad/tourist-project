import Vue from 'vue';
import Vuex from 'vuex';

import User from './storeMoudule/user';

Vue.use(Vuex);
export const store=new Vuex.Store({
    modules:{
        User,
    }
})
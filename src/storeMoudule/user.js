const state={
    userEditModalStatus : false,
    userWriteModalStatus: false,
    loginStatus         : false,
    // userInfo            : null,
}
const getters={
    getUEMStatus:state=>{
        return state.userEditModalStatus;
    },
    getWMStatus:state=>{
        return state.userWriteModalStatus;
    },
    getLoginStatus:state=>{
        return state.loginStatus;
    },
    // getUserInfo:state=>{
    //     return state.userInfo;
    // }
}
const mutations={
    changeUEMStatus:(state,payload)=>{
        state.userEditModalStatus = !state.userEditModalStatus;
    },
    changeWMStatus:(state,payload)=>{
        state.userWriteModalStatus = !state.userWriteModalStatus;
    },
    changeLoginStatus:(state,payload)=>{
        state.loginStatus = !state.loginStatus;
    },
    // changeUserInfo:(state,payload)=>{
    //     state.userInfo = payload;
    // }
}
const actions={
    changeUEMStatusAction:({commit},payload)=>{
        commit('changeUEMStatus',payload);
    },
    changeWMStatusAction:({commit},payload)=>{
        commit('changeWMStatus',payload);
    },
    changeLoginStatusAction:({commit},payload)=>{
        commit('changeLoginStatus',payload);
    },
    // changeUserInfoAction:({commit},payload)=>{
    //     commit('changeUserInfo',payload);
    // }
}
export default {
    state,
    getters,
    mutations,
    actions
}
const state={
    userEditModalStatus: true,
}
const getters={
    getUEMStatus:state=>{
        return state.userEditModalStatus;
    }
}
const mutations={
    changeUEMStatus:(state,payload)=>{
        state.userEditModalStatus = !state.userEditModalStatus;
    }
}
const actions={
    changeUEMStatusAction:({commit},payload)=>{
        commit('changeUEMStatus',payload);
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}
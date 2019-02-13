<template>
    <div class="user_page">
        <profile-header></profile-header>
        <profile-content></profile-content>
        <div class="profile_footer">
            <public-footer></public-footer>
        </div>

        <div class="user_edit_modal mask_modal" v-show="getUEMStatus">
            <user-edit-modal></user-edit-modal>
        </div>
        <div class="user_edit_modal mask_modal" v-show="getWMStatus">
            <write-travel-modal></write-travel-modal>
        </div>
    </div>
</template>
<script>
import ProfileHeader from './header';
import ProfileContent from './content';
import UserEditModal from './userEditModal';
import WriteTravelModal from './writeTravelModal';

import PublicFooter from '../public/footer';
import { mapGetters, mapActions} from 'vuex';
export default {
    components:{
        'profile-header'    : ProfileHeader,
        'profile-content'   : ProfileContent,
        'user-edit-modal'   : UserEditModal,
        'public-footer'     : PublicFooter,
        'write-travel-modal': WriteTravelModal,
    },
    computed:{
        ...mapGetters(['getUEMStatus','getWMStatus']),
    },
    methods:{
        ...mapActions(['changeUEMStatusAction','changeWMStatusAction']),
    },
    mounted(){
        
    },
    beforeRouteLeave (to, from, next) {
        this.$store.dispatch('changeUEMStatusAction',false);
        this.$store.dispatch('changeWMStatusAction',false);
        next();
    },
    beforeMount(){
        if(!this.$cookie.get('nickname')){
            this.$Modal.confirm({
                title  : '提示框',
                content: '<br/><p style="font-size:18px; ">尚未登录，是否跳转道登录页面？</p>',
                onOk   : () => {
                    this.$router.push({path:'/login'});
                },
                onCancel: () => {
                    this.$Message.info('操作取消！');
                    this.$router.go(-1);
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .user_page{
        position: relative;
    }
    .profile_footer{
        width           : 100%;
        background-color: rgb(0, 0, 0);
        opacity         : 0.96;
        margin-top      : 100px;
    }
    .mask_modal{
        position  : absolute;
        left      : 0;
        top       : 0;
        width     : 100%;
        height    : 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index   : 1000;
    }
    
</style>
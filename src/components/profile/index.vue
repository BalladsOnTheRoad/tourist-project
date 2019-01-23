<template>
    <div class="user_page">
        <profile-header></profile-header>
        <profile-content></profile-content>
        <div class="profile_footer">
            <public-footer></public-footer>
        </div>

        <div class="user_edit_modal" v-show="true">
            <user-edit></user-edit>
        </div>
    </div>
</template>
<script>
import ProfileHeader from './header';
import ProfileContent from './content';
import UserEdit from './userEdit';
import PublicFooter from '../public/footer';
import { mapGetters, mapActions} from 'vuex';
export default {
    components:{
        'profile-header' : ProfileHeader,
        'profile-content': ProfileContent,
        'user-edit'      : UserEdit,
        'public-footer'  : PublicFooter,

    },
    computed:{
        ...mapGetters(['getUEMStatus']),
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
    }
    .user_edit_modal{
        position  : absolute;
        left      : 0;
        top       : 0;
        width     : 100%;
        height    : 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index   : 9999;

    }
</style>
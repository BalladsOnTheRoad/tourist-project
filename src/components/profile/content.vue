<template>
    <div class="profile_content">
        <div class="pc_wrapper">
            <div class="pc_container">
                <div class="pc_headerbg">
                </div>

                <div class="user_wrapper">
                    <div class="user_info">
                        <div class="user_img">
                            <img :src="userInfo.photo">
                        </div>
                        <div class="user_info_con">
                            <div class="user_info_top">
                                <div class="user_name top_list">
                                    <span>{{userInfo.nickname}}</span>
                                </div>
                                <div class="user_vip top_list">
                                    <router-link to="/">VIP<span> {{userInfo.vip}}</span></router-link>
                                </div>
                                <div class="user_edit top_list">
                                    <a href="javascript:;" @click="changeModal"></a>
                                </div>
                                <div class="user_level top_list">
                                    <p>
                                        等级：<span>Lv <i>{{userInfo.level}}</i></span>
                                    </p>
                                </div>
                            </div>
                            <div class="user_resume">
                                <p>{{userInfo.signature?userInfo.signature:'这个人很懒，什么都没留下。'}}</p>
                            </div>
                        </div>
                        
                    </div>


                    <p class="user_line1"></p>


                    <div class="user_soical">
                        <div>
                            <ul class="us_list">
                                <li>
                                    <router-link to="/">
                                        关注<span>{{userInfo.follows}}</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        粉丝<span>{{userInfo.fans}}</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        好友<span>{{userInfo.friends}}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    <p class="user_line1"></p>
                    

                    <div class="user_action">
                        <div>
                            <ul class="ua_list">
                                <li v-for="(action_list, index) in action_lists" :key="index">
                                    <a href="javascript:;" :class="{action_active:index==action_current}" @click="action_tab(index,action_list.title)" :title="action_list.title">{{action_list.content}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p class="user_line1" style="width:100%;"></p>

                    <div class="ua_content">
                        <component :is="currentComponent"></component>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import UserTravel from './userTravel';
import UserCollection from './userCollection';
import UserPhoto from './userPhoto';
import { mapGetters, mapActions} from 'vuex';
export default {
    data(){
        return{
            action_lists    : [
                {content:'我的游记',title:'travel'},
                {content:'我的收藏',title:'collection'},
                {content:'我的照片',title:'photo'}
            ],
            action_current  : 0,
            currentComponent: 'user-travel',
            userInfo        : {},
        }
    },
    methods:{
        ...mapActions(['changeUEMStatusAction','changeUserInfoAction']),
        action_tab(index,title){
            this.action_current = index;
            switch (title) {
                case 'travel': 
                    this.currentComponent = 'user-travel';
                    break;
                case 'collection': 
                    this.currentComponent = 'user-collection';
                    break;
                case 'photo': 
                    this.currentComponent = 'user-photo';
                    break;
                default: 
                    break;
            }
        },
        changeModal(){
            this.$store.dispatch('changeUEMStatusAction',true);
        },
        getUserInfo(userId){
            this.axios({
                url   : 'http://47.98.224.37:8080/api/v1/users/personal',
                method: 'get',
                params: {
                    id: userId,
                },
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded'
                // }
            }).then(res=>{
                if(res.data.status==200){
                    this.userInfo = res.data.data;
                    this.$store.dispatch('changeUserInfoAction',res.data.data);
                }else{
                    this.$Message.error(res.data.message);
                }
            })
        }
    },
    components:{
        'user-travel'    : UserTravel,
        'user-collection': UserCollection,
        'user-photo'     : UserPhoto,
    },
    computed:{
        ...mapGetters(['getUEMStatus']),
    },
    beforeMount(){
        var userId = location.href.split('?')[1].split('=')[1];
        this.getUserInfo(userId);
    }
}
</script>
<style lang="scss">

    /*  用户简介部分 */
    .profile_content{
        width : 100%;
        height: 1194px;
    }
    .pc_wrapper{
        width   : 1205px;
        height  : 100%;
        margin  : 0 auto;
        position: relative;
    }
    .pc_container{
        width          : 100%;
        height         : 1702px;
        position       : absolute;
        left           : 0;
        bottom         : 0;
        background     : url('../../images/profile_conbg.png') no-repeat 0px 0;
        background-size: 1205px 1703px;
    }
    .pc_headerbg{
        width          : 547px;
        height         : 411px;
        position       : absolute;
        top            : 0;
        right          : 0;
        background     : url('../../images/profile_conbg2.png') no-repeat -6px 0;
        background-size: 547px 411px;
    }


    .user_wrapper{
        width : 1195px;
        margin: 0 auto;
    }


    
    /* 用户信息 部分*/
    .user_info{
        width   : 100%;
        height  : 206px;
        padding : 41px 0 0 24px;
        overflow: hidden;
    }
    .user_line1{
        width           : 947px;
        height          : 1px;
        background-color: #cdcdcd;
    }
    .user_img{
        width           : 140px;
        height          : 140px;
        background-color: #22ac38;
        border-radius   : 50%;
        overflow        : hidden;
        float           : left;
        img{
            display: block;
            width  : 100%;
            height : 100%;
        }
    }
    .user_info_con{
        float       : left;
        padding-left: 33px;
        padding-top : 19px;
    }
    .top_list{
        float         : left;
        display       : inline-block;
        vertical-align: middle;
    }
    .user_info_top{
        overflow: hidden;
    }
    .user_name{
        margin-right: 10px;
        span{
            display      : inline-block;
            width        : 265px;
            white-space  : nowrap;
            overflow     : hidden;
            text-overflow: ellipsis;
            font-size    : 36px;
            font-weight  : normal;
            font-stretch : normal;
            color        : #333333;
        }
    }
    .user_vip{
        border-radius: 15px;
        margin-right : 14px;
        margin-top   : 10px;
        overflow     : hidden;
        a{
            display      : block;
            width        : 70px;
            height       : 30px;
            font-size    : 24px;
            line-height  : 30px;
            color        : #999999;
            border       : solid 1px #999999;
            text-align   : center;
            border-radius: 15px;
            &:hover{
                color           : #fff;
                background-color: #ff9d00;
                border          : solid 1px #ff9d00;

            }
        }
    }
    .user_edit{
        margin-right: 39px;
        margin-top  : 13px;
        
        a{
            display   : block;
            width     : 25px;
            height    : 24px;
            background: url('../../images/editHead.png') no-repeat center;
            &:hover{
                background: url('../../images/edit.png') no-repeat center;
            }

        }
    }
    .user_level{
        p{
            font-size: 30px;
            color    : #999999;
            span{
                font-size: 30px;
                color    : #ff9d00;
            }
        }
    }
    .user_resume{
        margin-top: 20px;
        p{
            font-size: 30px;
            color    : #666666;
        }
    }


    /*用户社交信息部分*/
    .user_soical{
        height      : 70px;
        padding-top : 8px;
        padding-left: 38px;
    }
    .us_list{
        overflow: hidden;
        li{
            float       : left;
            margin-right: 94px;
            a{
                display  : block;
                font-size: 36px;
                color    : #333333;
                span{
                    font-size  : 36px;
                    font-weight: normal;
                    color      : #ff9d00;
                    margin-left: 15px;
                }
            }
        }
    }

    .user_action{
        padding : 61px 0 61px 38px;
        position: relative;
        z-index : 100;
    }
    .ua_list{
        overflow: hidden;
        li{
            float       : left;
            margin-right: 151px;
            a{
                font-size: 46px;
                color    : #333333;
            }
            .action_active{
                color: #ff9d00;
            }
        }
    }
    
</style>
<template>
    <div class="basic_header">
        
        <div class="header_wrapper">
            <div class="nav">
                <div class="nav_wrapper">

                    <div class="home_logo">
                        <h1>
                            <router-link to="/" title="小猪旅行"></router-link>
                        </h1>
                    </div>
                    <div class="navigation">
                        <ul class="navList">
                            <li @mouseover="homeNavShow" @mouseout="homehomeNavHide">
                                <router-link to="/" active-class="active" title="首页">首页</router-link>
                            </li>
                            <li title="destination" @mouseover="desNavShow" @mouseout="desNavHide">
                                <router-link to="/dest" title="目的地">目的地</router-link>
                                <div class="desNav navDiv" v-show="desNavStatus">
                                    <ul>
                                        <li><router-link to="/dest" title="景点">景点</router-link></li>
                                        <li><router-link to="/dest" title="美食">美食</router-link></li>
                                        <li><router-link to="/dest" title="购物">购物</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <li title="strategy" @mouseover="strNavShow" @mouseout="strNavHide">
                                <router-link to="/strategy" title="攻略">攻略</router-link>
                                <div class="strNav navDiv" v-show="strNavStatus">
                                    <ul>    
                                        <li><router-link to="/strategy" title="热门攻略">热门攻略</router-link></li>
                                        <li><router-link to="/strategy" title="出门推荐">出门推荐</router-link></li>
                                        <li><router-link to="/strategy" title="周边热门">周边热门</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <li title="travel" @mouseover="traNavShow" @mouseout="traNavHide">
                                <router-link to="/travel" title="游记">游记</router-link>
                                <div class="traNav navDiv" v-show="traNavStatus">
                                    <ul>
                                        <li><router-link to="/travel" title="路线">路线</router-link></li>
                                        <li><router-link to="/travel" title="地图">地图</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <li title="accommodation" @mouseover="accNavShow" @mouseout="accNavHide">
                                <router-link to="/hotel" title="住宿">住宿</router-link>
                                <div class="accNav navDiv" v-show="accNavStatus">
                                    <ul>
                                        <li><router-link to="/hotel" title="酒店">酒店</router-link></li>
                                        <li><router-link to="/hotel" title="民宿">民宿</router-link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    

                    <div class="user_logo" v-if="loginStatus">
                        <img :src="userPhoto" alt="用户头像" @click="user_profile">
                    </div>
                    <div class="user_login" v-else>
                        <p>
                            <router-link to="login">登录&nbsp;/&nbsp;</router-link>
                        </p>
                        <p>
                            <router-link to="register"> 第一次来？</router-link>
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
        
    </div>
    
</template>
<script>
    import { mapGetters, mapActions} from 'vuex';
    export default {
        data () {
            return {
                value1       : 0,
                homeNavStatus: false,
                desNavStatus : false,
                strNavStatus : false,
                traNavStatus : false,
                accNavStatus : false,
                loginStatus  : false,
                userPhoto    : null,
                
                searchSelected: '全部',
                swiperOption  : {
                    loop      : true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el       : '.swiper-pagination',
                        clickable: true
                    },
                    slidesPerView: 1,
                    autoplay     : {
                        delay               : 2500,
                        disableOnInteraction: false
                    },
                }
            }
        },
        computed:{
            ...mapGetters(['getLoginStatus','getUserInfo']),
        },
        methods:{
            ...mapActions(['changeLoginStatusAction']),
            homeNavShow(eve){
                this.homeNavStatus = true;
            },
            homehomeNavHide(eve){
                this.homeNavStatus = false;
            },
            desNavShow(eve){
                this.desNavStatus = true;
            },
            desNavHide(eve){
                this.desNavStatus = false;
            },
            strNavShow(eve){
                this.strNavStatus = true;
            },
            strNavHide(eve){
                this.strNavStatus = false;
            },
            traNavShow(eve){
                this.traNavStatus = true;
            },
            traNavHide(eve){
                this.traNavStatus = false;
            },
            accNavShow(eve){
                this.accNavStatus = true;
            },
            accNavHide(eve){
                this.accNavStatus = false;
            },
            logOut(){
                this.$Modal.confirm({
                    title  : '退出登录',
                    content: "<h4>你确认要退出登录吗？</h4>",
                    onOk   : () => {
                        this.axios({
                            url             : 'http://47.98.224.37:8080/api/v1/users/exit',
                            method          : 'get',
                            transformRequest: [
                                function(data){
                                let ret = "";
                                for(let it in data){
                                    ret += encodeURIComponent(it)+"="+encodeURIComponent(data[it])+"&";
                                }
                                return ret;
                                }
                            ],
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(res=>{
                            if(res.data.status==200){
                                this.$Message.success('退出登录成功！');
                                this.$cookie.delete('nickname');
                                this.$cookie.delete('id');
                                this.$router.push('/');
                            }else{
                                this.$Message.error(res.data.message);
                            }
                        })
                    },
                    onCancel: () => {
                        this.$Message.info('操作已取消。');
                    }
                });
            },
            changePass(){
                // var userId = location.href.split('?')[1].split('=')[1];
                this.$Modal.confirm({
                    title  : '修改密码',
                    content: "<h4>你确认要修改密码吗？</h4>",
                    onOk   : () => {
                        this.$router.push({path:'/changepass'});
                        this.$Message.success('跳转成功！');
                    },
                    onCancel: () => {
                        this.$Message.info('操作已取消。');
                    }
                });
            },
            user_profile(){
                this.$Modal.confirm({
                    title  : '提示框',
                    content: '<br/><p style="font-size:18px; ">是否跳转到个人简介页面？</p>',
                    onOk   : () => {
                        var userId = this.getUserInfo.id;
                        this.$router.push({path:'/profile',query:{id:userId}});
                    },
                    onCancel: () => {
                        this.$Message.info('操作取消！');
                    }
                });
            }
        },
        mounted() {
        },
        beforeMount(){
            if(this.$cookie.get('nickname')){
                this.loginStatus = true;
                this.userPhoto   = this.getUserInfo.photo;
            }else{
                this.loginStatus = false;
            }
        }
    }
</script>
<style lang="scss" scoped>

    .nav{
        // overflow: hidden;
        width   : 100%;
        position: absolute;
        left    : 0;
        top     : 0;
        z-index : 1000;
    }
    .nav_wrapper{
        width : 1200px;
        margin: 0 auto;
    }
    .home_logo{
        float       : left;
        margin-right: 256px;
        margin-top  : 25px;
        margin-left : 15px;
        h1{
            width : 100px;
            height: 100px;
        }
        a{
            display   : block;
            width     : 100%;
            height    : 100%;
            background: url('../../images/logo.png') no-repeat center;
        }
    }
    .navigation{
        float: left;
    }
    .navList{
        // overflow  : hidden;
        margin-top: 35px;
        li{
            list-style: none;
        }
        &>li{
            float   : left;
            padding : 18px;
            position: relative;
            &>a{
                color    : #ffffff;
                font-size: 30px;
                &:hover{
                    color: #ff9d00;
                }
            }
            .active{
                color: #ff9d00;
            }
        }
        
    }
    .user_logo{
        width           : 60px;
        height          : 60px;
        background-color: #ff9d00;
        border          : solid 2px #ffffff;
        border-radius   : 50%;
        float           : right;
        margin-top      : 45px;
        margin-right    : 15px;
        overflow        : hidden;
        img{
            display: block;
            width  : 100%;
            height : 100%;
            cursor : pointer;
        }
    }
    .navDiv{
        width        : 100px;
        background   : #ffffff;
        position     : absolute;
        left         : 0;
        top          : 100px;
        padding      : 10px;
        border-radius: 5px;
        li{
            line-height: 36px;
            text-align : center;
        }
        a{
            color    : #010101;
            font-size: 18px;
            &:hover{
                color: #ff9d00;
            }
        }
        &::before{
            content           : "";
            width             : 0;
            height            : 0;
            border            : 15px solid #ffffff;
            border-top-color  : transparent;
            border-left-color : transparent;
            border-right-color: transparent;
            position          : absolute;
            left              : 35px;
            top               : -30px;
        }
    }
    .userLogo{
        float       : right;
        margin-top  : 45px;
        margin-right: 15px;
        padding-top : 15px;
        a{
            display       : inline-block;
            font-size     : 24px;
            font-weight   : normal;
            font-stretch  : normal;
            line-height   : 36px;
            letter-spacing: 0px;
            color         : #ffffff;
        }
    }


    .user_login{
        float      : right;
        padding-top: 45px;
        margin-top : 15px;
        p{
            float: left;
        }
        a{
            font-size: 24px;
            color    : #ffffff;
        }
    }
    /*首页头部样式*/
    .basic_header{
        height: 650px;
        // height         : 100%;
        background     : url('../../images/strategy_header_bg.png') no-repeat 0 0;
        background-size: cover;
    }
</style>
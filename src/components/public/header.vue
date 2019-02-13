<template>
    <div>
        <div class="swiper_banner">
            <swiper :options="swiperOption">
                <swiper-slide><img src="../../images/public_header01.jpg" alt="ad1" ></swiper-slide>
                <swiper-slide><img src="../../images/public_header02.jpg" alt="ad2" ></swiper-slide>
                <swiper-slide><img src="../../images/public_header03.jpg" alt="ad3" ></swiper-slide>
                <swiper-slide><img src="../../images/public_header04.jpg" alt="ad4" ></swiper-slide>
                <swiper-slide><img src="../../images/public_header05.jpg" alt="ad5" ></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            
        </div>

        
        <div class="header_wrapper">
            <div class="home_search">
                <div class="search_container">
                    <div class="searchNav">
                        <ul class="searchList">
                            <RadioGroup v-model="searchSelected">
                                <Radio label="全部" kind="all"></Radio>
                                <Radio label="酒店" kind="hotel"></Radio>
                                <Radio label="攻略" kind="strategy"></Radio>
                                <Radio label="目的地" kind="scenicSpot"></Radio>
                            </RadioGroup>
                        </ul>
                    </div>
                    <div class="search_box">
                        <div class="search_input_box">
                            <Input search enter-button placeholder="请输入你要搜索的内容" @on-search="navSearchCon"/>
                        </div>
                    </div>
                </div>
            </div>

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
                                <router-link to="/home"  title="首页" exact  active-class="active">首页</router-link>
                            </li>
                            <li @mouseover="desNavShow" @mouseout="desNavHide">
                                <router-link to="/" title="目的地" >目的地</router-link>
                                <div class="desNav navDiv" v-show="desNavStatus">
                                    <ul>
                                        <li><router-link to="/" title="景点">景点</router-link></li>
                                        <li><router-link to="/" title="美食">美食</router-link></li>
                                        <li><router-link to="/" title="购物">购物</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <li @mouseover="strNavShow" @mouseout="strNavHide">
                                <router-link to="/" title="攻略">攻略</router-link>
                                <div class="strNav navDiv" v-if="strNavStatus">
                                    <ul>
                                        <li><router-link to="/" title="热门攻略">热门攻略</router-link></li>
                                        <li><router-link to="/" title="出门推荐">出门推荐</router-link></li>
                                        <li><router-link to="/" title="周边热门">周边热门</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <li @mouseover="traNavShow" @mouseout="traNavHide">
                                <router-link to="/" title="游记">游记</router-link>
                                <div class="traNav navDiv" v-if="traNavStatus">
                                    <ul>
                                        <li><router-link to="/" title="路线">路线</router-link></li>
                                        <li><router-link to="/" title="地图">地图</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <li @mouseover="accNavShow" @mouseout="accNavHide">
                                <router-link to="/" title="住宿">住宿</router-link>
                                <div class="accNav navDiv" v-if="accNavStatus">
                                    <ul>
                                        <li><router-link to="/" title="酒店">酒店</router-link></li>
                                        <li><router-link to="/" title="民宿">民宿</router-link></li>
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
                            <router-link to="register"> 第一次来</router-link>
                        </p>
                    </div>
                </div>
               
            </div>
        </div>
        
    </div>
    
</template>
<script>
    import { mapGetters, mapActions} from 'vuex'
    export default {
        data () {
            return {
                userPhoto     : null,
                loginStatus   : false,
                value1        : 0,
                homeNavStatus : false,
                desNavStatus  : false,
                strNavStatus  : false,
                traNavStatus  : false,
                accNavStatus  : false,
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
            navSearchCon(ev,ol){
                if(ev){
                    if(this.searchSelected=='全部'){
                       this.axios({
                            url   : 'http://47.98.224.37:8080/api/v1/search?kind=hotel&content=',
                            method: 'get',
                            params: {
                                content: ev,
                            }
                        }).then(res=>{
                            if(res.data.status==200){
                                this.$Message.success(res.data.message);
                                return;
                            }else{
                                 this.axios({
                                    url   : 'http://47.98.224.37:8080/api/v1/search?kind=strategy&content=',
                                    method: 'get',
                                    params: {
                                        content: ev,
                                    }
                                }).then(res=>{
                                    if(res.data.status==200){
                                        this.$Message.success(res.data.message);
                                        return;
                                    }else{
                                         this.axios({
                                            url   : 'http://47.98.224.37:8080/api/v1/search?kind=scenicSpot&content=',
                                            method: 'get',
                                            params: {
                                                content: ev,
                                            }
                                        }).then(res=>{
                                            if(res.data.status==200){
                                                this.$Message.success(res.data.message);
                                                return;
                                            }else{
                                                this.$Message.error(res.data.message);
                                            }
                                            return;
                                        })
                                    }
                                })
                            }
                        })
                    }else if(this.searchSelected=='酒店'){
                        this.axios({
                            url   : 'http://47.98.224.37:8080/api/v1/search?kind=hotel&content=',
                            method: 'get',
                            params: {
                                content: ev,
                            }
                        }).then(res=>{
                            if(res.data.status==200){
                                this.$Message.success(res.data.message);
                            }else{
                                this.$Message.error(res.data.message);
                            }
                            return;
                        })
                    }else if(this.searchSelected=='攻略'){
                        this.axios({
                            url   : 'http://47.98.224.37:8080/api/v1/search?kind=strategy&content=',
                            method: 'get',
                            params: {
                                content: ev,
                            }
                        }).then(res=>{
                             if(res.data.status==200){
                                this.$Message.success(res.data.message);
                            }else{
                                this.$Message.error(res.data.message);
                            }
                            return;
                        })
                    }else if(this.searchSelected=='目的地'){
                        this.axios({
                            url   : 'http://47.98.224.37:8080/api/v1/search?kind=scenicSpot&content=',
                            method: 'get',
                            params: {
                                content: ev,
                            }
                        }).then(res=>{
                             if(res.data.status==200){
                                this.$Message.success(res.data.message);
                            }else{
                                this.$Message.error(res.data.message);
                            }
                            return;
                        })
                    }
                }else{
                    this.$Message.error('请输入搜索内容!');
                }
                
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

    /*轮播图样式*/
    .swiper_banner{
        img{
            width : 100%;
            height: 650px;
        }
    }
    
    /deep/ .swiper-pagination-bullet{
        height       : 15px;
        width        : 15px;
        border-radius: 50%;
    }
    /deep/ .swiper-pagination{
        margin-bottom: 10px;
    }
    /deep/ .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
        margin: 0 8px;
    }

    /deep/ .swiper-button-prev{
        width           : 100px;
        height          : 100px;
        border-radius   : 50%;
        margin-left     : 340px;
        background-image: url('../../images/home_header_left.png');
        background-size : 56px 98px;
        top             : 233px;
    }
    /deep/ .swiper-button-next{
        margin-right    : 340px;
        width           : 100px;
        height          : 100px;
        border-radius   : 50%;
        background-image: url('../../images/home_header_right.png');
        background-size : 56px 98px;
        top             : 233px;
    }

    /*导航栏样式*/
    .nav{
        width   : 100%;
        position: absolute;
        left    : 0;
        top     : 0;
        z-index : 9999;
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
        margin-top: 25px;
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

    .user_login{
        float      : right;
        padding-top: 45px;
        p{
            float: left;
        }
        a{
            font-size: 24px;
            color    : #ffffff;
        }
    }

    /*首页头部样式*/
    .home_search{
        width        : 700px;
        height       : 150px;
        background   : rgba($color: #0d0d0d, $alpha: 0.5);
        border-radius: 20px;
        position     : absolute;
        left         : 50%;
        transform    : translateX(-350px);
        top          : 383px;
        z-index      : 1000;
    }
    .search_container{
        padding: 0 47px;
    }
    /deep/ .ivu-radio-wrapper{
        font-family   : MicrosoftYaHei;
        font-size     : 14px;
        font-weight   : normal;
        font-stretch  : normal;
        line-height   : 36px;
        letter-spacing: 0px;
        color         : #ffffff;
        margin-right  : 40px;
    }
    /deep/ .ivu-radio{
        width       : 20px;
        height      : 20px;
        margin-right: 15px;
    }
    /deep/ .ivu-radio-inner{
        border-color: #ff9d00;
        
        &::after{
            background-color: #ff9d00;
        }
        
        &::after:hover{
            background-color: #ff9d00;
        }
    }
    /deep/ .ivu-radio-focus{
        border-color: #ff9d00;
    }
    .search_box{
        width : 100%;
        height: 40px;
    }
    /deep/ .ivu-input{
        width        : 560px;
        height       : 40px;
        border-radius: 5px;
        font-size    : 14px;
    }
    /deep/ .ivu-input:focus{
        border-color: #ff9d00;
        outline     : 0;
        box-shadow  : 0 0 2px 2px rgba(255,157,0,.2);

    }
    /deep/ .ivu-input-search{
        width        : 40px ;
        height       : 40px ;
        padding      : 0 !important;
        border-radius: 5px !important;
        box-sizing   : border-box;
        background   : #ff9d00!important;
        border-color : #ff9d00!important;
        border       : 0 !important;

        &::before{
            width: 0;
        }
    }
    /deep/ .ivu-icon-ios-search{
        font-size: 28px;
    }
</style>
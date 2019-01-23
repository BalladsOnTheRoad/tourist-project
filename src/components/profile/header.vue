<template>
    <div class="profile_header">
        
        <div class="header_wrapper">
            <div class="nav">
                <div class="home_logo">
                    <h1>
                        <router-link to="/" title="小猪旅行"></router-link>
                    </h1>
                </div>
                <div class="navigation">
                    <ul class="navList">
                        <li @mouseover="homeNavShow" @mouseout="homehomeNavHide">
                            <router-link to="/home" active-class="active" title="首页">首页</router-link>
                        </li>
                        <li title="destination" @mouseover="desNavShow" @mouseout="desNavHide">
                            <router-link to="/" title="目的地">目的地</router-link>
                            <div class="desNav navDiv" v-show="desNavStatus">
                                <ul>
                                    <li><router-link to="/">景点</router-link></li>
                                    <li><router-link to="/">美食</router-link></li>
                                    <li><router-link to="/">购物</router-link></li>
                                </ul>
                            </div>
                        </li>
                        <li title="strategy" @mouseover="strNavShow" @mouseout="strNavHide">
                            <router-link to="/" title="攻略">攻略</router-link>
                            <div class="strNav navDiv" v-if="strNavStatus">
                            </div>
                        </li>
                        <li title="travel" @mouseover="traNavShow" @mouseout="traNavHide">
                            <router-link to="/" title="游记">游记</router-link>
                            <div class="traNav navDiv" v-if="traNavStatus">
                            </div>
                        </li>
                        <li title="accommodation" @mouseover="accNavShow" @mouseout="accNavHide">
                            <router-link to="/" title="住宿">住宿</router-link>
                            <div class="accNav navDiv" v-if="accNavStatus">
                            </div>
                        </li>
                    </ul>
                </div>
                

                <div class="userLogo">
                    
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
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
        methods:{
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
            }
        },
        mounted() {
        },
    }
</script>
<style lang="scss" scoped>

    /*导航栏样式*/
    .home_logo{
        position: absolute;
        left    : 362px;
        top     : 25px;
        z-index : 1000;
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
        position: absolute;
        left    : 694px;
        top     : 40px;
        z-index : 1000;
    }
    .navList{
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
    .userLogo{
        width           : 60px;
        height          : 60px;
        background-color: #ff9d00;
        border          : solid 2px #ffffff;
        border-radius   : 50%;
        position        : absolute;
        right           : 361px;
        top             : 59px;
        z-index         : 1000;
    }


    /*首页头部样式*/
    .profile_header{
        height    : 900px;
        background: url('../../images/public_header01.jpg') no-repeat 0 0;
    }
</style>
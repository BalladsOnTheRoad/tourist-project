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
                                <Radio label="全部"></Radio>
                                <Radio label="酒店"></Radio>
                                <Radio label="攻略"></Radio>
                                <Radio label="目的地"></Radio>
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
                <div class="home_logo">
                    <h1>
                        <router-link to="/" title="小猪旅行"></router-link>
                    </h1>
                </div>
                <div class="navigation">
                    <ul class="navList">
                        <li @mouseover="homeNavShow" @mouseout="homehomeNavHide">
                            <router-link to="/home" active-class="active" title="首页">首页</router-link>
                            <div class="homeNav navDiv" v-if="homeNavStatus">
                            </div>
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
            },
            navSearchCon(ev,ol){
                // console.log(ev);
                console.log(this.searchSelected);
            }
        },
        mounted() {
            // console.log(this.navlist)
        },
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
        }
        
    }
    .active{
        color: #ff9d00;
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
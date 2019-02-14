<template>
    <div>
         <div id="strategy_mian">
             <!-- 第一块 -->
             <div class="strategy_mian_1">
                 <div class="strategy_mian_com">
                     热门攻略
                     <span></span>
                     <span></span>
                 </div>
                 <div class="carousel" style="width:1100px;height:350px;margin:0 auto;margin-top:65px;margin-bottom:0;">
                    <swiper :options="swiperOption" ref="mySwiper">
                    <!-- 这里是轮播图，但是链接还没有放上去 -->
                    <swiper-slide>
                    <ul>
                        <li class="first"></li>
                        <li v-for="(hotdata,index) in hotdatas" :key="index">
                        <router-link :to="{path:'/strategy_details',query: {id:hotdata.id}}">
                            <img :src="hotdata.image" style="padding:10px;width:220px;height:142px">
                            <div class="yuan_touxiang"></div>
                            <div class="title_1">{{hotdata.author.username}}</div>
                            <div class="title_2">{{hotdata.title}}</div>
                            <div class="content" @click="getdetails">{{hotdata.describe}}</div>
                        </router-link>
                        </li>
                        <li class="first"></li>
                    </ul>
                    </swiper-slide>

                    <swiper-slide>
                    <ul>
                        <li class="first"></li>
                        <li v-for="(hotdata,index) in hotdatas" :key="index">
                        <router-link :to="{path:'/strategy_details',query: {id:hotdata.id}}">
                            <img :src="hotdata.image" style="padding:10px;width:220px;height:142px">
                            <div class="yuan_touxiang"></div>
                            <div class="title_1">{{hotdata.author.username}}</div>
                            <div class="title_2">{{hotdata.title}}</div>
                            <div class="content" @click="getdetails()">{{hotdata.describe}}</div>
                        </router-link>
                        </li>
                        <li class="first"></li>
                    </ul>
                    </swiper-slide>
                    <swiper-slide>
                    <ul>
                        <li class="first"></li>
                        <li v-for="(hotdata,index) in hotdatas" :key="index">
                        <router-link :to="{path:'/strategy_details',query: {id:hotdata.id}}">
                            <img :src="hotdata.image" style="padding:10px;width:220px;height:142px">
                            <div class="yuan_touxiang"></div>
                            <div class="title_1">{{hotdata.author.username}}</div>
                            <div class="title_2">{{hotdata.title}}</div>
                            <div class="content" @click="getdetails">{{hotdata.describe}}</div>
                        </router-link>
                        </li>
                        <li class="first"></li>
                    </ul>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                    </swiper>
                 </div>
                 <div class="strategy_more">
                     <router-link to="/"  style="color:#fff;textDecoration:none">查看更多</router-link>
                 </div>
             </div>
             <!-- 第二块 -->
             <div class="strategy_mian_2">
                 <div class="strategy_mian_com">
                     出游推荐
                     <span></span>
                     <span></span>
                 </div>
            <div class="strategy_mian22">
                <div class="small_1"></div>
                <div class="xian_1"></div>
                <div class="big">
                     <router-link to="/"><!-- 此处可跳转要写路径-->
                 <div class="big">
                    <div class="big_1">情侣</div>
                </div>
                </router-link>
                 </div>
                 <div class="xian_1"></div>
                  <div class="small_1"></div>
                <div class="xian_1"></div>
                 <router-link to="/"><!-- 此处可跳转-->
                 <div class="big">
                    <div class="big_1">家人</div>
                </div>
                </router-link>
                 <div class="xian_1"></div>
                  <div class="small_1"></div>
                <div class="xian_1"></div>
                 <div class="big">
                <router-link to="/"><!-- 此处可跳转-->
                 <div class="big">
                    <div class="big_1">朋友</div>
                </div>
                </router-link>
                </div>
                 <div class="xian_1"></div>
                  <div class="small_1"></div>

            </div>

             </div>
             <!-- 第三块 -->
             <div class="strategy_mian_3">
                 <div class="strategy_mian_com">
                     攻略筛选
                     <span></span>
                     <span></span>
                 </div>
            <div class="liu">
                <div class="liu_1 liu_com">
                    <div id="box2">
                        <img src="../../images/1.png" alt="">
                    <div class="liu_titile">古镇</div>
                    <div class="liu_content"><p>哇哇哇哇哇</p>我钱钱钱顶哈哈</div>
                    <div class="small_liu">
                        <div id="box4"></div>
                        <div id="box5">走吧</div>
                        <div id="box6"></div>
                    </div>
                    </div>
                </div>
                <div  class="liu_2 liu_com">
                    <div id="box1"></div>
                    <div id="box2">
                        <img src="../../images/1.png" alt="">
                        <div class="liu_titile">古镇</div>
                        <div class="liu_content"><p>哇哇哇哇哇</p>我钱钱钱顶哈哈</div>
                    <div class="small_liu">
                        <div id="box4"></div>
                        <div id="box5">走吧</div>
                        <div id="box6"></div>
                    </div>
                    </div>
                    <div id="box3"></div>
                </div>
                <div  class="liu_3 liu_com">
                    <div id="box1"></div>
                    <div id="box2">
                        <img src="../../images/1.png" alt="">
                        <div class="liu_titile">古镇</div>
                        <div class="liu_content"><p>哇哇哇哇哇</p>我钱钱钱顶哈哈</div>
                        <div class="small_liu">
                        <div id="box4"></div>
                        <div id="box5">走吧</div>
                        <div id="box6"></div>
                    </div>
                    </div>
                    <div id="box3"></div>
                </div>
            </div>
             </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name      : 'carousel',
        components: {
            swiper,
            swiperSlide
        },
       data() {
        return {
            hotdatas    : '',
            swiperOption: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el            : '.swiper-pagination',
                    dynamicBullets: true
                    },
                    autoplay:{
                        delay               : 5000,
                        disableOnInteraction: false
                    },
                    on:{
                        click:function(){
                    }
                }
                },
                swiperSlides: [1, 2, 3, 4, 5]
            }
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.swiper;
            }
        },
        methods:{
            getdetails(w){
                console.log(w)
            },
            getHot(){
                this.axios({
                url   : `http://47.98.224.37:8080/api/v1/strategies/hot`,
                method: 'get'
            }).then(res=>{
                this.hotdatas = res.data.data.entity
            })
            }
        },
        mounted() {
        setInterval(() => {
             if (this.swiperSlides.length < 10) {
             this.swiperSlides.push(this.swiperSlides.length + 1)
            }
        }, 5000)

        this.getHot()
    }}
</script>
<style lang="scss" scoped>

.title_1{
    width      : 142px;
    height     : 16px;
    text-align : right;
    font-size  : 14px;
    line-height: 16px;
}
.title_2{
    width      : 220px;
    height     : 16px;
    margin-top : 27px;
    text-align : center;
    font-size  : 16px;
    line-height: 16px;
    overflow   : hidden;
}
.content{
    display           : -webkit-box;
    width             : 220px;
    height            : 100px;
    padding           : 28px 34px 0 29px;
    font-size         : 14px;
    line-height       : 18px;
    overflow          : hidden;
    text-overflow     : ellipsis;
    position          : relative;
    text-overflow     : ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.yuan_touxiang{
    width        : 50px;
    height       : 50px;
    border-radius: 50%;
    position     : absolute;
    top          : 113px;
    right        : 30px;
    background   : url(../../images/q8.jpg) -1050px;
}
.swiper-button-prev{
    width     : 40px;
    height    : 76px;
    background: url(../../images/left.png);
    left      : 0px;
}
.swiper-button-next{
    width     : 40px;
    height    : 76px;
    background: url(../../images/right.png);
    right     : 0px;
}

.strategy_more{
    width        : 220px;
    height       : 60px;
    margin       : 0 auto;
    margin-top   : 65px;
    text-align   : center;
    line-height  : 60px;
    font-size    : 30px;
    color        : #fff;
    background   : #ff9c00;
    border-radius: 25px;
}
.swiper-button-prev{
    color: #999999;
}
.carousel{
    ul{
        li{
            float       : left;
            margin-right: 40px;
            list-style  : none;
            position    : relative;
            a{
                display        : block;
                width          : 220px;
                height         : 350px;
                border         : 1px solid #000;
                text-decoration: none;
                color          : #333;
                overflow       : hidden;
            }
        }
         .last{
            margin-right: 0;
        }
        .first{
            width : 48px;
            height: 50px;
            margin: 0;
        }
    }
}
#strategy_header{
    width     : 100%;
    height    : 650px;
    background: url(https://pic.qyer.com/public/home/focus/2019/01/17/15477075419015?imageMogr2/interlace/1|imageslim)
}
#strategy_mian{
    width : 1200px;
    height: 2134px;
    margin: 0 auto;
}

.strategy_mian_3{
        height  : 955px;
        overflow: hidden;
         .liu{
             margin-top: 85px;
         }
         .liu_com{
             float      : left;
             margin-left: 70px;
             .small_liu{
                 position: absolute;
                 bottom  : 30px;
                 left    : 108px;
                 #box4{
                     width        : 0;
                     border-left  : 42px solid transparent;
                     border-right : 42px solid transparent;
                     border-bottom: 24px solid #ff9c00;
                 }
                #box5{
                    width           : 84px;
                    height          : 48px;
                    background-color: #ff9c00;
                    text-align      : center;
                    line-height     : 48px;
                    font-size       : 24px;
                    color           : #fff;
                    }
                #box6{
                    width       : 0;border-top: 24px solid #ff9c00;
                    border-left : 42px solid transparent;
                    border-right: 42px solid transparent;
                    }
             }
             img{
                position: absolute;
                top     : 24px;
                left    : 20px;
            }
            .liu_titile{
                height     : 87px;
                width      : 100%;
                text-align : center;
                line-height: 87px;
                font-size  : 35px;
                color      : #333333;
                position   : absolute;
                top        : 325px;
            }
            .liu_content{
                width      : 100%;
                height     : 60px;
                position   : absolute;
                top        : 420px;
                font-size  : 24px;
                color      : #333;
                line-height: 30px;
                padding    : 0 60px;
                text-align : center;
            }
         }
         .liu_1{
             margin-left: 75px;
             #box2{
                width: 302px;
            }
         }

        #box2{
            width     : 301px;
            height    : 625px;
            background: url(../../images/bg2.png);
            position  : relative;
            }
    }
.strategy_mian_2{
        height  : 490px;
        overflow: hidden;
        .strategy_mian22{
            height    : 222px;
            margin-top: 66px;
            .small_1{
                float        : left;
                width        : 40px;
                height       : 40px;
                border-radius: 20px;
                border       : 1px solid #000;
                margin-top   : 90px;
            }
            .xian_1{
                width     : 60px;
                height    : 1px;
                border    : 1px solid #000;
                float     : left;
                margin-top: 110px;
            }
            .big{
                width        : 220px;
                height       : 220px;
                float        : left;
                border       : 1px solid #000;
                border-radius: 110px;
            }
            .big_1{
                margin-left  : 1px;
                width        : 217px;
                height       : 218px;
                border       : 9px solid #fff;
                border-radius: 109px;
                text-align   : center;
                line-height  : 218px;
                color        : #fff;
                font-size    : 60px;
                background   : url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=42721144,1158432554&fm=27&gp=0.jpg) ;
            }

        }
    }

.strategy_mian_1{
        height  : 690px;
        overflow: hidden;

    }


.strategy_mian_com{
            width      : 720px;
            height     : 70px;
            margin     : 0 auto;
            background : #fff;
            color      : #333333;
            font-size  : 35px;
            text-align : center;
            line-height: 70px;
            position   : relative;
            margin-top : 70px;
            span       : first-child{
                width        : 358px;
                height       : 34px;
                position     : absolute;
                left         : 0;
                bottom       : 0;
                border-left  : 1px solid #000;
                border-bottom: 1px solid #000;
            }
            span:last-child{
                width       : 358px;
                height      : 34px;
                position    : absolute;
                right       : 0;
                top         : 0;
                border-right: 1px solid #000;
                border-top  : 1px solid #000;
            }
        }

</style>
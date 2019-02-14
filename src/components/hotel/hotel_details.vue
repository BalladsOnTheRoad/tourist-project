<template>
    <div>
        <div class="header">
            <detail-header></detail-header>
        </div>
        <div>
        <!-- 酒店详情
       {{this.$route.query.id}} -->
    <div class="hotel_detail_wrap">
    <div class="hotel_top">
        <div class="hotel_top_name">
            {{data.name}}
        </div>
        <div class="hotel_details_add">
            <div class="hotel_details_add1">
                <div class="Master_Hotel">{{data.englishname}}</div>
                <span v-for="(VIP,index) in VIPs" :key="index"></span>
            </div>
            <div class="hotel_details_add2">
                地址: {{data.addr}}
                <span>查看地址></span>
            </div>
            <div class="hotel_details_add3">
                <span>8.4</span>分
            </div>
        </div>
        <div class="hotel_details_pic">
            <div class="hotel_details_pic1">
                <!-- 轮播 -->
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="../../images/q11.jpg"></swiper-slide>
                        <swiper-slide><img src="../../images/q8.jpg"></swiper-slide>
                        <swiper-slide><img src="../../images/q12.jpg"></swiper-slide>
                        <swiper-slide><img src="../../images/tl.jpg"></swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
            </div>
            <div class="hotel_details_pic2">
                    <img src="../../images/q8.jpg" v-for="Img in Imgs"/>
            </div>
        </div>
        <div class="hotel_reserve">
            <span>立即预定</span>
            <div class="hotel_reserve_add">查看酒店地图 ></div>
        </div>
    </div>
</div>
    <!-- 基本信息 -->
    <div class="hotel_basic">
        <div class="hotel_basic1 hotel_basic_com">
            <span>基本信息</span>
            <div class="hotel_basic1_d">
                <div class="hotel_basic1_dd">入住时间: 15: 00-15: 30</div>
                <div class="hotel_basic1_dd">离店时间: 12: 00之前</div>
                <div class="hotel_basic1_dd">建成于 : 2013年</div>
                <div class="hotel_basic1_dd">翻修于 : 2014年</div>
                <div class="hotel_basic1_dd">酒店规模: 15间客房</div>
            </div>
        </div>
        <div class="hotel_basic2 hotel_basic_com">
            <span>主要设施</span>
            <div class="hotel_basic2_d">
                <div class="hotel_basic2_dd">
                    <span></span>
                    w i f i 服 务
                </div>
                <div class="hotel_basic2_dd">
                    <span class="dd_stop"></span>
                    收费停车场
                </div>
                <div class="hotel_basic2_dd">
                    <span class="dd_ele"></span>
                    电梯
                </div>
            </div>
            <div class="hotel_basic2_d2">
                <div class="hotel_basic2_d2d">
                    <span></span>
                    餐厅
                </div>
                <div class="hotel_basic2_d2d">
                     <span class="baggage"></span>
                     行李寄存
                </div>
                <div class="hotel_basic2_d2d">
                     <span class="time"></span>
                     24小时服务
                </div>
                <div class="hotel_basic2_d2d">
                     <span class="thermos"></span>
                     热水服务
                </div>
                 <div class="hotel_basic2_d2d">
                     <span class="hair"></span>
                     吹风机
                </div>
            </div>
        </div>
        <div class="hotel_basic3 hotel_basic_com">
            <span>住客评价</span>
            <div class="hotel_basic3_top">
                <img src="../../images/q8.jpg" alt="">
                <div class="hotel_basic3_star">
                    <span v-for="star in stars"></span>
                </div>
                <div class="hotel_basic3_talk">
                    <span v-for="talk in talks">{{talk}}</span>
                </div>
            </div>
            <div class="hotel_basic3_center">
                {{data.describe}}
            </div>
            <div class="hotel_basic3_all">查看全部评论 ></div>
        </div>
        <div class="hotel_basic4 hotel_basic_com">
            <span>酒店攻略</span>
            <div class="hotel_basic4_d">
                <div class="hotel_basic4_d1 hotel_basic4_ha">
                    <p>必读</p>
                    <p>酒店就位于台北车站前，通过地下步行街即可到达台北车站和捷运站</p>
                    <p>酒店就位于台北车站前，通过地下步行街即可到达台北车站和捷运站</p>
                    <p>酒店就位于台北车站前，通过地下步行街即可到达台北车站和捷运站,厄齐尔群</p>
                </div>
                <div class="hotel_basic4_d1">
                    <p>贴士</p>
                    <p>酒店就位于台北车站前，通过地下步行街即可到达台北车站和捷运站</p>
                    <p>酒店就位于台北车站前，通过地下步行街即可到达台北车站和捷运站</p>
                    <p>酒店就位于台北车站前，通过地下步行街即可到达台北车站和捷运站</p>
                </div>
            </div>
        </div>
    </div>

 </div>
 <div class="footer">
     <detail-footer></detail-footer>
 </div>
    </div>
</template>
<script>
import DetailHeader from '../public/basicHeader';
import DetailFooter from '../public/footer';
export default {
    components:{
        'detail-header': DetailHeader,
        'detail-footer': DetailFooter

    },
    data(){
        return {
            addr        : '',
            data        : '',
            talks       : ['# 环境好','# 房间大','# 服务好'],
            stars       : [1,1,1,1,1],
            VIPs        : [1,2,3,4],
            Imgs        : [1,1,1,1,1,1],
            swiperOption: {
            slidesPerView: 1,
            spaceBetween : 30,
            loop         : true,
            pagination   : {
                el       : '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }
        }
    },
    methods:{
        getlist(){
             this.axios({
                url   : `http://47.98.224.37:8080/api/v1/hotels/${this.$route.query.id}`,
                method: 'get'
            }).then(res=>{
                // console.log(res.data.data);
                this.data = res.data.data[0];
            })
        }
    },
    mounted(){
        this.getlist();
        // console.log(this.data);
    }
}
</script>
<style lang="scss">
.hotel_basic3_all{
    width        : 140px;
    font-weight  : 400;
    height       : 30px;
    margin-top   : 8px;
    font-size    : 20px;
    color        : orange;
    border-bottom: 1px solid orange;
    float        : left;

}
.hotel_basic3_center{
    min-height   : 110px;
    line-height  : 33px;
    font-size    : 20px;
    margin-top   : 40px;
    padding-right: 40px;
}
.hotel_basic{
    .hotel_basic3{
        .hotel_basic3_top{
            width     : 100%;
            height    : 80px;
            margin-top: 33px;
    .hotel_basic3_talk{
        width : 700px;
        height: 35px;
        float : left;
        span{
            display      : block;
            width        : 95px;
            min-height   : 30px !important;
            height       : 30px !important;
            border-radius: 15px;
            line-height  : 30px;
            font-size    : 16px;
            color        : #999;
            margin-right : 10px;
            border       : 1px solid #999;
        }
    }
    img{
        display     : block;
        width       : 80px;
        height      : 80px;
        float       : left;
        margin-right: 18px;
    }
    .hotel_basic3_star{
        width : 700px;
        height: 45px;
        float : left;
        span{
            display        : block;
            width          : 33px;
            height         : 33px;
            float          : left;
            background     : url(../../images/star.png) no-repeat;
            background-size: 35px 35px;
            margin-right   : 3px;
        }

    }
}
    }

}

.hotel_basic4_ha{
    margin-top: 30px;
}
.hotel_basic4_d1{
    min-height   : 128px;
    margin-bottom: 10px;
    p{
        height     : 32px;
        line-height: 32px;
        color      : #666;
        font-size  : 20px;
        font-weight: 500;
    }
}
.hotel_basic2_d2{
    min-width: 800px;
    height   : 42px;
    overflow : hidden;
    .hotel_basic2_d2d{
        min-width      : 80px;
        height         : 42px;
        float          : left;
        text-indent    : 26px;
        margin-right   : 60px;
        line-height    : 42px;
        color          : #999;
        font-size      : 20px;
        text-decoration: line-through;
        span{
            display    : block;
            width      : 22px;
            height     : 22px;
            margin-top : 10px;
            margin-left: 6px;
            background : url(../../images/restaurant.png) no-repeat;
        }
        .baggage{
            background: url(../../images/luggage.png) no-repeat;
        }
        .hair{
            background: url(../../images/hair-dryer.png) no-repeat;
        }
        .thermos{
            background: url(../../images/thermos.png) no-repeat;
        }
        .time{
            background: url(../../images/time.png) no-repeat;
        }
    }
}
.hotel_basic_com{
    border-bottom: 1px solid #dedede;
    span{
        width      : 180px;
        min-height : 130px;
        line-height: 100px;
        font-size  : 26px;
        display    : block;
        float      : left;
        text-indent: 20px;
        color      : #333;
    }
}
.hotel_basic{
    width     : 1200px;
    margin    : 0 auto;
    min-height: 500px;
    margin-top: 12px;
    .hotel_basic1{
        width   : 100%;
        height  : 130px;
        overflow: hidden;
        .hotel_basic1_d{
            width     : 1018px;
            height    : 80px;
            float     : left;
            margin-top: 30px;
            .hotel_basic1_dd{
                display     : block;
                min-width   : 160px;
                height      : 40px;
                line-height : 40px;
                font-size   : 20px;
                margin-right: 60px;
                float       : left;
            }
        }

    }
    .hotel_basic2{
        height       : 120px;
        border-bottom: 1px solid #dedede;
        overflow     : hidden;
        .hotel_basic2_d{
            min-width : 520px;
            height    : 36px;
            margin-top: 20px;
        }
        .hotel_basic2_dd{
            min-width   : 70px;
            height      : 36px;
            float       : left;
            margin-right: 60px;
            text-indent : 32px;
            line-height : 36px;
            font-size   : 20px;
            overflow    : hidden;
            span{
                display   : block;
                width     : 22px;
                height    : 22px;
                margin-top: 8px;
                background: url(../../images/WIFI.png) no-repeat
            }
            .dd_stop{
                background: url(../../images/stop.png) no-repeat
            }
            .dd_ele{
                background: url(../../images/elevator.png) no-repeat
            }

        }
    }
    .hotel_basic3{
        min-height   : 340px;
        border-bottom: 1px solid #dedede;
        span{
            min-height: 340px;
        }
    }
    .hotel_basic4{
        min-height: 385px;
        overflow  : hidden;
        span{
            min-height: 300px;
        }
    }
}
.hotel_reserve{
    width   : 100%;
    height  : 60px;
    overflow: hidden;
    .hotel_reserve_add{
        width         : 225px;
        min-height    : 33px;
        color         : orange;
        letter-spacing: 4px;
        font-size     : 28px;
        line-height   : 33px;
        float         : right;
        margin-top    : 28px;
    }
    span{
        display      : block;
        width        : 280px;
        height       : 60px;
        border-radius: 35px;
        background   : orange;
        float        : left;
        font-size    : 34px;
        line-height  : 60px;
        text-align   : center;
        color        : #fff;
        cursor       : pointer;
    }
}
.hotel_details_pic{
    width : 100%;
    height: 470px;
    .hotel_details_pic1{
        width     : 838px;
        height    : 470px;
        background: gray;
        float     : left;
        img{
            display: block;
            width  : 838px;
            height : 470px;
        }
    }
    .hotel_details_pic2{
        width : 360px;
        height: 470px;
        float : right;
        img{
            display      : block;
            float        : left;
            width        : 170px;
            height       : 150px;
            margin-left  : 10px;
            margin-bottom: 10px;
        }
    }
}

.hotel_details_add3{
    float      : right;
    width      : 110px;
    height     : 36px;
    line-height: 36px;
    color      : orange;
    float      : right;
    font-size  : 26px;
    margin-top : -2px;
    span{
        font-size: 36px;
    }
}
.Master_Hotel{
    min-width: 160px;
    height   : 22px;
    float    : left;
}
.hotel_details_add2{
        font-size  : 14px;
        line-height: 14px;
        min-width  : 400px;
        height     : 16px;
        float      : left;
        text-indent: 26px;
        span{
            color        : orange;
            text-indent  : 0;
            display      : block;
            float        : right;
            text-indent  : 10px;
            width        : 80px;
            height       : 16px;
            border-bottom: 2px solid orange;
        }
    }
.hotel_details_add{
    overflow: hidden;
    height  : 98px;
    width   : 100%;
    .hotel_details_add1{
        width      : 100%;
        height     : 62px;
        font-size  : 20px;
        line-height: 62px;
        text-indent: 27px;
        color      : #666;
        float      : left;
        span{
            display    : block;
            float      : left;
            margin-top : 22px;
            margin-left: 4px;
            width      : 27px;
            height     : 22px;
            background : url(../../images/VIP.png) no-repeat;
        }
    }
}
.hotel_detail_wrap{
    width     : 100%;
    overflow  : hidden;
    height    : 770px;
    box-shadow: 0 10px 10px #d4d4d4;
    .hotel_top{
        margin  : 0 auto;
        width   : 1200px;
        height  : 770px;
        overflow: hidden;
        .hotel_top_name{
            width      : 100%;
            height     : 38px;
            margin-top : 40px;
            font-size  : 38px;
            line-height: 38px;
            text-indent: 24px;
            color      : #333;
            font-weight: 600;
        }
    }
}
.footer{
    background-color: #0d0d0d;
    opacity         : 0.96;
}
</style>
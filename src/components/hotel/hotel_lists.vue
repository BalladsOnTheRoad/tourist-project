<template>
<div>
    <div class="header">
        <list-header></list-header>
    </div>

    <!-- 第一块 -->
    <div class="hotel_list_wrap">
    <div class="hotel_list1 hotel_list">
        <div class="hotel_list_tip">
            <div class="hotel_list_tip_left hotel_list_tip_x"></div>
            <div class="hotel_list_tip_name">
                厦门
            </div>
            <div class="hotel_list_tip_right hotel_list_tip_x"></div>
        </div>
        <div class="hotel_list_word">
            厦门适合无主题的城市徒步，用一种小资的情怀来邂逅一只猫狗。
        </div>
        <div class="hotel_list_bottom">
            <div class="hotel_list_bottom_left">
                <img src="../../images/q8.jpg" alt="">
            </div>
            <div class="hotel_list_bottom_right">
                <ul>
                    <li v-for="(listq,index) in listqs" :key="index">
                        <router-link :to="{path:'/hotel_details',query:{id:listq.id}}">
                        <div class="img_two">
                            <img :src="listq.image" alt="">
                            <div class="img_bottom">
                                <p>{{listq.name}}</p>
                                <div class="hotel_list_price"><span>￥{{listq.price}}</span>起</div>
                            </div>
                        </div></router-link>
                        <div class="hotel_list_buy">立即购买</div>

                    </li>
                   </ul>
            </div>
        </div>
    </div>
    </div>
    <!-- 第二块 -->
    <div class="hotel_list_wrap">
    <div class="hotel_list2 hotel_list">
        <div class="hotel_list_tip">
            <div class="hotel_list_tip_left hotel_list_tip_x"></div>
            <div class="hotel_list_tip_name">
                南京
            </div>
            <div class="hotel_list_tip_right hotel_list_tip_x"></div>
        </div>
        <div class="hotel_list_word">
            十里秦淮千古心，一座钟山风雨情
        </div>
        <div class="hotel_list_bottom">
            <div class="hotel_list_bottom_left">
                <img src="../../images/q11.jpg" alt="">
            </div>
            <div class="hotel_list_bottom_right">
                <ul>
                    <li v-for="(list,index) in lists" :key="index">
                        <router-link :to="{path:'/hotel_details',query:{id:list.id}}">
                        <div class="img_two">
                            <img :src="list.image" alt="">
                            <div class="img_bottom">
                                <p>{{list.name}}</p>
                                <div class="hotel_list_price"><span>￥{{list.price}}</span>起</div>
                            </div>
                        </div> </router-link>
                        <div class="hotel_list_buy">立即购买</div>

                    </li>
                </ul>
            </div>
        </div>

    </div>
    </div>

    <div class="footer">
        <list-footer></list-footer>
    </div>
</div>
</template>
<script>
import ListHeader from '../public/basicHeader';
import ListFooter from '../public/footer';
export default {
    components:{
        'list-header': ListHeader,
        'list-footer': ListFooter
    },
    data(){
        return {
            lists : '',
            listqs: ''
        }
    },
    methods:{
        getlist1(){
            this.axios({
                url   : `http://47.98.224.37:8080/api/v1/hotels/areas/388`,
                method: 'get'
            }).then(res=>{
                this.listqs = res.data.data.entity;
            })
        },
        getlist(){
            this.axios({
                url   : `http://47.98.224.37:8080/api/v1/hotels/areas/210`,
                method: 'get'
            }).then(res=>{
                this.lists = res.data.data.entity;
            })
        }
    },
    mounted(){
        this.getlist();
        this.getlist1();
    }
}
</script>
<style lang="scss">
.hotel_list_price{
    span{
        color      : orange;
        font-size  : 18px;
        margin-left: 10px;
    }
}
.hotel_list_bottom{
    width   : 1200px;
    height  : 620px;
    padding : 0 45px;
    overflow: hidden;
}
.hotel_list_bottom_right{
    width : 832px;
    height: 630px;
    float : right;
    li{
        list-style : none;
        float      : left;
        margin-left: 20px;
        margin-top : 6px;
        width      : 257px;
        height     : 308px;
        .hotel_list_buy{
            height       : 40px;
            width        : 110px;
            margin       : 0 auto;
            border-radius: 20px;
            background   : orange;
            color        : #fff;
            text-align   : center;
            line-height  : 40px;
            font-size    : 18px;
            margin-top   : 3px;
        }
        .img_two{
            width   : 257px;
            height  : 257px;
            position: relative;
            overflow: hidden;
            .img_bottom{
                width     : 257px;
                position  : absolute;
                height    : 55px;
                bottom    : -55px;
                left      : 0;
                background: rgba($color: #fff, $alpha: 0.7);
                p{
                    color      : #333;
                    width      : 100%;
                    height     : 24px;
                    line-height: 24px;
                    text-indent: 10px;
                }
            }
        }
        .img_two:hover .img_bottom{
            bottom: 0
        }
        img{
            display      : block;
            width        : 257px;
            height       : 257px;
            margin-bottom: 5px;
        }
    }
}
.hotel_list_bottom_left{
    margin-top  : 6px;
    float       : left;
    width       : 230px;
    height      : 610px;
    margin-right: 20px;
    img{
        display: block;
        width  : 230px;
        height : 610px;
    }
}
.hotel_list_word{
    width      : 100%;
    height     : 88px;
    text-align : center;
    line-height: 88px;
    font-size  : 20px;
}
.hotel_list_wrap{
width     : 100%;
height    : 820px;
background: url(../../images/bg_hotel.png);
overflow  : hidden;
margin-top: 20px;
}
.hotel_list{
    width : 1200px;
    height: 820px;
    margin: 0 auto;
    .hotel_list_tip{
        width   : 100%;
        height  : 48px;
        overflow: hidden;
        .hotel_list_tip_x{
            width     : 410px;
            height    : 2px;
            background: #6c6869;
            margin-top: 25px;
        }
        .hotel_list_tip_left{
            float      : left;
            margin-left: 90px;
        }
        .hotel_list_tip_right{
            float       : right;
            margin-right: 90px;
        }
    }

    .hotel_list_tip_name{
        float         : left;
        width         : 140px;
        height        : 46px;
        line-height   : 46px;
        margin        : 0 auto;
        font-size     : 45px;
        letter-spacing: 12px;
        margin-left   : 30px;
    }
}
.footer{
    background-color: #0d0d0d;
    opacity         : 0.96;
}
</style>

<template>
    <li class="hot_des_li">
        <div class="list_box">
            
            <div class="list_top">
                <div class="list_order">
                    <p>TOP<span>{{order}}</span></p>
                </div>
                <div class="list_img_box">
                    <img src="../../images/desList01.jpg" alt="热门目的地一">
                </div>
                <div class="list_polutation">
                    <p>{{hot_area_item.perNum}} 人去过</p>
                </div>
            </div>
            

            <div class="list_bottom">
                <div class="lb_title">
                    <div class="lb_title_left">
                        <p>
                            <router-link to="/">{{hot_area_item.name}}</router-link>
                        </p>
                    </div>
                    <div class="lb_title_right">
                        <div class="tr_list">
                            <router-link to="/">攻略</router-link>
                        </div>
                        <div class="tr_list" style="margin-left:14px;">
                            <router-link to="/">游记</router-link>
                        </div>
                    </div>
                </div>
                <div class="lb_content">
                    <ul class="lc_list">
                        <li>
                            <router-link to="/">
                                住宿 <span>{{hot_area_item.htnum}}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                景点 <span>{{hot_area_item.ssnum}}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                美食 <span>{{hot_area_item.fdnum}}</span>
                            </router-link>
                        </li>
                        <li style="border:0; padding-right:0;">
                            <router-link to="/">
                                购物 <span>{{hot_area_item.spnum}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    props: ['order','hot_area_item'],
    data(){
        return{
        }
    },
    mounted(){
    }
    
}
</script>
<style lang="scss" scoped>
    .hot_des_li{
        float           : left;
        width           : 386px;
        height          : 400px;
        background-color: #ff9d00;
        border-radius   : 5px;
        overflow        : hidden;
        margin-right    : 21px;
        margin-bottom   : 61px;
    }
    .list_top{
        position: relative;
    }
    .list_img_box{
        height: 264px;
        img{
            width  : 100%;
            height : 264px;
            display: block;
        }
    }
    .list_order{
        width           : 60px;
        height          : 55px;
        background-color: #ff9d00;
        border-radius   : 0px 0px 5px 5px;
        position        : absolute;
        left            : 14px;
        top             : 0;
        padding-top     : 14px;
        p{
            font-family : MicrosoftYaHei-Bold;
            font-size   : 18px;
            font-weight : normal;
            font-stretch: normal;
            color       : #ffffff;
            text-align  : center;
        }
    }
    .list_polutation{
        position    : absolute;
        left        : 0;
        bottom      : 5px;
        padding-left: 15px;
        p{
            font-size   : 18px;
            font-weight : normal;
            font-stretch: normal;
            color       : #ffffff;
        }
    }

    /* 列表内容底部  */
    .list_bottom{
        padding: 0 20px;
    }
    .lb_title{
        padding      : 18px 0 21px;
        border-bottom: 1px solid #ffffff;
        overflow     : hidden;
    }
    .lb_title_left{
        float: left;
        p{
            height    : 24px;
            margin-top: -8px;
            a{
                color      : #ffffff;
                font-family: MicrosoftYaHei;
                font-size  : 24px;
                &:hover{
                    color: #ed4014;
                }
            }
            span{
                height        : 19px;
                font-size     : 18px;
                line-height   : 36px;
                letter-spacing: 0px;
                color         : #cfcfcf;
                vertical-align: top;
                margin        : 0 7px;
            }
        }
    }
    .lb_title_right{
        float: right;
        .tr_list{
            float: left;
            a{
                display         : block;
                width           : 50px;
                height          : 24px;
                background-color: #fdfbfd;
                border-radius   : 5px;
                line-height     : 24px;
                font-size       : 14px;
                color           : #ff9d00;
                text-align      : center;
                &:hover{
                    background-color: #2db7f5;
                    color           : #ffffff;
                }
            }
        }
    }


    .lb_content{
        margin-top: 26px;
    }
    .lc_list{
        overflow    : hidden;
        padding-left: 10px;
        li{
            float        : left;
            height       : 15px;
            border-right : 2px solid #f0f0f0;
            margin-right : 13px;
            padding-right: 13px;
            a{
                font-size  : 14px;
                color      : #f0f0f0;
                line-height: 15px;
                height     : 15px;
                &:hover{
                    color: #ed4014;
                }
            }
        }
    }
</style>
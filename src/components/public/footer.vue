<template>
    <div style="width:1200px; margin:0 auto;">
        <div class="footer_top">
            <div class="ft_wapper">
                <div class="footer_logo">
                    <h2>
                        <router-link to="/" title="小猪旅行"></router-link>
                    </h2>
                </div>
                <div class="footer_title">
                    <h2>
                        带上您灵动的心灵让我们为您保驾护航，就酱紫去旅行吧。
                    </h2>
                    <p>
                        E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3
                    </p>
                </div>
            </div>
        </div>

        <div class="footer_center">
            <div class="fc_wrapper">
                <div class="fc_left">
                    <div class="footer_desList footer_navList">
                        <ul class="desList">
                            <h3>
                                <router-link to="/">目的地</router-link>
                            </h3>
                            <li>
                                <router-link to="/">景点</router-link>
                            </li>
                            <li>
                                <router-link to="/">美食</router-link>
                            </li>
                            <li>
                                <router-link to="/">购物</router-link>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="footer_strList footer_navList">
                        <ul class="strList">
                            <h3>
                                <router-link to="/">攻略</router-link>
                            </h3>
                            <li>
                                <router-link to="/">热门攻略</router-link>
                            </li>
                            <li>
                                <router-link to="/">出门推荐</router-link>
                            </li>
                            <li>
                                <router-link to="/">周边热门</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_traList footer_navList">
                        <ul class="traList">
                            <h3>
                                <router-link to="/">游记</router-link>
                            </h3>
                            <li>
                                <router-link to="/">路线</router-link>
                            </li>
                            <li>
                                <router-link to="/">地图</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_accList footer_navList">
                        <ul class="accList">
                            <h3>
                                <router-link to="/">住宿</router-link>
                            </h3>
                            <li>
                                <router-link to="/">酒店</router-link>
                            </li>
                            <li>
                                <router-link to="/">民宿</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fc_right">
                    
                </div>
            </div>
        </div>

        <div class="footer_bottom">
            <div class="fb_wrapper">
                <h4 class="footer_copyright">© 2019 MAFENGWO.CN 京ICP备11015476号 京公网安备11010502013401号 京ICP证110318号</h4>
                <p class="copyright_con">产品最终解释权归酱游公司所有</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    /*底部logo标题部分   footer_top*/
    .footer_top{
        overflow: hidden;
    }
    .footer_logo{
        float       : left;
        margin-right: 43px;
        margin-top  : 52px;
        h2{
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
    .footer_title{
        float     : left;
        margin-top: 82px;
        h2{
            font-size   : 24px;
            color       : #ffffff;
            font-weight : normal;
            font-stretch: normal;
        }
        p{
            font-size   : 24px;
            color       : #ffffff;
            font-weight : normal;
            font-stretch: normal;
        }
    }

    /*底部导航栏部分*/
    .footer_center{
    }
    .fc_left{
        padding-top : 40px;
        padding-left: 100px;
        overflow    : hidden;
    }
    .footer_navList{
        float: left;
        width: 186px;
        h3{
            font-size: 30px;
            a{
                color: #e3e3e3;
                &:hover{
                    color: #ff9d00;
                }
            }
        }
        li{
            list-style : none;
            height     : 66px;
            line-height: 66px;
            a{
                font-size: 24px;
                color    : #e3e3e3;
                &:hover{
                    color: #ff9d00;
                }
            }
        }
    }

    /*首页底部版权样式*/
    .footer_bottom{
        padding-top: 50px;
        .fb_wrapper{
            width : 850px;
            margin: 0 auto;
        }
        .footer_copyright{
            font-family   : MicrosoftYaHei;
            font-size     : 18px;
            font-weight   : normal;
            font-stretch  : normal;
            line-height   : 36px;
            letter-spacing: 0px;
            color         : #e3e3e3;
            text-align    : center;

        }
        .copyright_con{
            text-align    : center;
            font-family   : MicrosoftYaHei;
            font-size     : 18px;
            font-weight   : normal;
            font-stretch  : normal;
            line-height   : 36px;
            letter-spacing: 0px;
            color         : #e3e3e3;
        }
    }
</style>
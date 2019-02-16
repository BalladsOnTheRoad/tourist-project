<style lang="scss">
         *{
            margin    : 0;
            padding   : 0;
            list-style: none;
            }


         .content{
            width : 1200px;
            margin: 0 auto;
            }
        //热门游记
          .remen-youji ul li a{
              color: #ff9d00
          }
         .remen-youji h1{
             text-align: center;
         }
         .remen-youji{
             span{
                 display     : inline-block;
                 width       : 100%;
                 text-align  : center;
                 font-size   : 14px;
                 font-weight : normal;
                 font-stretch: normal;
                 color       : #ff9d00;
             }
             h2{
                 text-align: center;
             }
         }

         .DaLi{
             width      : 300px;
             margin-left: 0px;
         }

         .Pairs{
             width: 560px;
         }

         .pujidao{
             width: 300px;
         }

         .remen-youji .watch_more{
             text-align: center;
             width     : 1200px;
             height    : 300px;
             background: url('../../images/watchmore.png') no-repeat;
             margin-top: 55px;
             a{
                 color: #ffffff;
                 &:hover{
                     color: #409eff;
                 }
             }
         }
         //官网
         .guan-wang li{
             padding: 60px 50px;
         }
         .guan-wang  a{
             color: #ff9d00;
         }

        .guan-wang h1{
            font-size: 46px;
        }
        .guan-wang p{
            height     : 60px;
            width      : 490px;
            padding-top: 30px
        }
        .ivu-card-head{
            display: none;
        }
        
        .ivu-card-body{
            padding: 0px;
        }
        .daren h1{
            font-size: 33px;
        }
        .daren h2{
            line-height: 70px;
            font-size  : 35px;
            background : #ff9d00;
            color      : white
        }
        
        .footer{
            margin-top      : 62px;
            background-color: #0d0d0d;
            opacity         : 0.96;
        }
        

        
</style>



<template>
   <div>
       <div>
           <travel-header></travel-header>
       </div>

       <div class="content">

        <div class="remen-youji">
            <h1 style="line-height:156px">热门游记</h1>
            <ul style="display:flex;justify-content: space-between;width：1200px">
                <li class="DaLi">
                    <router-link to="/">
                        <img src="@/wKgB6lSoP1GAMiArAB3lLGJg43o03.png" alt="">
                        <span>东经99°北纬25°</span>
                        <h2>大理</h2>
                    </router-link>
                </li>
                <li class="Pairs" >
                    <router-link to="/">
                        <img src="@/wKgB6lSXmh2AHszjAAeY4299Bu4731.png" alt="">
                        <span>邂逅浪漫之都</span>
                        <h2>巴黎</h2>
                    </router-link>
                </li>
                <li class="pujidao">
                    <router-link to="/">
                        <img src="@/ccc.png" alt="">
                        <span>花开在眼前</span>
                        <h2>普吉岛</h2>
                    </router-link>
                </li>
            </ul>
             <ul style="display:flex;justify-content: space-between;width：1200px">
                <li class="daban" style="width:484px;text-align:left;margin-top:59px">
                    <router-link to="/">
                        <img src="@/wKgBpVWk2zWAGpvhAAB42k3l3l402.png" alt="">
                        <span>找一个舒服的床，躺三天</span>
                        <h2>大阪</h2>
                    </router-link>
                </li>
                <li class="aodaliya" style="width:662px;text-align:right;margin-left:44px;margin-top:59px">
                    <router-link to="/">
                        <img src="@/wKgBpVUvV1yAeTWcAAkb0LcA-YE475.png" alt="">
                        <span>人间四月天，我穿比基尼</span>
                        <h2>澳洲·黄金海岸</h2>
                    </router-link>
                </li>
            </ul>
            <div class="watch_more">
                    <h1 style="color:white;line-height:300px">
                        <router-link to="travel">
                        查看更多热门游记>>>

                        </router-link>
                        </h1>
            </div>
        </div>

        <div class="guan-wang">
            <h1 style="line-height:150px;text-align:center;font-size:36px">官方</h1>
            <div style="display:flex;justify-content: space-between;">
                <router-link to="/">
                <Card style="width:590px;height:345px;padding:50px">
                    <div style="text-align:left;width:490px">
                        <h1>大阪</h1>
                        <p>大阪既有琳琅满目的世界品牌店又拥有个性平民的小铺，让来自世界各地的购物者心驰神往。在大阪风华万千的夜生活里，或登上瞭望台一览京阪神的繁华，或漫步美食街探寻古老风貌的小吃店将“天下厨房”的美食一网打尽。
                        </p>
                    </div>
                </Card>
                </router-link>
                <router-link to="/">
                    <div style="width:590px;height:345px;overflow:hidden">
                        <img src="@/wKgBpVUvV1yAeTWcAAkb0LcA-YE475.png" alt="" style="height:345px;">
                    </div>
                </router-link>
            </div>

             <div style="display:flex;justify-content: space-between;margin-top:5px;">
                <router-link to="/">
                    <div style="width:590px;height:345px;overflow:hidden">
                        <img src="@/wKgBpVUvV1yAeTWcAAkb0LcA-YE475.png" alt="" style="height:345px;">
                    </div>
                </router-link>
                <router-link to="/">
                <Card style="width:590px;height:345px;padding:50px">
                    <div style="text-align:left;width:490px">
                        <h1>大阪</h1>
                        <p>大阪既有琳琅满目的世界品牌店又拥有个性平民的小铺，让来自世界各地的购物者心驰神往。在大阪风华万千的夜生活里，或登上瞭望台一览京阪神的繁华，或漫步美食街探寻古老风貌的小吃店将“天下厨房”的美食一网打尽。
                        </p>
                    </div>
                </Card>
                </router-link>
            </div>
        </div>
        <div class="daren" style="line-height:142px;text-align:center">
            <h1>达人</h1>
            <div style="display:flex;justify-content: space-between;">
                   <Card style="width:384px;height:400px;padding:0px">
                        <router-link to="/">
                            <div style="width:382px;height:337px">
                                <img style="display:block" src="@/pexels-photo-415829.png" alt="">
                            </div>
                            <h2> 大大大美女</h2>
                        </router-link>
                </Card>
                <Card style="width:384px;height:400px;padding:0px">
                    <router-link to="/">
                        <div style="width:382px;height:337px">
                            <img style="display:block" src="@/pexels-photo-415829.png" alt="">
                        </div>
                        <h2> 大大大美女</h2>
                    </router-link>
                </Card>
                <Card style="width:384px;height:400px;padding:0px">
                    <router-link to="/">
                        <div style="width:382px;height:337px">
                            <img style="display:block" src="@/pexels-photo-415829.png" alt="">
                        </div>
                        <h2> 大大大美女</h2>
                    </router-link>
                </Card>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <travel-footer></travel-footer>
    </div>
   </div>
</template>

<script>
import TravelHeader from '../public/basicHeader';
import TravelFooter from '../public/footer';
export default {
    components:{
        'travel-header': TravelHeader,
        'travel-footer': TravelFooter
    }
};
</script>
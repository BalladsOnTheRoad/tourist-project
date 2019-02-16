<style lang="scss" scoped>
  *{
    margin    : 0;
    padding   : 0;
    list-style: none;
  }
  .content{
    width : 1200px;
    margin: 0 auto;
  }
  // tab
  #city{
    font-size  : 36px;
    line-height: 25px;
    color      : #333333;
    text-align : center;
    margin-top : 60px;
  }
  /deep/ .nav-text{
    font-size  : 24px;
    color      : #333333;
    line-height: 25px;
    margin-top : 30px;
  }
  /deep/ .ivu-tabs-nav-scroll{
    display        : flex;
    justify-content: center;
    align-items    : center;
  }
  /deep/ .ivu-tabs-bar{
    border: none;
  }
  /deep/ .ivu-tabs-tab-active,.ivu-tabs-tab-focused{
    color: #ff9d00;
  }
  /deep/ .ivu-tabs-ink-bar-animated{
    background-color: #ff9d00;
  }
  // 首页
  .module1{
    width : 1200px;
    height: 356px;
  }
  .homePage{
	font-size : 36px;
	color     : #333333;
	margin-top: 60px;
  }
  .pic{
    width       : 350px;
    height      : 200px;
    margin-top  : 60px;
    margin-right: 60px;
    float       : left;
    position    : relative;
  }
  .triangle{
    width        : 0;
    height       : 0;
    border-bottom: 46px solid #ff9d00;
    border-left  : 46px solid transparent;
    position     : absolute;
    right        : 0;
    bottom       : 0;
  }
  .pic img{
    width : 100%;
    height: 100%;
  }
  .top{
    position        : absolute;
    width           : 40px;
    height          : 25px;
    background-color: #ff9d00;
    font-size       : 14px;
    color           : #ffffff;
  }
  .introduce{
    margin-top: 60px;
    float     : right;
    background: url('../../../images/bg1.png') no-repeat center;
    width     : 790px;
    height    : 200px;
  }
  .scenicSpot{
    font-size  : 36px;
    line-height: 27px;
    color      : #ff9d00;
    text-align : center;
    margin-top : 40px;
  }
  .scenicSpotDetail{
    font-size         : 24px;
    line-height       : 36px;
    color             : #333333;
    margin-top        : 42px;
    width             : 526px;
    margin            : 42px auto 0 auto;
    word-break        : break-all;
    text-overflow     : ellipsis;
    display           : -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow          : hidden;
  }

  // 景点
  .mustPlay{
    margin-left: 30px;
    font-size  : 36px;
    color      : #333333;
    margin-top : 60px;
  }
  .module2{
    width     : 1200px;
    height    : 556px;
    margin-top: 60px;
  }
  .title{
    width : 540px;
    height: 40px;
  }
  .topStyle{
    width      : 30px;
    height     : 40px;
    background : url('../../../images/top.png');
    font-size  : 18px;
    color      : #ffffff;
    text-align : center;
    line-height: 30px;
    float      : left;
  }
  .module2Left{
    float  : left;
    width  : 600px;
    height : 500px;
    padding: 30px;
  }
  .topDest{
    font-size  : 36px;
    color      : #ff9d00;
    line-height: 36px;
    float      : right;
  }
  .synopsis{
    font-size         : 30px;
    color             : #333333;
    margin-top        : 60px;
    line-height       : 36px;
    word-break        : break-all;
    text-overflow     : ellipsis;
    display           : -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow          : hidden;
  }
  .particulars{
    margin-top : 30px;
    font-size  : 24px;
    color      : #333333;
    line-height: 36px;
  }
  .particulars p{
    color: #ff9d00;
  }
  .module2Right{
    width       : 400px;
    height      : 400px;
    float       : right;
    margin-right: 30px;
    margin-top  : 30px;
  }
  .module2Right img{
    width : 100%;
    height: 100%;
  }
  // 购物
  .shopTitle{
    margin-left: 30px;
    font-size  : 36px;
    color      : #333333;
    margin-top : 60px;
  }
  .illustration{
    width     : 1200px;
    height    : 385px;
    margin-top: 60px;
    position  : relative;
  }
  .illustration .bigImg{
    width          : 1200px;
    height         : 280px;
    background     : url('../../../images/time.png') no-repeat;
    background-size: 100% 100%;
  }
  .shopIntroduce{
    width           : 800px;
    background-color: #000000;
    opacity         : 0.8;
    padding         : 30px;
    font-size       : 24px;
    line-height     : 36px;
    color           : #ffffff;
    position        : absolute;
    bottom          : 0;
    left            : 200px;
  }
  // 购物地点列表
  .site{
    width     : 1200px;
    height    : 410px;
    margin-top: 100px;
  }
  .site .left{
    float   : left;
    width   : 570px;
    height  : 410px;
    position: relative;
  }
  .site .bigImg{
    width          : 570px;
    height         : 345px;
    background-size: 100% 100%;
  }
  .site .bigImg img{
    width : 570px;
    height: 345px;
  }
  .site .smallImg{
    width          : 244px;
    height         : 152px;
    border         : solid 5px #ffffff;
    background-size: 100% 100%;
    position       : absolute;
    bottom         : 0;
    right          : 20px;
  }
  .site .smallImg img{
    width : 244px;
    height: 152px;
  }
  .site .right{
    width  : 630px;
    height : 410px;
    padding: 30px;
    float  : right;
  }
  .siteName{
    font-size  : 36px;
    line-height: 36px;
    color      : #333333;
    text-align : center;
    margin-top : 25px;
  }
  .siteDetail{
    font-size         : 24px;
    line-height       : 36px;
    color             : #333333;
    margin-top        : 40px;
    word-break        : break-all;
    text-overflow     : ellipsis;
    display           : -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow          : hidden;
  }
  .more{
    width      : 160px;
    height     : 80px;
    border     : solid 1px #ff9d00;
    font-size  : 30px;
    line-height: 80px;
    color      : #ff9d00;
    margin     : 60px auto 0 auto;
    text-align : center;
  }
  // 线路
  .pathTitle{
    font-size  : 36px;
    line-height: 25px;
    color      : #333333;
  }
  .pathSite,.brightSpot{
    font-size  : 24px;
    line-height: 25px;
    color      : #333333;
    margin-top : 30px;
  }
  .imglist{
    width          : 100%;
    height         : 148px;
    margin-top     : 50px;
    display        : flex;
    justify-content: space-between;
  }
  .imglist img{
    display      : block;
    width        : 294px;
    height       : 148px;
    float        : left;
    border-radius: 5px;
  }
  .detailPath{
    width           : 254px;
    height          : 66px;
    background-color: #ff9d00;
    border-radius   : 10px;
    font-size       : 24px;
    color           : #ffffff;
    margin          : 30px auto 0 auto;
    text-align      : center;
    line-height     : 66px;
    cursor          : pointer;
  }
  .footer{
    background-color: #0d0d0d;
    opacity         : 0.96;
  }
  /deep/ .ivu-tabs-tabpane{
    // height    : 1450px;
    // background: black;
    // overflow  : auto;
  }
</style>

<template>

  <div>
    <div>
      <dest-city-header></dest-city-header>
    </div>
    <div class="content">
      <div id="city"> {{ cityInfo }} </div>
      <Tabs active-key="key1">
        <!-- 首页 -->
        <Tab-pane label="首页" key="key1" class="tab">
          <div class="module1" >
            <div class="homePage">必游景点排行榜</div>
            <div>
              <div class="pic">
                <div class="top">TOP1</div>
                <div class="triangle"></div>
                <img v-bind:src="  viewInfo1.image  " alt="">
              </div>
              <div class="introduce">
              <div class="scenicSpot">{{viewInfo1.name}}</div>
              <router-link to="#">
                <div class="scenicSpotDetail">{{viewInfo1.describe}}</div>
              </router-link>
            </div>
          </div>
          </div>
          <div class="module1">
            <div class="homePage">不可错过的美食</div>
            <div>
              <div class="pic">
                <div class="top">TOP1</div>
                <div class="triangle"></div>
                <img v-bind:src="foodInfo1.image" alt="">
              </div>
              <div class="introduce">
                <div class="scenicSpot"> {{ foodInfo1.name }} </div>
                <div class="scenicSpotDetail"> {{ foodInfo1.content }}
                </div>
            </div>
            </div>
          </div>
          <div class="module1">
            <div class="homePage">购物天堂</div>
            <div>
              <div class="pic">
                <div class="top">TOP1</div>
                <div class="triangle"></div>
                <img v-bind:src="shopInfo1.image" alt="">
              </div>
              <div class="introduce">
              <div class="scenicSpot"> {{ shopInfo1.name }} </div>
              <div class="scenicSpotDetail">  {{ shopInfo1.describe }} </div>
            </div>
            </div>
          </div>
        </Tab-pane>
        <!-- 景点 -->
        <Tab-pane label="景点" key="key2" class="tab">
          <div class="mustPlay">必游景点TOP5</div>
          <div class="module2" v-for="(view_item, index) in view" :key="index">
              <div>
                <div class="module2Left">
                  <div class="title">
                    <div class="topStyle">{{index+1}}</div>
                    <div class="topDest">{{view_item.name}}</div>
                  </div>
                  <div class="synopsis">{{view_item.describe}}</div>
                </div>
              </div>
              <div class="module2Right">
                <img v-bind:src="view_item.image" alt="">
              </div>
          </div>
        </Tab-pane>
        <!-- 美食 -->
        <Tab-pane label="美食" key="key3" class="tab">
          <div class="mustPlay">不可错过的杭州美食</div>
          <div class="module2" v-for="(food_item, index) in food" :key="index">
            <div>
              <div class="module2Left">
                <div class="title">
                  <div class="topStyle">{{index+1}}</div>
                  <div class="topDest"> {{ food_item.name }} </div>
                </div>
                <div class="synopsis"> {{ food_item.content }} </div>
              </div>
            </div>
              <div class="module2Right">
                <img v-bind:src="food_item.image" alt="">
              </div>
          </div>
        </Tab-pane>
        <!-- 购物 -->
        <Tab-pane label="购物" key="key4" class="tab">
          <div class="shopTitle">特色街区</div>
          <div class="illustration">
            <div class="bigImg"></div>
            <div class="shopIntroduce">
              人生最美的是莫过于一场说走就走的旅行和一场奋不顾身的爱情以及带着愉悦的心情逛街，在杭州，最具吸引力的是逛特色街。这些特色街或是有些底蕴，或是景佳，又或是集中了一类特色商品。在这里，你可以放下一切去闲逛。
            </div>
          </div>
          <div class="site" v-for="(street_item, index) in street" :key="index">
            <div class="left">
              <div class="bigImg"><img  v-bind:src=" street_item.image  " alt=""></div>
              <div class="smallImg"><img  v-bind:src=" street_item.image  " alt=""></div>
            </div>
            <div class="right">
              <div class="siteName">{{street_item.name}}</div>
              <div class="siteDetail">
                {{street_item.describe}}
              </div>
            </div>
          </div>
          <div class="more">查看更多</div>
          <div class="shopTitle">百货商场</div>
          <div class="site" v-for="(market_item, index) in market" :key="index">
            <div class="left">
              <div class="bigImg"><img  v-bind:src=" market_item.image  " alt=""></div>
              <div class="smallImg"><img  v-bind:src="  market_item.image  " alt=""></div>
            </div>
            <div class="right">
              <div class="siteName"> {{ market_item.name }} </div>
              <div class="siteDetail">
                {{ market_item.describe }}
              </div>
            </div>
          </div>
          <div class="more">查看更多</div>
        </Tab-pane>
      </Tabs>
    </div>
    <div class="footer">
      <dest-city-footer></dest-city-footer>
    </div>
  </div>

</template>
<script>
import DestCityHeader from '../../public/basicHeader';
import DestCityFooter from '../../public/footer';

export default {
  components:{
    'dest-city-header': DestCityHeader,
    'dest-city-footer': DestCityFooter
  },
  data(){
    return {
      parentId  : this.$route.params.parentId,
      id        : this.$route.params.id,
      cityInfo  : {},
      viewInfo1 : {},
      foodInfo1 : {},
      shopInfo1 : {},
      travelInfo: {},
      view      : null,
      food      : null,
      street    : null,
      market    : null
    }
  },
  created(){
    this.getCityInfo();
    this.getViewPoint();
    this.getFoodInfo();
    this.getShopInfo();
    this.getTravelInfo();
  },
  methods:{
    getCityInfo(){
      let _this = this;
      this.$http.get('http://47.98.224.37:8080/api/v1/areas/1?parentId='+this.parentId).then(result =>{
        if(result.data.status == '200'){
           _this.cityInfo = result.data.data[0].name
        }
      })
    },
    getViewPoint(){
      let _this = this;
      this.$http.get('http://47.98.224.37:8080/api/v1/scenicspot/areas/'+this.id).then(result =>{
        if(result.data.status == '200'){
          this.view      = result.data.data.entity;
          this.viewInfo1 = result.data.data.entity[0];
        }
      })
    },
    getFoodInfo(){
      let _this = this;
      this.$http.get('http://47.98.224.37:8080/api/v1/foods/areas/'+this.id).then(result =>{
        if(result.data.status == '200'){
          this.food      = result.data.data.entity;
          this.foodInfo1 = result.data.data.entity[0];
        }
      })
    },
    getShopInfo(){
      let _this = this;
      this.$http.get('http://47.98.224.37:8080/api/v1/shops/areas/'+this.id).then(result =>{
        if(result.data.status == '200'){
          this.street    = result.data.data.entity[0].shop;
          this.market    = result.data.data.entity[1].shop;
          this.shopInfo1 = result.data.data.entity[0].shop[0];
        }
      })
    },
    getTravelInfo(){
      let _this = this;
      this.$http.get('http://47.98.224.37:8080/api/v1/travels/areas/'+this.id).then(result =>{
        if(result.data.status == '200'){
           _this.travelInfo = result.data.data.entity[0]
        }
      })
    }
  }
}
</script>

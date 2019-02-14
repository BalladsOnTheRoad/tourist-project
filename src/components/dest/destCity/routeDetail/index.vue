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
  .model{
    margin-top: 60px;
  }
  // 天数
  .day{
    width           : 77px;
    height          : 77px;
    background-color: #ff9d00;
    border-radius   : 5px;
    margin          : 0 auto;
    padding         : 10px;
  }
  .Day{
    font-size: 18px;
    color    : #fff;
  }
  .number{
    font-size: 36px;
    color    : #fff;
  }
  // 目的地介绍
  .destIntr{
    width     : 1200px;
    margin-top: 60px;
  }
  .destIntr .title{
    font-size: 24px;
    color    : #333333;
  }
  .destIntr .content{
    width     : 1200px;
    margin-top: 36px;
    overflow  : hidden;
  }
  .destIntr .left{
    width          : 240px;
    display        : flex;
    justify-content: space-between;
    flex-direction : column;
    float          : left;
  }
  .destIntr img{
    width        : 240px;
    height       : 130px;
    margin-bottom: 8px;
  }
  .destIntr .right{
    width      : 900px;
    height     : 414px;
    float      : right;
    font-size  : 14px;
    color      : #333333;
    line-height: 30px;
  }
  // 路线详情
  .routeDetail{
    width     : 1200px;
    margin-top: 80px;
  }
  .routeDetail .title{
    font-size: 24px;
    color    : #333333;
  }
  .example{
    height         : 130px;
    margin         : 0 auto;
    display        : flex;
    flex-direction : row;
    justify-content: center;
    align-items    : center;
    margin-top     : 40px;
  }
  .date{
    height      : 130px;
    margin-top  : 40px;
    margin-right: 40px;
  }
  .date p{
    font-size  : 24px;
    line-height: 30px;
    color      : #333333;
    margin-left: -10px;
    margin-top : 10px;
  }
  .lead{
    width      : 30px;
    height     : 4px;
    color      : #ff9d00;
    margin-top : 45px;
    margin-left: -30px;
  }
  // 交通路线
  .trafficRoute{
    margin-top: 60px;
    width     : 1200px;
  }
  .trafficRoute .title{
    font-size: 24px;
    color    : #333333;
  }
  .trafficRoute .detail{
    font-size  : 24px;
    color      : #333333;
    line-height: 30px;
    margin-top : 40px;
  }
  // 查看详细地图
  .check{
    margin          : 116px auto;
    width           : 816px;
    height          : 118px;
    background-color: #ff9d00;
    border-radius   : 10px;
    font-size       : 36px;
    line-height     : 30px;
    color           : #ffffff;
    text-align      : center;
    line-height     : 118px;
  }
</style>

<template>
  <div class="content">
    <div class="model">
      <div class="day">
        <span class="Day">Day</span>
        <span class="number">1</span>
      </div>
      <div class="destIntr">
        <div class="title">目的地介绍：</div>
        <div class="content">
          <div class="left">
            <!-- <img src="../../../../../img/1.jpg" alt=""> -->
            <!-- <img src="../../../../../img/1.jpg" alt=""> -->
            <!-- <img src="../../../../../img/1.jpg" alt=""> -->
          </div>
          <div class="right">
            西湖，位于浙江省杭州市西面，是中国大陆首批国家重点风景名胜区和中国十大风景名胜之一。它是中国大陆主要的观赏性淡水湖也是现今《世界遗产名录》中少数几个和中国唯一一个湖泊类文化遗产。湖中被孤山、白堤、苏堤、杨公堤分隔，按面积大小分别为外西湖、西里湖、北里湖、小南湖及岳湖等五片水面，苏堤、白堤越过湖面，小瀛洲、湖心亭、阮公墩三个小岛鼎立于外西湖湖心，夕照山的雷峰塔与宝石山的保俶塔隔湖相映，由此形成了“一山、二塔、三岛、三堤、五湖”的基本格局。
            西湖音乐喷泉位于湖滨三公园附近湖面上，长126米的“音乐喷泉”向人们展露迷人风姿。 2016年5月1日晚间，西湖音乐喷泉经过大半年的整改，重新开放。
            坊街位于吴山脚下，是清河坊的一部分，属于杭州老城区，东起江城路，向西越南北向得建国南路、中河中路、中山中路、华光路、劳动路至南山路，路长1800多米，吴山广场至中山中路段为步行街，青石板路面，路宽13米，其余路宽32米。旧时，与中山中路相交得“清河坊四拐角”，自民国以来，分别为孔凤春香粉店、宓大昌旱烟、万隆火腿店、张允升帽庄四家各踞一角，成为当时远近闻名的区片。杭城闻名的“五杭”（杭粉、杭剪、杭扇、杭烟、杭线）就出与此。 这里特色小吃、 古玩字画、商铺云集。老字号、杭州特色各类店铺约有一百余家。
          </div>
        </div>
      </div>
      <div class="routeDetail">
        <div class="title">路线详情：</div>
        <div class="example">
          <div class="date">
            <div class="img"><img src="../../../../images/person.png" alt=""></div>
            <p>启程</p>
          </div>
          <div class="lead">→</div>
          <div class="date">
            <div class="img"><img src="../../../../images/person.png" alt=""></div>
            <p>断桥</p>
          </div>
          <div class="lead">→</div>
          <div class="date">
            <div class="img"><img src="../../../../images/person.png" alt=""></div>
            <p>白堤</p>
          </div>
        </div>
      </div>
      <div class="trafficRoute">
        <div class="title">交通路线：</div>
        <div class="detail">
          杭州的交通有多种选择，距离近的景点选择步行、骑自行车，距离远的景点可以打车或者乘坐公交车。环湖游览，多数选择骑自行车或者乘观光车（10元/站，40元/全程，招手即停）游览比较省力
        </div>
      </div>
      <router-link  to="./scenic/"> <div class="check">查看详细地图>>></div> </router-link>
    </div>
  </div>
</template>


<script>
export default {

};
</script>
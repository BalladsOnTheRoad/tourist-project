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
  // 导航
  .hotDest{
    text-align   : center;
    font-size    : 36px;
    color        : #333333;
    line-height  : 25px;
    margin-bottom: 58px;
  }
  /deep/ .ivu-tabs-nav-scroll{
    display        : flex;
    justify-content: center;
    align-items    : center;
  }
  /deep/ .ivu-tabs-bar{
    border: none;
  }
  /deep/ .ivu-tabs-tab-active{
    color: #ff9d00;
  }
  /deep/ .ivu-tabs-tab-focused{
    color: #ff9d00;
  }
  /deep/ .ivu-tabs-ink-bar-animated{
    background-color: #ff9d00;
  }
  /deep/ .ivu-tabs-tab {
    font-size  : 24px;
    line-height: 25px;
    }
  // 二级菜单
  .tabSon{
    font-size: 20px;
    color    : #333333;
    width    : 500px ;
    // border-bottom: dashed 1px #666666;
    float: left;
  }
  .hotTab{
    flex-wrap: wrap;
    width    : 100%;
  }
  .tabSonTitle{
    font-size: 20px;
    color    : #333333;
  }
  .tabSonTitle ul{
    float: left;
  }
  .tabSon{
    margin-top: 32px;
  }
  .tabSon li{
    float       : left;
    margin-right: 30px;
  }
  .tabSon a{
    font-size: 18px;
    color    : #333333;
  }
  .hotCity{
    float: right;
  }
  // 查看全部国家
  /* .allCountry{
    width      : 220px;
    height     : 80px;
    font-size  : 30px;
    color      : #ff9d00;
    margin     : 30px auto;
    border     : dashed 1px #ff9d00;
    text-align : center;
    line-height: 80px;
    cursor     : pointer;
  } */
  // 城市推荐
  .recommendCity{
    font-size  : 36px;
    font-weight: normal;
    color      : #333333;
    margin     : 60px auto;
    text-align : center;
  }
  .recommendCityList{
    width  : 230px;
    height : 340px;
    border : solid 1px #666666;
    float  : left;
    padding: 8px;
  }
  .recommendCityList img{
    width : 100%;
    height: 125px;
  }
  .allCountryName{
    font-size  : 24px;
    color      : #333333;
    text-align : center;
    line-height: 27px;
    margin-top : 20px;
  }
  .allCountryText{
    padding           : 5px;
    font-size         : 14px;
    line-height       : 21px;
    margin            : 20px auto;
    word-break        : break-all;
    text-overflow     : ellipsis;
    display           : -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow          : hidden;
  }
  .details{
    color: #333333;
  }
  // 全球目的地
  .allDestTitle{
    margin-top : 60px;
    text-align : center;
    font-size  : 30px;
    line-height: 27px;
    color      : #333333;
  }
  /deep/ .ivu-tabs-bar{
    margin: 60px auto;
  }
  /deep/ .ivu-tabs-content{
    margin-top: 60px;
  }

  .allDest a{
    font-size  : 14px;
    line-height: 25px;
    color      : #333333;
  }
  .allDestList{
    float          : left;
    width          : 287px;
    height         : 369px;
    display        : flex;
    flex-direction : column-reverse;
    justify-content: space-between;
    align-items    : center;
  }
  /deep/ .ivu-tabs-tabpane{
    display        : flex;
    justify-content: space-between;
  }
</style>

<template>
  <div class="content">
    <h1 class="hotDest">热门目的地</h1>
    <Tabs active-key="key1">
        <Tab-pane label="热门推荐" key="key1" class="hotTab">
          <div class="topCity tabSon">全球TOP10城市
            <ul>
              <li><router-link to="./dest/destCity">东京</router-link></li>
              <li><router-link to="./dest/destCity">曼谷</router-link></li>
              <li><router-link to="./dest/destCity">香港</router-link></li>
              <li><router-link to="./dest/destCity">台北</router-link></li>
              <li><router-link to="./dest/destCity">新加坡</router-link></li>
              <li><router-link to="./dest/destCity">巴黎</router-link></li>
              <li><router-link to="./dest/destCity">罗马</router-link></li>
              <li><router-link to="./dest/destCity">伦敦</router-link></li>
              <li><router-link to="./dest/destCity">首尔</router-link></li>
              <li><router-link to="./dest/destCity">洛杉矶</router-link></li>
            </ul>
          </div>
          <div class="hotCity tabSon">最热旅游地
            <ul>
              <li><router-link to="./dest/destCity">济州岛</router-link></li>
              <li><router-link to="./dest/destCity">印度尼西亚</router-link></li>
              <li><router-link to="./dest/destCity">泰国</router-link></li>
              <li><router-link to="./dest/destCity">塞班岛</router-link></li>
              <li><router-link to="./dest/destCity">摩洛哥</router-link></li>
              <li><router-link to="./dest/destCity">卡塔尔</router-link></li>
              <li><router-link to="./dest/destCity">毛里求斯</router-link></li>
              <li><router-link to="./dest/destCity">柬埔寨</router-link></li>
              <li><router-link to="./dest/destCity">厄瓜多尔</router-link></li>
              <li><router-link to="./dest/destCity">洛杉矶</router-link></li>
            </ul>
          </div>
          <div class="hotIsland tabSon">热门海岛
            <ul>
              <li><router-link to="./dest/destCity">塞班岛</router-link></li>
              <li><router-link to="./dest/destCity">长滩岛</router-link></li>
              <li><router-link to="./dest/destCity">马尔代夫</router-link></li>
              <li><router-link to="./dest/destCity">沙巴</router-link></li>
              <li><router-link to="./dest/destCity">普吉岛</router-link></li>
              <li><router-link to="./dest/destCity">巴厘岛</router-link></li>
              <li><router-link to="./dest/destCity">芽庄</router-link></li>
              <li><router-link to="./dest/destCity">帕劳</router-link></li>
              <li><router-link to="./dest/destCity">冲绳市</router-link></li>
            </ul>
          </div>
        </Tab-pane>
        <Tab-pane label="国内" key="key2" class="hotTab">
          <div class="topCity tabSon">国内TOP10城市
            <ul>
              <li><router-link to="./dest/destCity/26/372">{{ kunming }}</router-link></li>
              <li><router-link to="./dest/destCity/12/388">{{ hangzhou }}</router-link></li>
              <li><router-link to="./dest/destCity/11/210">{{ nanjing }}</router-link></li>
              <li><router-link to="./dest/destCity/10/299">{{ shanghai }}</router-link></li>
              <li><router-link to="./dest/destCity/3/342">{{ tianjin }}</router-link></li>
              <li><router-link to="./dest/destCity/18/179">{{ wuhan }}</router-link></li>
              <li><router-link to="./dest/destCity">海口市</router-link></li>
              <li><router-link to="./dest/destCity">西双版纳</router-link></li>
              <li><router-link to="./dest/destCity">拉萨市</router-link></li>
              <li><router-link to="./dest/destCity">厦门市</router-link></li>
            </ul>
          </div>
          <div class="hotCity tabSon">热门古镇
            <ul>
              <li><router-link to="./dest/destCity">乌镇</router-link></li>
              <li><router-link to="./dest/destCity">西塘古镇</router-link></li>
              <li><router-link to="./dest/destCity">凤凰古镇</router-link></li>
              <li><router-link to="./dest/destCity">芙蓉镇</router-link></li>
              <li><router-link to="./dest/destCity">黄龙溪古镇</router-link></li>
              <li><router-link to="./dest/destCity">周庄</router-link></li>
            </ul>
          </div>
          <div class="hotIsland tabSon">热门海岛
            <ul>
              <li><router-link to="./dest/destCity">东极岛</router-link></li>
              <li><router-link to="./dest/destCity">渔山岛</router-link></li>
              <li><router-link to="./dest/destCity">南麂岛</router-link></li>
              <li><router-link to="./dest/destCity">大鹿岛</router-link></li>
              <li><router-link to="./dest/destCity">东甲岛</router-link></li>
              <li><router-link to="./dest/destCity">枸杞岛</router-link></li>
              <li><router-link to="./dest/destCity">桃花岛</router-link></li>
              <li><router-link to="./dest/destCity">三都岛</router-link></li>
              <li><router-link to="./dest/destCity">塘屿岛</router-link></li>
            </ul>
          </div>
        </Tab-pane>
        <Tab-pane label="日韩 港澳台" key="key3" class="hotTab">
          <div class="topCity tabSon">港澳台
            <ul>
              <li><router-link to="./dest/destCity">香港</router-link></li>
              <li><router-link to="./dest/destCity">澳门</router-link></li>
              <li><router-link to="./dest/destCity">台北</router-link></li>
              <li><router-link to="./dest/destCity">垦丁</router-link></li>
              <li><router-link to="./dest/destCity">花莲</router-link></li>
              <li><router-link to="./dest/destCity">高雄市</router-link></li>
              <li><router-link to="./dest/destCity">台中市</router-link></li>
              <li><router-link to="./dest/destCity">九份</router-link></li>
              <li><router-link to="./dest/destCity">台南</router-link></li>
              <li><router-link to="./dest/destCity">淡水</router-link></li>
              <li><router-link to="./dest/destCity">宜兰</router-link></li>
            </ul>
          </div>
          <div class="hotCity tabSon">日本
            <ul>
              <li><router-link to="./dest/destCity">东京</router-link></li>
              <li><router-link to="./dest/destCity">大阪</router-link></li>
              <li><router-link to="./dest/destCity">冲绳</router-link></li>
              <li><router-link to="./dest/destCity">京都</router-link></li>
              <li><router-link to="./dest/destCity">北海道</router-link></li>
              <li><router-link to="./dest/destCity">名古屋</router-link></li>
              <li><router-link to="./dest/destCity">奈良</router-link></li>
              <li><router-link to="./dest/destCity">札幌</router-link></li>
              <li><router-link to="./dest/destCity">富士山地区</router-link></li>
              <li><router-link to="./dest/destCity">箱根</router-link></li>
              <li><router-link to="./dest/destCity">镰仓</router-link></li>
              <li><router-link to="./dest/destCity">神户</router-link></li>
            </ul>
          </div>
          <div class="hotIsland tabSon">韩国
            <ul>
              <li><router-link to="./dest/destCity">首尔</router-link></li>
              <li><router-link to="./dest/destCity">济州岛</router-link></li>
              <li><router-link to="./dest/destCity">釜山</router-link></li>
            </ul>
          </div>
        </Tab-pane>
        <Tab-pane label="东南亚及亚洲其他" key="key4" class="hotTab">
          <div class="topCity tabSon">泰国
            <ul>
              <li><router-link to="./dest/destCity">曼谷</router-link></li>
              <li><router-link to="./dest/destCity">普吉岛</router-link></li>
              <li><router-link to="./dest/destCity">清迈</router-link></li>
              <li><router-link to="./dest/destCity">苏梅岛</router-link></li>
              <li><router-link to="./dest/destCity">芭提雅</router-link></li>
              <li><router-link to="./dest/destCity">甲米</router-link></li>
              <li><router-link to="./dest/destCity">华欣</router-link></li>
              <li><router-link to="./dest/destCity">皮皮岛</router-link></li>
              <li><router-link to="./dest/destCity">泰国象岛</router-link></li>
              <li><router-link to="./dest/destCity">拜县</router-link></li>
            </ul>
          </div>
          <div class="hotCity tabSon">新加坡
            <ul>
              <li><router-link to="./dest/destCity">新加坡</router-link></li>
            </ul>
          </div>
          <div class="hotIsland tabSon">越南
            <ul>
              <li><router-link to="./dest/destCity">芽庄</router-link></li>
              <li><router-link to="./dest/destCity">岘港</router-link></li>
              <li><router-link to="./dest/destCity">胡志明市</router-link></li>
              <li><router-link to="./dest/destCity">河内</router-link></li>
              <li><router-link to="./dest/destCity">美奈</router-link></li>
              <li><router-link to="./dest/destCity">大叻</router-link></li>
              <li><router-link to="./dest/destCity">富国岛</router-link></li>
            </ul>
          </div>
          <div class="topCity tabSon">马来西亚
            <ul>
              <li><router-link to="./dest/destCity">沙巴</router-link></li>
              <li><router-link to="./dest/destCity">吉隆坡</router-link></li>
              <li><router-link to="./dest/destCity">槟城</router-link></li>
              <li><router-link to="./dest/destCity">亚庇</router-link></li>
              <li><router-link to="./dest/destCity">兰卡威</router-link></li>
              <li><router-link to="./dest/destCity">马六甲</router-link></li>
              <li><router-link to="./dest/destCity">仙本那</router-link></li>
            </ul>
          </div>
        </Tab-pane>
        <Tab-pane label="欧洲" key="key5" class="hotTab">
          <div class="topCity tabSon">意大利
            <ul>
              <li><router-link to="./dest/destCity">罗马</router-link></li>
              <li><router-link to="./dest/destCity">佛罗伦萨</router-link></li>
              <li><router-link to="./dest/destCity">威尼斯</router-link></li>
              <li><router-link to="./dest/destCity">米兰</router-link></li>
              <li><router-link to="./dest/destCity">五渔村</router-link></li>
              <li><router-link to="./dest/destCity">那不勒斯</router-link></li>
              <li><router-link to="./dest/destCity">西西里岛</router-link></li>
              <li><router-link to="./dest/destCity">比萨</router-link></li>
              <li><router-link to="./dest/destCity">维罗纳</router-link></li>
              <li><router-link to="./dest/destCity">锡耶纳</router-link></li>
            </ul>
          </div>
          <div class="hotCity tabSon">英国
            <ul>
              <li><router-link to="./dest/destCity">伦敦</router-link></li>
              <li><router-link to="./dest/destCity">爱丁堡</router-link></li>
              <li><router-link to="./dest/destCity">剑桥</router-link></li>
              <li><router-link to="./dest/destCity">牛津</router-link></li>
              <li><router-link to="./dest/destCity">英国湖区</router-link></li>
              <li><router-link to="./dest/destCity">曼彻斯特</router-link></li>
              <li><router-link to="./dest/destCity">巴斯</router-link></li>
              <li><router-link to="./dest/destCity">约克</router-link></li>
              <li><router-link to="./dest/destCity">苏格兰</router-link></li>
            </ul>
          </div>
          <div class="hotIsland tabSon">德国
            <ul>
              <li><router-link to="./dest/destCity">慕尼黑</router-link></li>
              <li><router-link to="./dest/destCity">法兰克福</router-link></li>
              <li><router-link to="./dest/destCity">柏林</router-link></li>
              <li><router-link to="./dest/destCity">科隆</router-link></li>
              <li><router-link to="./dest/destCity">海德堡</router-link></li>
              <li><router-link to="./dest/destCity">汉堡</router-link></li>
              <li><router-link to="./dest/destCity">斯图加特</router-link></li>
              <li><router-link to="./dest/destCity">杜塞尔多夫</router-link></li>
              <li><router-link to="./dest/destCity">纽伦堡</router-link></li>
              <li><router-link to="./dest/destCity">德累斯顿</router-link></li>
            </ul>
          </div>
          <div class="topCity tabSon">法国
            <ul>
              <li><router-link to="./dest/destCity">巴黎</router-link></li>
              <li><router-link to="./dest/destCity">尼斯</router-link></li>
              <li><router-link to="./dest/destCity">普罗旺斯</router-link></li>
              <li><router-link to="./dest/destCity">阿维尼翁</router-link></li>
              <li><router-link to="./dest/destCity">里昂</router-link></li>
              <li><router-link to="./dest/destCity">马赛</router-link></li>
              <li><router-link to="./dest/destCity">波尔多</router-link></li>
              <li><router-link to="./dest/destCity">斯特拉斯堡</router-link></li>
              <li><router-link to="./dest/destCity">戛纳</router-link></li>
            </ul>
          </div>
        </Tab-pane>
        <Tab-pane label="大洋洲 北美" key="key6" class="hotTab">
          <div class="topCity tabSon">澳大利亚
            <ul>
              <li><router-link to="./dest/destCity">墨尔本</router-link></li>
              <li><router-link to="./dest/destCity">悉尼</router-link></li>
              <li><router-link to="./dest/destCity">黄金海岸</router-link></li>
              <li><router-link to="./dest/destCity">布里斯班</router-link></li>
              <li><router-link to="./dest/destCity">凯恩斯</router-link></li>
              <li><router-link to="./dest/destCity">珀斯</router-link></li>
              <li><router-link to="./dest/destCity">塔斯马尼亚岛</router-link></li>
              <li><router-link to="./dest/destCity">阿德莱德</router-link></li>
              <li><router-link to="./dest/destCity">袋鼠岛</router-link></li>
            </ul>
          </div>
          <div class="hotCity tabSon">新西兰
            <ul>
              <li><router-link to="./dest/destCity">奥克兰</router-link></li>
              <li><router-link to="./dest/destCity">皇后镇</router-link></li>
              <li><router-link to="./dest/destCity">基督城</router-link></li>
              <li><router-link to="./dest/destCity">新西兰南岛</router-link></li>
            </ul>
          </div>
          <div class="hotIsland tabSon">美国
            <ul>
              <li><router-link to="./dest/destCity">休斯顿</router-link></li>
              <li><router-link to="./dest/destCity">洛杉矶</router-link></li>
              <li><router-link to="./dest/destCity">纽约</router-link></li>
              <li><router-link to="./dest/destCity">塞班岛</router-link></li>
              <li><router-link to="./dest/destCity">旧金山</router-link></li>
              <li><router-link to="./dest/destCity">拉斯维加斯</router-link></li>
              <li><router-link to="./dest/destCity">加州圣地亚哥</router-link></li>
              <li><router-link to="./dest/destCity">波士顿</router-link></li>
              <li><router-link to="./dest/destCity">华盛顿</router-link></li>
              <li><router-link to="./dest/destCity">黄石国家公园</router-link></li>
              <li><router-link to="./dest/destCity">夏威夷</router-link></li>
              <li><router-link to="./dest/destCity">西雅图</router-link></li>
              <li><router-link to="./dest/destCity">关岛</router-link></li>
            </ul>
          </div>
          <div class="topCity tabSon">加拿大
            <ul>
              <li><router-link to="./dest/destCity">温哥华</router-link></li>
              <li><router-link to="./dest/destCity">班夫国家公园</router-link></li>
              <li><router-link to="./dest/destCity">多伦多</router-link></li>
              <li><router-link to="./dest/destCity">蒙特利尔</router-link></li>
            </ul>
          </div>
        </Tab-pane>
        <Tab-pane label="非洲 南美" key="key7" class="hotTab">
          <div class="topCity tabSon">摩洛哥
            <ul>
              <li><router-link to="./dest/destCity">卡萨布兰卡</router-link></li>
              <li><router-link to="./dest/destCity">马拉喀什</router-link></li>
              <li><router-link to="./dest/destCity">菲斯</router-link></li>
              <li><router-link to="./dest/destCity">舍夫沙万</router-link></li>
            </ul>
          </div>
          <div class="hotCity tabSon">埃及
            <ul>
              <li><router-link to="./dest/destCity">开罗</router-link></li>
              <li><router-link to="./dest/destCity">卢克索</router-link></li>
            </ul>
          </div>
          <div class="hotIsland tabSon">南非
            <ul>
              <li><router-link to="./dest/destCity">开普敦</router-link></li>
              <li><router-link to="./dest/destCity">约翰内斯堡</router-link></li>
            </ul>
          </div>
          <div class="topCity tabSon">肯尼亚
            <ul>
              <li><router-link to="./dest/destCity">内罗毕</router-link></li>
              <li><router-link to="./dest/destCity"> 马赛马拉国家保护区</router-link></li>
            </ul>
          </div>
        </Tab-pane>
    </Tabs>
    <!-- <div class="allCountry">查看全部国家</div> -->
    <p class="recommendCity">城市推荐</p>
    <div style="display: flex;justify-content: space-between;">
      <div class="recommendCityList">
        <!-- <img src="../../../img/hz.jpg" alt="" srcset=""> -->
        <div class="allCountryName"> {{ hangzhou }} </div>
        <div class="allCountryText">
          <router-link to="./dest/destCity" class="details">杭州人文古迹众多，西湖及其周边有大量的自然及人文景观遗迹，具代表性的有西湖文化、良渚文化、丝绸文化、茶文化，以及流传下来的许多故事传说成为杭州文化代表。</router-link>
        </div>
      </div>
      <div class="recommendCityList">
        <div>
        <!-- <img src="../../../img/wh.jpg" alt="" srcset=""> -->
        <div class="allCountryName"> {{ wuhan }} </div>
        <div class="allCountryText">
          <router-link to="./dest/destCity" class="details">武汉是国家历史文化名城和首批中国优秀旅游城市，每年举办武汉国际旅游节。武汉自然风光独特，四季气候分明，拥有其他大都市罕有的166个湖泊和众多山峦。武汉的人文景观具有浓郁的楚文化特色。</router-link>
        </div>
       </div>
      </div>
      <div class="recommendCityList">
        <div>
        <!-- <img src="../../../img/sh.jpg" alt="" srcset=""> -->
        <div class="allCountryName"> {{ shanghai }} </div>
        <div class="allCountryText">
          <router-link to="./dest/destCity" class="details">上海拥有世界各国的饮食文化、经典时尚的购物和浓郁商业气息。西餐汇聚世界各地30多个国家的风味。中餐汇聚中国几乎所有地方风味，著名的有老城隍庙、云南路、黄河路、仙霞路等饮食文化区</router-link>
        </div>
      </div>
      </div>
      <div class="recommendCityList">
        <div>
        <!-- <img src="../../../img/km.jpg" alt="" srcset=""> -->
        <div class="allCountryName"> {{ kunming }} </div>
        <div class="allCountryText">
          <router-link to="./dest/destCity" class="details">昆明享“春城”之美誉，中国面向东南亚、南亚开放的门户城市，国家历史文化名城。是中国重要的旅游、商贸城市，西部地区重要的中心城市之一。</router-link>
        </div>
      </div>
      </div>
    </div>
    <div class="allDestTitle">全球目的地</div>
    <Tabs active-key="key2" class="allDest">
        <Tab-pane label="亚洲" key="key11" >
          <div class="allDestList allDestList1">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList2">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList3">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
        </Tab-pane>
        <Tab-pane label="欧洲" key="key12">
          <div class="allDestList allDestList1">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList2">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList3">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
        </Tab-pane>
        <Tab-pane label="非洲" key="key13">
          <div class="allDestList allDestList1">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList2">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList3">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
        </Tab-pane>
        <Tab-pane label="南美洲" key="key14">
          <div class="allDestList allDestList1">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList2">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList3">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
        </Tab-pane>
        <Tab-pane label="大洋洲" key="key15">
          <div class="allDestList allDestList1">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList2">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList3">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
        </Tab-pane>
        <Tab-pane label="南极洲" key="key16">
          <div class="allDestList allDestList1">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList2">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
          <div class="allDestList allDestList3">
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
            <li><router-link to="./dest/destCity">阿富汗</router-link></li>
          </div>
        </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
export default {
  data(){
    return{
      kunming : '',
      hangzhou: '',
      nanjing : '',
      shanghai: '',
      tianjin : '',
      wuhan   : '',
    }
  },
  methods:{
    km(){
      this.axios({
        url   : `http://47.98.224.37:8080/api/v1/areas/1?parentId=26&id=372`,
        method: 'get'
      }).then(result => {
        this.kunming = result.data.data[0].name;
      })
    },
    hz(){
      this.axios({
        url   : `http://47.98.224.37:8080/api/v1/areas/1?parentId=12&id=388`,
        method: 'get'
      }).then(result => {
        this.hangzhou = result.data.data[0].name;
      })
    },
    nj(){
      this.axios({
        url   : `http://47.98.224.37:8080/api/v1/areas/1?parentId=11&id=210`,
        method: 'get'
      }).then(result => {
        this.nanjing = result.data.data[0].name;
      })
    },
    sh(){
      this.axios({
        url   : `http://47.98.224.37:8080/api/v1/areas/1?parentId=10&id=299`,
        method: 'get'
      }).then(result => {
        this.shanghai = result.data.data[0].name;
      })
    },
    tj(){
      this.axios({
        url   : `http://47.98.224.37:8080/api/v1/areas/1?parentId=3&id=342`,
        method: 'get'
      }).then(result => {
        this.tianjin = result.data.data[0].name;
      })
    },
    wh(){
      this.axios({
        url   : `http://47.98.224.37:8080/api/v1/areas/1?parentId=18&id=179`,
        method: 'get'
      }).then(result => {
        this.wuhan = result.data.data[0].name;
      })
    },
  },

  mounted() {
    this.km(),
    this.hz(),
    this.nj(),
    this.sh(),
    this.tj(),
    this.wh()
  },
}
</script>

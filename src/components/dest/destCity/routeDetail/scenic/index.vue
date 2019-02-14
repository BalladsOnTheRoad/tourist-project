<style lang="less" scoped>
  * {
    margin    : 0;
    padding   : 0;
    list-style: none;
  }
  .content {
    width : 1200px;
    margin: 0 auto;
  }
  .scenic,.scenicName{
    font-size  : 30px;
    line-height: 25px;
    color      : #333333;
    margin-top : 60px;
  }
  .map{
    width           : 1200px;
    height          : 650px;
    background-color: green;
    margin-top      : 60px;
  }
  .service{
    display        : flex;
    flex-direction : row;
    justify-content: space-around;
    align-items    : center;
    margin-top     : 90px;
  }
  .date p{
    font-size  : 24px;
    line-height: 25px;
    color      : #333333;
    margin-top : 10px;
    margin-left: -10px;
  }
  // 评分
  .comment .content{
    width  : 1000px;
    height : 200px;
    border : solid 3px #ff9d00;
    margin : 60px auto;
    padding: 20px;
  }
  .neirong{
    text-align: center;
  }
  .comment .left{
    width       : 488px;
    height      : 100%;
    border-right: 2px dashed #ccc;
    float       : left;
  }
  .comment span:nth-child(1){
    font-size: 60px;
    color    : #ff9d00;
  }
  .comment span:nth-child(2){
    font-size: 30px;
    color    : #333;
  }
  .comment .left p{
    font-size: 24px;
    color    : #333;
  }
  .comment .right{
    width : 450px;
    height: 160px;
    float : right;
  }
  .comment .right p{
    font-size  : 24px;
    color      : #333333;
    line-height: 100px;
    text-align : center;
  }
  .comment .star{
    width          : 450px;
    display        : flex;
    flex-direction : row;
    justify-content: center;
    margin-top     : -30px;
  }
  // 用户评论
  .userComment{
    width     : 1200px;
    height    : 260px;
    border    : 1px solid #eee;
    padding   : 30px;
    margin-top: 60px;
  }
  .userComment .left{
    width : 250px;
    height: 200px;
    float : left;
  }
  .userComment .left .head{
    width           : 108px;
    height          : 108px;
    background-color: #8c8c8c;
    border-radius   : 50%;
    margin          : 0 auto;
  }
  .userName{
    font-size : 24px;
    color     : #333333;
    text-align: center;
    margin-top: 10px;
  }
  .score{
    font-size : 24px;
    color     : #ff9d00;
    text-align: center;
  }
  .userComment .right{
    width      : 840px;
    height     : 200px;
    float      : right;
    font-size  : 24px;
    line-height: 25px;
    color      : #333333;
  }
  // 更多
  .more{
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
    <div class="scenic">景点地图：</div>
    <div class="scenicName">杭州西湖风景游览区</div>
    <div class="map"></div>
    <div class="service">
      <div class="date">
        <div class="img"><img src="../../../../../images/toilet.png" alt=""></div>
        <p>卫生间</p>
      </div>
      <div class="date">
        <div class="img"><img src="../../../../../images/toilet.png" alt=""></div>
        <p>公交站</p>
      </div>
      <div class="date">
        <div class="img"><img src="../../../../../images/toilet.png" alt=""></div>
        <p>餐饮</p>
      </div>
      <div class="date">
        <div class="img"><img src="../../../../../images/toilet.png" alt=""></div>
        <p>景点</p>
      </div>
    </div>
    <div class="comment">
      <div class="content">
        <div class="left">
          <div class="neirong">
            <span>99%</span>
            <span>好评</span>
            <p>11条真实好评</p>
          </div>
        </div>
        <div class="right">
          <p>总体感受满意度</p>
          <div class="star">
            <img src="../../../../../images/star.png" alt="">
            <img src="../../../../../images/star.png" alt="">
            <img src="../../../../../images/star.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="userComment">
      <div class="left">
        <div class="head"></div>
        <div class="userName">早春的树</div>
        <div class="score">4分</div>
      </div>
      <div class="right">
        这西湖啊，就是适合谈恋爱的小情侣来呢~~~阳光正好，在湖里远看断桥，人头攒动，倒显得桥更渺小了~~~不知当年的清明时节，要是也这么多人，白娘子还会不会一眼从这许多人中看到她的许官人哟！！！西湖很大啊，要想跑遍西湖十景，可不是一两天能完成的。安静的西子湖就像静卧的少女，青涩朦胧，曼妙多姿。
      </div>
    </div>
    <div class="userComment">
      <div class="left">
        <div class="head"></div>
        <div class="userName">早春的树</div>
        <div class="score">4分</div>
      </div>
      <div class="right">
        这西湖啊，就是适合谈恋爱的小情侣来呢~~~阳光正好，在湖里远看断桥，人头攒动，倒显得桥更渺小了~~~不知当年的清明时节，要是也这么多人，白娘子还会不会一眼从这许多人中看到她的许官人哟！！！西湖很大啊，要想跑遍西湖十景，可不是一两天能完成的。安静的西子湖就像静卧的少女，青涩朦胧，曼妙多姿。
      </div>
    </div>
    <div class="userComment">
      <div class="left">
        <div class="head"></div>
        <div class="userName">早春的树</div>
        <div class="score">4分</div>
      </div>
      <div class="right">
        这西湖啊，就是适合谈恋爱的小情侣来呢~~~阳光正好，在湖里远看断桥，人头攒动，倒显得桥更渺小了~~~不知当年的清明时节，要是也这么多人，白娘子还会不会一眼从这许多人中看到她的许官人哟！！！西湖很大啊，要想跑遍西湖十景，可不是一两天能完成的。安静的西子湖就像静卧的少女，青涩朦胧，曼妙多姿。
      </div>
    </div>
    <router-link  to="#"> <div class="more">查看更多评价>>></div> </router-link>
  </div>
</template>

<script>
export default {

};
</script>




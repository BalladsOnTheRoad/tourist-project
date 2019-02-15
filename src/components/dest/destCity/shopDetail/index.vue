<style lang="scss" scoped>
* {
  margin    : 0;
  padding   : 0;
  list-style: none;
}
.content {
  width : 1200px;
  margin: 0 auto;
}
// 顶部
.img {
  width     : 1200px;
  height    : 600px;
  margin-top: 60px;
}
.imgLeft {
  width : 800px;
  height: 600px;
  float : left;
}
.imgLeft img {
  width : 100%;
  height: 100%;
}
.imgRight {
  width : 400px;
  height: 600px;
  float : right;
}
.shopName {
  font-size  : 36px;
  line-height: 25px;
  color      : #333333;
  margin-top : 200px;
  text-align : center;
}
.stat {
  width     : 600px;
  height    : 33px;
  margin-top: 60px;
  padding   : 0 50px;
}
.stat img {
  margin: 0 auto;
}
// 介绍
.shopDetail {
  width      : 1167px;
  font-size  : 24px;
  line-height: 36px;
  color      : #333333;
  margin-top : 60px;
}
.address,
.traffic {
  width      : 1167px;
  font-size  : 24px;
  line-height: 36px;
  color      : #333333;
  margin-top : 60px;
}
.address p,
.traffic p {
  color: #ff9d00;
}
// 用户游记
.travelNote {
  width     : 1200px;
  height    : 300px;
  background: url("../../../../images/bg5.png");
  margin-top: 112px;
  padding   : 20px;
}
.left {
  float: left;
}
.userOperation {
  width : 700px;
  height: 30px;
}
.comment,
.collect,
.browse {
  height        : 30px;
  float         : left;
  vertical-align: middle;
  margin-right  : 20px;
  text-align    : center;
  color         : 333;
  font-size     : 14px;
}
.userOperation em {
  display    : inline-block;
  float      : right;
  line-height: 30px;
  margin-left: 10px;
  font-style : normal;
}
// 评论内容
.travelNoteTitle {
  font-size : 30px;
  color     : #333333;
  text-align: center;
}
.travelNoteContent {
  width     : 700px;
  height    : 180px;
  margin-top: 10px;
  color     : #333333;
  font-size : 24px;
}
.right {
  float : right;
  width : 400px;
  height: 260px;
}
.userinfo {
  width : 140px;
  height: 260px;
  float : left;
}
.username {
  font-size : 24px;
  color     : #333333;
  text-align: center;
  margin-top: 100px;
}
.attention {
  font-size    : 14px;
  color        : #ff9d00;
  width        : 80px;
  height       : 30px;
  border-radius: 8px;
  border       : solid 1px #ff9d00;
  cursor       : pointer;
  line-height  : 30px;
  text-align   : center;
  margin       : 0 auto;
}
.headPortrait {
  width           : 260px;
  height          : 260px;
  border-radius   : 50%;
  background-color: tan;
  float           : right;
  // background: url("../../../../../img/1.jpg") no-repeat;
  background-size: contain;
}
.travelNote1 {
  background: url("../../../../images/bg4.png");
}
.travelNote1 .left {
  float: right;
}
.travelNote1 .right {
  float: left;
}
.travelNote1 .userOperation {
  float: right;
}
.travelNote1 .comment,
.travelNote1 .collect,
.travelNote1 .browse {
  float: right;
}
.travelNote1 .userinfo {
  float: right;
}
.travelNote1 .headPortrait {
  float: left;
}
.more {
  font-size  : 30px;
  line-height: 80px;
  color      : #ff9d00;
  width      : 160px;
  height     : 80px;
  border     : solid 1px #ff9d00;
  text-align : center;
  margin     : 60px auto;
  cursor     : pointer;
}

.quill-editor {
  height: 745px;

  .ql-container {
    height: 680px;
  }
}

.limit {
  height     : 30px;
  border     : 1px solid #ccc;
  line-height: 30px;
  text-align : right;

  span {
    color: #ee2a7b;
  }
}

.ql-snow .ql-editor img {
  max-width: 480px;
}

.ql-editor .ql-video {
  max-width: 480px;
}
</style>

<template>
  <div class="content">
    <div class="img">
      <div class="imgLeft">
        <!-- <img
          src = "../../../../../img/1.jpg"
          alt = ""
        > -->
      </div>
      <div class="imgRight">
        <div class="shopName">
          南宋御街&nbsp;&nbsp;必去推荐
        </div>
        <div class="stat">
          <img
            src = "../../../../images/star.png"
            alt = ""
          >
          <img
            src = "../../../../images/star.png"
            alt = ""
          >
          <img
            src = "../../../../images/star.png"
            alt = ""
          >
          <img
            src = "../../../../images/star.png"
            alt = ""
          >
          <img
            src = "../../../../images/star.png"
            alt = ""
          >
        </div>
      </div>
    </div>
    <div class="shopDetail">
      简介：<br />
      南宋御街，是南宋都城铺设的一条主要街道。《咸淳临安志》等文献记载，铺设南宋御街一共使用了一万多块石板，但此前的考古发掘却只发现过香糕砖。御街南起皇城北门和宁门(今万松岭和凤凰山脚路交叉口)外，经朝天门(今鼓楼)、中山中路、中山北路、观桥(今贯桥)到今凤起路、武林路交叉口一带，是南宋临安城的中轴线，全长约4185米。它是皇帝于“四孟”(孟春、孟夏、孟秋、孟冬)到景灵宫(今武林路西侧，供奉皇室祖先塑像的场所)朝拜祖宗时的专用道路。
    </div>
    <div class="address">
      <p>地址：</p>
      杭州市上城区中山中路193号西湖大道与惠民路中间
    </div>
    <div class="traffic">
      <p>交通：</p>
      乘7、40、108、900、992、y2路等公交车在柴垛桥站下车步行约180米可达
    </div>
    <div class="travelNote">
      <div class="left">
        <div class="userOperation">
          <div class="comment">
            <img
              src = "../../../../images/comment.png"
              alt = ""
            >
            <em @click="Comment()">2121评论</em>
          </div>
          <div class="collect">
            <img
              src = "../../../../images/collect.png"
              alt = ""
            >
            <em>2121收藏</em>
          </div>
          <div class="browse">
            <img
              src = "../../../../images/watch.png"
              alt = ""
            >
            <em>2121浏览</em>
          </div>
        </div>
        <div class="travelNoteTitle">杭州</div>
        <div class="travelNoteContent">刚开始走进去主要是一些卖丝绸、茶叶类的商铺，没有太多小吃
          然后往前走到一个十字路口后就开始有很多卖小吃的了，就是一个大型商业街，走过一些古镇类的商业街，感觉都大同小异，倒没有特别惊艳的感觉。在这里刚好看到夕阳，透着巷子望过去，别有一番感觉<router-link to="#">详情</router-link>
        </div>
      </div>
      <div class="right">
        <div class="userinfo">
          <div class="username">低调的奢华</div>
          <div class="attention">+关注</div>
        </div>
        <div class="headPortrait"></div>
      </div>
    </div>
    <div class="travelNote travelNote1">
      <div class="left">
        <div class="userOperation">
          <div class="comment">
            <img
              src = "../../../../images/comment.png"
              alt = ""
            >
            <em>2121评论</em>
          </div>
          <div class="collect">
            <img
              src = "../../../../images/collect.png"
              alt = ""
            >
            <em>2121收藏</em>
          </div>
          <div class="browse">
            <img
              src = "../../../../images/watch.png"
              alt = ""
            >
            <em>2121浏览</em>
          </div>
        </div>
        <div class="travelNoteTitle">杭州</div>
        <div class="travelNoteContent">刚开始走进去主要是一些卖丝绸、茶叶类的商铺，没有太多小吃
          然后往前走到一个十字路口后就开始有很多卖小吃的了，就是一个大型商业街，走过一些古镇类的商业街，感觉都大同小异，倒没有特别惊艳的感觉。在这里刚好看到夕阳，透着巷子望过去，别有一番感觉<router-link to="#">详情</router-link>
        </div>
      </div>
      <div class="right">
        <div class="userinfo">
          <div class="username">低调的奢华</div>
          <div class="attention">+关注</div>
        </div>
        <div class="headPortrait"></div>
      </div>
    </div>
    <div class="travelNote">
      <div class="left">
        <div class="userOperation">
          <div class="comment">
            <img
              src = "../../../../images/comment.png"
              alt = ""
            >
            <em>2121评论</em>
          </div>
          <div class="collect">
            <img
              src = "../../../../images/collect.png"
              alt = ""
            >
            <em>2121收藏</em>
          </div>
          <div class="browse">
            <img
              src = "../../../../images/watch.png"
              alt = ""
            >
            <em>2121浏览</em>
          </div>
        </div>
        <div class="travelNoteTitle">杭州</div>
        <div class="travelNoteContent">刚开始走进去主要是一些卖丝绸、茶叶类的商铺，没有太多小吃
          然后往前走到一个十字路口后就开始有很多卖小吃的了，就是一个大型商业街，走过一些古镇类的商业街，感觉都大同小异，倒没有特别惊艳的感觉。在这里刚好看到夕阳，透着巷子望过去，别有一番感觉<router-link to="#">详情</router-link>
        </div>
      </div>
      <div class="right">
        <div class="userinfo">
          <div class="username">低调的奢华</div>
          <div class="attention">+关注</div>
        </div>
        <div class="headPortrait"></div>
      </div>
    </div>
    <div class="travelNote travelNote1">
      <div class="left">
        <div class="userOperation">
          <div class="comment">
            <img
              src = "../../../../images/comment.png"
              alt = ""
            >
            <em>2121评论</em>
          </div>
          <div class="collect">
            <img
              src = "../../../../images/collect.png"
              alt = ""
            >
            <em>2121收藏</em>
          </div>
          <div class="browse">
            <img
              src = "../../../../images/watch.png"
              alt = ""
            >
            <em>2121浏览</em>
          </div>
        </div>
        <div class="travelNoteTitle">杭州</div>
        <div class="travelNoteContent">刚开始走进去主要是一些卖丝绸、茶叶类的商铺，没有太多小吃
          然后往前走到一个十字路口后就开始有很多卖小吃的了，就是一个大型商业街，走过一些古镇类的商业街，感觉都大同小异，倒没有特别惊艳的感觉。在这里刚好看到夕阳，透着巷子望过去，别有一番感觉<router-link to="#">详情</router-link>
        </div>
      </div>
      <div class="right">
        <div class="userinfo">
          <div class="username">低调的奢华</div>
          <div class="attention">+关注</div>
        </div>
        <div class="headPortrait"></div>
      </div>
    </div>
    <div class="more">更多游记</div>
    <!-- quill-editor插件标签 分别绑定各个事件-->
    <!-- <div @hidden="hiddenShow" v-show="ModifyPassword_pop_up">
      <quill-editor v-model="content">
      </quill-editor>
      <Button type="primary" @click="Submit">提交</Button>
      <Button @click="cancel">取消</Button>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id      : this.$route.params.id,
      cityInfo: {}
    };
  },
  created() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo(){
      let _this = this;
      this.$http.get('http://47.98.224.37:8080/api/v1/shops/'+this.id).then(result =>{
        if(result.data.status == '200'){
        }
      })
    }
  }
};
</script>

<template>
  <div class="layout">
     <Layout>
        <Header style="height:650px;">
          <div style="height:650px;">
            <public-header></public-header>
          </div>
        </Header>

        
        <Content>
          <div class="content_wrapper">
            <div class="hot_destination">
              <div class="hotDes_title">
                <h2>热门目的地</h2>
              </div>
              
              <div class="hotDes_list">
                <ul class="desList">
                  <div class="des_list_box" v-for="(hot_area_item, index) in hot_area_items" :key="index">
                    <des-list :order="index+1" :hot_area_item="hot_area_item"></des-list>
                  </div>


                  <li class="des_last_list">
                    
                    <div class="list_top">
                      <div class="list_img_box">
                          <img src="@/desList01.jpg" alt="热门目的地一">
                      </div>
                      <div class="lb_mask">
                      
                      </div>
                    </div>

                    <div class="last_li_bottom">
                      <ul>
                        <li>
                          <router-link to="/">越南</router-link>
                        </li>
                        <li>
                          <router-link to="/">新加坡</router-link>
                        </li>
                        <li>
                          <router-link to="/">马尔代夫</router-link>
                        </li>
                        <li>
                          <router-link to="/">阿联酋</router-link>
                        </li>
                        <li>
                          <router-link to="/">迪拜</router-link>
                        </li>
                        <li>
                          <router-link to="/">西班牙</router-link>
                        </li>
                        <li>
                          <router-link to="/">巴塞罗那</router-link>
                        </li>
                        <li>
                          <router-link to="/">洛杉矶</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            <div class="hot_travelNote">
              <div class="traNode_title">
                <h2>热门游记</h2>
              </div>
              <div class="traNode_list">
                <div v-for="(hot_tra_note, index) in hot_tra_notes" :key="index">
                  <tra-node-list :hot_tra_note="hot_tra_note"></tra-node-list>
                </div>
                <div class="last_list_mask">
                  <h4>
                    <router-link to="/">查看更多有趣游记和话题>></router-link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer style="height:600px;">
          <public-footer></public-footer>
        </Footer>
    </Layout>
  </div>
</template>

<script>
import publicHeader from '../public/header';
import publicFooter from '../public/footer';
import desList from './DesList';
import traNodeList from './TraNoteList';
export default {
  data(){
    return{
      hot_tra_notes : null,
      hot_area_items: null,
    }
  },
  components:{
    'public-header': publicHeader,
    'public-footer': publicFooter,
    'des-list'     : desList,
    'tra-node-list': traNodeList,
  },
  mounted(){
    this.axios({
        url   : 'http://47.98.224.37:8080/api/v1/travels/official',
        method: 'get',
        params: {
            page    : 1,
            pageSize: 3
        }
    }).then(res=>{
        this.hot_tra_notes = res.data.data.entity;
    })
    this.axios({
      url   : 'http://47.98.224.37:8080/api/v1/areas/hot',
      method: 'get',
    }).then(res=>{
      this.hot_area_items = res.data.data;
      
      this.hot_area_items[0].perNum = 512312;
      this.hot_area_items[1].perNum = 456431;
      this.hot_area_items[2].perNum = 345345;
      this.hot_area_items[3].perNum = 211312;
      this.hot_area_items[4].perNum = 125434;
    })
  }
};
</script>
<style lang="scss">
  /*首页头部样式*/
  .ivu-layout-header{
        padding: 0;
  }
  /*首页底部样式*/

  .ivu-layout-footer{
    padding         : 0;
    background-color: #0d0d0d;
    opacity         : 0.96;
  }

  /*首页中间内容样式*/
  .content_wrapper{
    width   : 1200px;
    margin  : 0 auto;
    overflow: hidden;
  }
  .hotDes_title{
    h2{
      font-size   : 36px;
      color       : #333333;
      font-weight : normal;
      font-stretch: normal;
      text-align  : center;
      padding     : 58px 0;
    }
  }

  /*热门目的地列表*/
  .desList{
    overflow: hidden;
    width   : 1250px;
  }
  .des_last_list{
    float           : left;
    width           : 386px;
    height          : 400px;
    background-color: #ff9d00;
    border-radius   : 5px;
    overflow        : hidden;
  }
  .list_top{
    position: relative;
  }
  .list_img_box{
    width : 100%;
    height: 264px;
    img{
        width  : 100%;
        height : 100%;
        display: block;
    }
    
  }
  .lb_mask{
    width: 100%;

    height          : 264px;
    background-color: #ff9d00;
    opacity         : 0.5;
    position        : absolute;
    left            : 0;
    top             : 0;
  }


  /*   最后一个热门目的地列表显示  */
  .last_li_bottom{
    padding: 12px 40px 0;
    ul{
      li{
        float      : left;
        height     : 53px;
        line-height: 53px;
        // margin-right: 55px;
        width     : 76px;
        text-align: center;
        a{
          font-size: 14px;
          color    : #ffffff;
        }
      }
    }
  }



  /*热门游记*/
  .traNode_title{
    margin-bottom: 42px;
    h2{
      font-size   : 36px;
      font-weight : normal;
      font-stretch: normal;
      color       : #333333;
      text-align  : center;
    }
  }


  .traNode_list{
    position: relative;
  }
  .last_list_mask{
    width      : 1200px;
    height     : 301px;
    background : rgba($color: #ff9d00, $alpha: 0.5);
    position   : absolute;
    left       : 0;
    bottom     : 0;
    padding-top: 132px;
    h4{
      width         : 315px;
      font-size     : 24px;
      font-weight   : normal;
      font-stretch  : normal;
      letter-spacing: 0px;
      text-align    : center;
      margin        : 0 auto;
      a{
        color: #ffffff;
        &:hover{
          color: #0080e6;
        }
      }
    }
  }
</style>




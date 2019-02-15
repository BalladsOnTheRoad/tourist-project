<style lang="scss" scoped>
 *{
margin    : 0;
padding   : 0;
list-style: none;
}


 img{
  transition: all .5s linear;
  transform : scale(1);
}
.big{
  transform: scale(2);
}



.content{
 width : 1200px;
 margin: 0 auto;
}

//特色优势
.TeSe{
    display        : flex;
    justify-content: space-between;
}

.tese1{
    display        : flex;
    width          : 262px;
    justify-content: space-between;
}

.tese1 h1{
    font-size    : 24px;
    margin-bottom: 12px;
}

//good_commond
.good_commond .good_commond_title{
    display        : flex;
    justify-content: space-between;
    width          : 370px;
    height         : 34px;
    margin         : 50px auto;
    color          : black;
}
.good_commond .black_line{
    width           : 58px;
    height          : 5px;
    margin-top      : 26px;
    background-color: black
}

.hotelpic_wall{
    width   : 1200px;
    height  : 260px;
    margin  : 0 auto;
    overflow: hidden;
}
.hotelpic_wall .pic{
    width     : 20%;
    float     : left;
    transition: all 1s;
}
.hotelpic_wall img{
    width : 1200px;
    height: 260px;
    cursor: pointer;
}


.hotelpic_wall :hover .pic{
    width: 200px;
}

.hotelpic_wall .pic :hover{
    width: 400px;
}

//Special price hotel
 >>> .ivu-tabs-ink-bar{
        width: 200px;
}

/deep/ .ivu-tabs-ink-bar{
    background-color: orange;
}
/deep/ .ivu-tabs-tab{
    width     : 180px;
    height    : 4px;
    text-align: center;
}
.hotelinfo_all{
    display        : flex;
    justify-content: space-between;
}

.hotelinfo_box{
    position     : relative;
    float        : left;
    margin-bottom: 22px;
    margin-right : 15px;
}
.blackdiv{
    position        : absolute;
    width           : 285px;
    height          : 285px;
    background-color: black;
    opacity         : 0.2;
}
.hotel_info{
    width : 285px;
    height: 285px;
    color : white;
    cursor: pointer;
}



.pingfen{
    width           : 80px;
    height          : 30px;
    background-color: #c58a25;
    line-height     : 30px;
    text-align      : center;
}

.hotel_info .pfxia{
    margin-top: 200px;
}

.hotel_info img{
    position: absolute;
    width   : 285px;
    height  : 285px;
    z-index : -100;
}


 .hotelinfo_box:hover  .blackdiv{
    display: none;
  }
  /deep/ .ivu-tabs-tab{
    font-size    : 28px;
    height       : 40px;
    margin-bottom: 20px;
  }
  /deep/ .ivu-tabs-tab-active{
        color: #ff9d00;
  }
 /deep/ .ivu-tabs-tab:hover {
    color: #ff9d00;
}
.header{
    margin-bottom: 50px;
}
</style>

<template>
    <div>  
        <div class="header">
            <hotel-header></hotel-header>
        </div>

        <div class="content">
        <!-- 特色优势 -->
            <div class="TeSe">
                <div class="tese1">
                    <div><img src="../../images/jiudian1.png" alt=""></div>
                    <div>
                        <h1>住宿攻略</h1>
                        <span>区域攻略到特色主题应有尽有</span>
                    </div>
                </div>
                <div class="tese1">
                    <div><img src="../../images/jiudian2.png" alt=""></div>
                    <div>
                        <h1>真实点评</h1>
                        <span>区域攻略到特色主题应有尽有</span>
                    </div>
                </div>
                <div class="tese1">
                    <div><img src="../../images/jiudian3.png" alt=""></div>
                    <div>
                        <h1>住宿攻略</h1>
                        <span>区域攻略到特色主题应有尽有</span>
                    </div>
                </div>
            </div>

            <div class="good_commond" >
                <div class="good_commond_title">
                    <div class="black_line"></div>
                    <h1 style="font-size:34px;">精选·特色推荐</h1>
                    <div class="black_line"></div>
                </div>


                <div class="hotelpic_wall" >
                    <div class="hotelpic1 pic">
                        <router-link to="hotel_lists">
                            <img src="../../images/hotelpic.png" alt="" >
                        </router-link>
                    </div>
                    <div class="hotelpic2 pic">
                        <router-link to="hotel_lists">
                            <img src="../../images/hotelpic.png" alt="" >
                        </router-link>
                    </div>
                    <div class="hotelpic3 pic">
                        <router-link to="hotel_lists">
                            <img src="../../images/hotelpic.png" alt="" >
                        </router-link>
                    </div>
                    <div class="hotelpic4 pic">
                        <router-link to="hotel_lists">
                            <img src="../../images/hotelpic.png" alt="" >
                        </router-link>
                    </div>
                    <div class="hotelpic5 pic">
                        <router-link to="hotel_lists">
                            <img src="../../images/hotelpic.png" alt="" >
                        </router-link>
                    </div>
                </div>


            </div>
            <div class="specialprice_hotel good_commond" >
                <div class="good_commond_title">
                    <div class="black_line"></div>
                    <h1 style="font-size:34px;">精选·特色酒店</h1>
                    <div class="black_line"></div>
                </div>
                <Tabs value="name1">
                    <TabPane label="昆明" name="name1"  >


                        <!-- <div  v-html='this.html'>{{this.html}}</div> -->
                        <div v-for="(html_item,index) in km_html" :key="index">
                        <div class="hotelinfo_box">
                                <div class="blackdiv"></div>
                                <div class="hotel_info" @click="toHotelDetail(html_item.id)">
                                    <img v-bind:src="html_item.image" alt="">
                                    <div class="pingfen">评分：{{html_item.score}}</div>
                                    <div class="pfxia">
                                        <h2>{{html_item.name}}</h2>
                                        <p>{{html_item.englishname}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>

                    <TabPane label="杭州" name="name2">
                        <div v-for="(html_item,index) in hz_html" :key="index">
                        <div class="hotelinfo_box">
                                <div class="blackdiv"></div>
                                <div class="hotel_info" @click="toHotelDetail(html_item.id)">
                                    <img v-bind:src="html_item.image" alt="">
                                    <div class="pingfen">评分：{{html_item.score}}</div>
                                    <div class="pfxia">
                                        <h2>{{html_item.name}}</h2>
                                        <p>{{html_item.englishname}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>

                    <TabPane label="南京" name="name3">
                        <div v-for="(html_item,index) in nj_html" :key="index">
                        <div class="hotelinfo_box">
                                <div class="blackdiv"></div>
                                <div class="hotel_info" @click="toHotelDetail(html_item.id)">
                                    <img v-bind:src="html_item.image" alt="">
                                    <div class="pingfen">评分：{{html_item.score}}</div>
                                    <div class="pfxia">
                                        <h2>{{html_item.name}}</h2>
                                        <p>{{html_item.englishname}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane label="上海" name="name4">
                        <div v-for="(html_item,index) in sh_html" :key="index">
                        <div class="hotelinfo_box">
                                <div class="blackdiv"></div>
                                <div class="hotel_info" @click="toHotelDetail(html_item.id)">
                                    <img v-bind:src="html_item.image" alt="">
                                    <div class="pingfen">评分：{{html_item.score}}</div>
                                    <div class="pfxia">
                                        <h2>{{html_item.name}}</h2>
                                        <p>{{html_item.englishname}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane label="天津" name="name5">
                        <div v-for="(html_item,index) in tj_html" :key="index">
                        <div class="hotelinfo_box">
                                <div class="blackdiv"></div>
                                <div class="hotel_info" @click="toHotelDetail(html_item.id)">
                                    <img v-bind:src="html_item.image" alt="">
                                    <div class="pingfen">评分：{{html_item.score}}</div>
                                    <div class="pfxia">
                                        <h2>{{html_item.name}}</h2>
                                        <p>{{html_item.englishname}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane label="武汉" name="name6">

                    </TabPane>
                </Tabs>
            </div>
        </div>

        <div class="footer">
            <hotel-footer></hotel-footer>
        </div>
    </div>
    
</template>

<script>
import HotelHeader from '../public/basicHeader';
import HotelFooter from '../public/footer';
export default {
    components:{
        'hotel-header': HotelHeader,
        'hotel-footer': HotelFooter
    },
        data(){
            return{
                movies     : [],
                selectIndex: undefined,
                kunming    : '',
                hangzhou   : '',
                nanjing    : '',
                shanghai   : '',
                tianjin    : '',
                wuhan      : '',
                km_html    : null,
                hz_html    : null,
                nj_html    : null,
                sh_html    : null,
                tj_html    : null,
            }
        },
        methods: {
        km(){
            this.axios({
                url    : `http://47.98.224.37:8080/api/v1/hotels/areas/372`,
                methods: 'get'
            }).then(result =>{
                // console.log(result.data.data.entity);
                this.km_html = result.data.data.entity;

            })
        },
        hz(){
             this.axios({
                url    : `http://47.98.224.37:8080/api/v1/hotels/areas/388`,
                methods: 'get'
            }).then(result =>{
                // console.log(result.data.data.entity);
                this.hz_html = result.data.data.entity;

            })
        },
         nj(){
             this.axios({
                url    : `http://47.98.224.37:8080/api/v1/hotels/areas/210`,
                methods: 'get'
            }).then(result =>{
                // console.log(result.data.data.entity);
                this.nj_html = result.data.data.entity;

            })
        },
          sh(){
             this.axios({
                url    : `http://47.98.224.37:8080/api/v1/hotels/areas/299`,
                methods: 'get'
            }).then(result =>{
                // console.log(result.data.data.entity);
                this.sh_html = result.data.data.entity;

            })
        },
            tj(){
             this.axios({
                url    : `http://47.98.224.37:8080/api/v1/hotels/areas/342`,
                methods: 'get'
            }).then(result =>{
                // console.log(result.data.data.entity);
                this.tj_html = result.data.data.entity;

            })
        },
        select (index) {
            this.selectIndex = this.selectIndex === index ? undefined : index;
            },
            toHotelDetail(hotel_id){
                this.$router.push({path:'/hotel_details',query:{id:hotel_id}});
            }
        },
        mounted(){
            this.km()
            this.hz()
            this.nj()
            this.sh()
            this.tj()

        }
}
</script>

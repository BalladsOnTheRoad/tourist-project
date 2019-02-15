<template>
    <div class="collection_wrapper">
        <!-- <div class="write_travel">
            <a href="javascript:;" @click="travelCom">游记</a>
            <a href="javascript:;" @click="strategyCom">攻略</a>
        </div> -->
        <!-- <div class="travel_lsits">
            <travel-list v-for="(n) in 1" :key="n"></travel-list>
        </div> -->
        <div class="collection_box">
            <!-- <div class="travel_col_box" v-if="collectionStatus">
                travel
            </div>
            <div class="strategy_col_box" v-else>
                strategy
            </div> -->
            <Tabs value="name1">
                <TabPane label="游记" name="name1">
                    <div class="travel_box contain_box">

                        <!-- <div class="contain_inner">
                            <div v-if="travelStatus">
                                <div v-for="(travelList, index) in travelLists" :key="index">
                                    <public-list :data_item="travelList" kind="travel"></public-list>
                                </div>
                            </div>
                            <div v-else>
                                <div class="nonCon">
                                    <router-link to="/">你还未收藏过一篇游记，快去查看更多有趣游记吧>></router-link>
                                </div>
                            </div>
                        </div> -->

                        <div class="contain_inner">
                            <div v-if="travelStatus" style="height:100%;">
                                <RecycleScroller
                                        class = "scroller"
                                        
                                    :items       = "travelLists"
                                    :item-height = "270"
                                >
                                    <div class="travel_list user" slot-scope="{ item }">
                                        <div class="travel_title">
                                            <h3>{{item.title}}</h3>
                                        </div>
                                        <div class="travel_content">
                                            <div>
                                                <p v-html="item.describe"></p>
                                                <span><router-link to="/">[详情]</router-link></span>
                                            </div>
                                        </div>
                                    </div>
                                </RecycleScroller>
                            </div>
                            <div v-else>
                                <div class="nonCon">
                                    <router-link to="/">你还未收藏过一篇游记，快去查看更多有趣游记吧>></router-link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </TabPane>
                <TabPane label="攻略" name="name2">
                    <div class="strategy_box contain_box">

                        <div class="contain_inner">
                            <div v-if="strategyStatus" style="height:100%;">
                                <RecycleScroller
                                        class = "scroller"
                                        
                                    :items       = "strategyLists"
                                    :item-height = "270"
                                >
                                    <div class="travel_list user" slot-scope="{ item }">
                                        <div class="travel_title">
                                            <h3>{{item.title}}</h3>
                                        </div>
                                        <div class="travel_content">
                                            <div>
                                                <p v-html="item.describe"></p>
                                                <span><router-link :to="'/strategy_details?id='+item.id">[详情]</router-link></span>
                                            </div>
                                        </div>
                                    </div>
                                </RecycleScroller>
                            </div>
                            <div v-else>
                                <div class="nonCon">
                                    <router-link to="/strategy">你还未收藏过一篇攻略，快去查看更多有趣攻略吧>></router-link>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
import PublicList from './travelList';
export default {
    data(){
        return{
            collectionStatus: true,
            travelLists     : [],
            strategyLists   : [],
            travelStatus    : true,
            strategyStatus  : true,
        }
    },
    components:{
        'public-list': PublicList,
    },
    methods:{
        travelCom(){
            this.collectionStatus = true;
        },
        strategyCom(){
            this.collectionStatus = false;
        }
    },
    beforeMount(){
        this.axios({
            url   : 'http://47.98.224.37:8080/api/v1/users/mycollection',
            method: 'get'
        }).then(res=>{
            if(res.data.status==200){
                if(res.data.data.length!=0){
                    this.travelStatus = true;
                    this.travelLists  = JSON.parse(JSON.stringify(res.data.data));
                }else{
                    this.travelStatus = false;
                }
            }else{
                this.$Message.error('获取收藏游记出错！');
            }
        })
        this.axios({
            url   : 'http://47.98.224.37:8080/api/v1/users/mycollectionstra',
            method: 'get'
        }).then(res=>{
            if(res.data.status==200){
                if(res.data.data.length!=0){
                    this.strategyStatus = true;
                    this.strategyLists  = JSON.parse(JSON.stringify(res.data.data));
                }else{
                    this.strategyStatus = false;
                }
            }else{
                this.$Message.error('获取收藏攻略出错！');
            }
        })
    }
}
</script>
<style lang="scss" scoped>

    .collection_wrapper{
        padding: 0 68px 0 56px;
    }   
    // .write_travel{
    //     text-align   : center;
    //     margin-bottom: 15px;
    //     a{
    //         display      : inline-block;
    //         width        : 200px;
    //         height       : 50px;
    //         line-height  : 50px;
    //         font-size    : 24px;
    //         color        : #ff9d00;
    //         text-align   : center;
    //         border       : 1px solid #ff9d00;
    //         border-radius: 30px;

    //         &:first-child{
    //             margin-right: 100px;
    //         }
    //     }

    // }
    .travel_lsits{
        width : 100%;
        height: 500px;
    }
    /deep/ .ivu-tabs-nav{
        // margin: 0 auto;
        margin-left: 320px;
    }
    /deep/ .ivu-tabs-tab{
        width      : 200px;
        height     : 100px;
        line-height: 100px;
    }
    /deep/ .ivu-tabs-tab{
        text-align: center;
        font-size : 24px;
        color     : #ff9d00;
    }
    /deep/ .ivu-tabs-ink-bar{
        background-color: #ff9d00;
    }
    .nonCon{
        width      : 100%;
        height     : 500px;
        text-align : center;
        padding-top: 50px;
        a{
            font-size: 24px;
            color    : #000;
            &:hover{
                color: #ff9d00;
            }
        }
    }
    .contain_box{
        height: 1080px;
    }
    .contain_inner{
        height: 100%;
    }



    .scroller {
        height: 100%;
    }
    // .user {
    //     height     : 25%;
    //     padding    : 0 12px;
    //     display    : flex;
    //     align-items: center;
    // }
    .travel_list{
        width        : 100%;
        height       : 245px;
        border       : solid 1px #333333;
        margin-bottom: 42px;
        padding      : 14px 52px 0 47px;
        overflow     : hidden;
        position     : relative;
    }
    .travel_title{
        overflow: hidden;
        h3{
            font-size   : 36px;
            font-weight : normal;
            font-stretch: normal;
            color       : #333333;
        }
    }
    .travel_content{
        margin-top: 10px;
        div{
            font-size: 24px;
            color    : #333333;
            display  : inline-block;
            a{
                position: absolute;
                bottom  : 10px;
                right   : 20px;
                color   : #0376b8;
                &:hover{
                    color: #ff9d00;
                }
            }
        }
    }
</style>
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
                    <div class="travel_box">
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
                        <!-- <public-list></public-list> -->
                    </div>
                </TabPane>
                <TabPane label="攻略" name="name2">
                    <div class="strategy_box">
                        <div v-if="strategyStatus">
                            <div v-for="(strategyList, index) in strategyLists" :key="index">
                                <public-list :data_item="strategyList" kind="strategy"></public-list>
                            </div>
                        </div>
                        <div v-else>
                            <div class="nonCon">
                                <router-link to="/strategy">你还未收藏过一篇攻略，快去查看更多有趣攻略吧>></router-link>
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
            travelLists     : null,
            strategyLists   : null,
            travelStatus    : true,
            strategyStatus  : true,
        }
    },
    components:{
        'public-list': PublicList,
    },
    methods:{
        travelCom(){
            // console.log('travelCom');
            this.collectionStatus = true;
        },
        strategyCom(){
            // console.log('strategyCom');
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
                    this.travelLists  = res.data.data;
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
                    this.strategyLists  = res.data.data;
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
</style>
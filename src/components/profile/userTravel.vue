<template>
    <div class="travel_wrapper">
        <div class="write_travel">
            <a href="javascript:;" @click="writeTravel"><span></span>写游记</a>
        </div>
        <div class="travel_lsits">
            <div v-for="(user_travel_item, index) in user_travel_items" :key="index">
                <travel-list :user_travel_item="user_travel_item"></travel-list>  
            </div>
            <Page :total="total_size" show-elevator :page-size="4" @on-change="changePage"/>          
        </div>
    </div>
</template>
<script>
import TravelList from './travelList';
import { mapGetters, mapActions} from 'vuex';
export default {
    data(){
        return{
            user_travel_items: null,
            total_size       : null,
        }
    },
    components:{
        'travel-list': TravelList,
    },
    methods:{
        ...mapActions(['changeWMStatusAction']),
        writeTravel(){
            this.$store.dispatch('changeWMStatusAction',true);
        },
        changePage(page){
            this.getTravelList(page);
        },
        getTravelList(currentPage){
            this.axios({
                url   : 'http://47.98.224.37:8080/api/v1/users/mytravels',
                method: 'get',
                params: {
                    page    : currentPage,
                    pageSize: 4,
                }
            }).then(res=>{
                if(res.data.status==200){
                    this.user_travel_items = res.data.data.entity;
                    this.total_size        = res.data.data.pageSize*res.data.data.totalPage;
                }else if(res.data.status==401){
                    this.$Message.error('登录已失效，请重新登录！');
                    this.$cookie.delete('nickname');
                    this.$Modal.confirm({
                        title  : '登录框',
                        content: "<h4>登录失效，你确认要进入登录页面吗？</h4>",
                        onOk   : () => {
                            this.$router.push('login');
                            this.$Message.success('登录页跳转成功！');
                        },
                        onCancel: () => {
                            this.$Message.info('登录页跳失败！');
                        }
                    });
                }
            })
        }
    },
    computed:{
        ...mapGetters(['getWMStatus']),
    },
    beforeMount(){
        this.axios({
            url   : 'http://47.98.224.37:8080/api/v1/users/mytravels',
            method: 'get',
            params: {
                page    : 1,
                pageSize: 4,
            }
        }).then(res=>{
            if(res.data.status==200){
                this.user_travel_items = res.data.data.entity;
                this.total_size        = res.data.data.pageSize*res.data.data.totalPage;
            }else if(res.data.status==401){
                this.$Message.error('登录已失效，请重新登录！');
                this.$cookie.delete('nickname');
                 this.$Modal.confirm({
                    title  : '登录框',
                    content: "<h4>登录失效，你确认要进入登录页面吗？</h4>",
                    onOk   : () => {
                        this.$router.push('login');
                        this.$Message.success('登录页跳转成功！');
                    },
                    onCancel: () => {
                        this.$Message.info('登录页跳失败！');
                    }
                });
            }
        })
    }
}
</script>
<style lang="scss" scoped>

    .travel_wrapper{
        padding: 20px 68px 0 56px;
        height : auto;
    }   
    .write_travel{
        text-align   : right;
        margin-bottom: 15px;
        span{
            display       : inline-block;
            width         : 25px;
            vertical-align: middle;
            height        : 36px;
            background    : url('../../images/edit.png') no-repeat 0 3px;
            margin-right  : 10px;
        }
        a{
            display  : inline-block;
            width    : 107px;
            font-size: 24px;
            color    : #ff9d00;
        }
    }
    .travel_lsits{
        width: 100%;
    }
    /deep/ .ivu-page{
        position : absolute;
        left     : 50%;
        transform: translateX(-178px);
        bottom   : -60px;
    }
</style>
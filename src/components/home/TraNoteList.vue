<template>
    <div class="tra_node_list">
        <div class="img_box">
            <img :src="hot_tra_note.image" alt="">

        </div>
        <div class="tn_content">
            <div class="node_container">
                <div class="node_tag">
                    <router-link to="/">
                        {{hot_tra_note.tag[0]?hot_tra_note.tag[0].name:'热门游记'}}
                    </router-link>
                </div>
                <div class="node_title">
                    <h3>
                        {{hot_tra_note.title}}
                    </h3>
                </div>
                <div class="node_content">
                    <p>
                        {{hot_tra_note.describe}}
                    </p>
                </div>
            </div>
            



            <div class="node_user">
                <div class="node_user_info">
                    <div class="user_profile">
                        <img :src="hot_tra_note.author.photo" alt="">
                    </div>
                    <div class="user_name">
                        <p>
                            {{hot_tra_note.author.name}}
                        </p>
                    </div>
                </div>


                <div class="node_user_options">
                    <ul>
                        <li>
                            <a href="javascript:;" @click="collectTravel(hot_tra_note.id)">
                                <img src="@/collect.png" alt="">
                                <span>{{hot_tra_note.collectnum}}</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" @click="praiseTravel(hot_tra_note.id)">
                                <img src="@/like.png" alt="">
                                <span>{{hot_tra_note.praisenum}}</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" @click="commentTravel(hot_tra_note.id)">
                                <img src="@/comment.png" alt="">
                                <span>{{hot_tra_note.clicknum}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <Modal v-model="commentModalStatus" draggable scrollable title="请写下你的想法" :footer-hide="true" :width="800">
            <div class="satisfy_box"> 
                <div class="satisfy_label">
                    <p>
                        好评度：
                    </p>
                </div>

                <InputNumber :max="5" :min="0" v-model="numberValue"></InputNumber>
            </div>
            <div class="commentCon_box">
                <div class="commentCon_label">
                    <p>
                        评论内容：
                    </p>
                </div>
                <div class="quill_box">
                    <quill-editor v-model="commentData"></quill-editor>
                </div>

            </div>
            
            <!-- v-model="formData.text" -->
            <Button type="primary" @click="submitComment" style="margin-left:300px;margin-top:10px">提交</Button>
            <Button @click="cancel" style="margin-top:10px;margin-left:10px">取消</Button>
        </Modal>
    </div>
</template>
<script>
export default {
    props: ['hot_tra_note'],
    data(){
        return{
            commentModalStatus: false,
            commentData       : null,
            numberValue       : 1,
        }
    },
    mounted(){
    },
    methods:{
        collectTravel(id){
            if(this.$cookie.get('nickname')){
                this.axios({
                    url   : `http://47.98.224.37:8080/api/v1/users/collect/travels/${this.hot_tra_note.id}`,
                    method: 'get'
                }).then(res=>{
                    if(res.data.status==200){
                        if(res.data.message=='收藏成功'){
                            this.$Message.success(res.data.message);
                            this.hot_tra_note.collectnum += 1;
                        }else{
                            this.$Message.success(res.data.message);
                            this.hot_tra_note.collectnum -= 1;
                        }
                    }else{
                        this.$Message.error(res.data.message);
                    }

                })
            }else{
                this.$Modal.confirm({
                    title  : '提示框',
                    content: '<br/><p style="font-size:18px; ">尚未登录，是否跳转到登录页面？</p>',
                    onOk   : () => {
                        this.$router.push({path:'/login'});
                    },
                    onCancel: () => {
                        this.$Message.info('操作取消！');
                    }
                });
            }
        },
        praiseTravel(id){
            if(this.$cookie.get('nickname')){
                this.axios({
                    url   : `http://47.98.224.37:8080/api/v1/users/praise/travels/${this.hot_tra_note.id}`,
                    method: 'get'
                }).then(res=>{
                    if(res.data.status==200){
                        if(res.data.message=='点赞成功'){
                            this.$Message.success(res.data.message);
                            this.hot_tra_note.praisenum += 1;
                        }else{
                            this.$Message.success(res.data.message);
                            this.hot_tra_note.praisenum -= 1;
                        }
                    }else{
                        this.$Message.error(res.data.message);
                    }

                })
            }else{
                this.$Modal.confirm({
                    title  : '提示框',
                    content: '<br/><p style="font-size:18px; ">尚未登录，是否跳转到登录页面？</p>',
                    onOk   : () => {
                        this.$router.push({path:'/login'});
                    },
                    onCancel: () => {
                        this.$Message.info('操作取消！');
                    }
                });
            }
        },
        commentTravel(id){
            if(this.$cookie.get('nickname')){
                this.commentModalStatus = true;
            }else{
                this.$Modal.confirm({
                    title  : '提示框',
                    content: '<br/><p style="font-size:18px; ">尚未登录，是否跳转到登录页面？</p>',
                    onOk   : () => {
                        this.$router.push({path:'/login'});
                    },
                    onCancel: () => {
                        this.$Message.info('操作取消！');
                    }
                });
            }
        },
        submitComment(){
            this.axios({
                url   : `http://47.98.224.37:8080/api/v1/comments/strategies/${this.hot_tra_note.id}`,
                method: 'post',
                data  : {
                        strategy_id: this.hot_tra_note.id,
                        content    : this.commentData,
                        satisfy    : this.numberValue
                },
                transformRequest:[
                    function(data){
                      let ret = "";
                      for(let it in data){
                        ret += encodeURIComponent(it)+"="+encodeURIComponent(data[it])+"&";
                      }
                      return ret;
                    }
                  ],
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                  }
            }).then(res=>{
                if(res.data.status==200){
                    this.$Message.success(res.data.message);
                    this.hot_tra_note.clicknum += 1;
                    this.commentModalStatus     = false;
                }else{
                    this.$Message.error(res.data.message);
                }
            })
        },
        cancel(){
            this.commentModalStatus = false;
            this.$Message.info('操作取消！');
        }
    }
}
</script>
<style lang="scss" scoped>
    .tra_node_list{
        margin-bottom: 60px;
        overflow     : hidden;
    }
    .node_container{
        height  : 240px;
        overflow: hidden;
    }
    .img_box{
        width           : 300px;
        height          : 300px;
        background-color: #0080e6;
        float           : left;
        margin-right    : 30px;
        img{
            width : 100%;
            height: 100%;
        }
    }
    .tn_content{
        float   : left;
        width   : 770px;
        overflow: hidden;
    }
    .node_tag{
        width        : 130px;
        height       : 40px;
        border-radius: 5px;
        border       : solid 1px #ff9d00;
        margin-bottom: 25px;
        a{
            display    : block;
            width      : 100%;
            height     : 100%;
            font-size  : 24px;
            color      : #ff9d00;
            text-align : center;
            line-height: 40px;
        }
    }
    .node_title{
        h3{
            font-size    : 30px;
            font-weight  : normal;
            font-stretch : normal;
            color        : #ff9d00;
            line-height  : 36px;
            overflow     : hidden;
            white-space  : nowrap;
            text-overflow: ellipsis;
        }
    }
    .node_content{
        margin-top: 20px;
        p{
            width         : 770px;
            font-family   : MicrosoftYaHei;
            font-size     : 14px;
            font-weight   : normal;
            font-stretch  : normal;
            line-height   : 24px;
            letter-spacing: 0px;
            color         : #333333;
        }
    }




    /*   游记  用户部分  */
    .node_user{
        margin-top: 10px;
        overflow  : hidden;
    }
    .node_user_info{
        float   : left;
        overflow: hidden;
    }
    .user_profile{
        width           : 37px;
        height          : 37px;
        background-color: #ff9d00;
        border-radius   : 50%;
        float           : left;
        margin-right    : 16px;
        overflow        : hidden;
        img{
            display: block;
            width  : 100%;
            height : 100%;
        }
    }
    .user_name{
        float: left;
        p{
            font-size  : 14px;
            height     : 37px;
            line-height: 37px;
            color      : #333333;
        }
    }

    .node_user_options{
        float     : right;
        margin-top: 10px;
        li{
            float       : left;
            margin-right: 77px;
            img{
                width         : 24px;
                height        : 24px;
                display       : inline-block;
                vertical-align: middle;
                margin-right  : 11px;
            }
            span{
                font-size: 14px;
                color    : #ff9d00;
            }
        }
    }







    .satisfy_box{
        margin-bottom: 20px;
    }
    .satisfy_label{
        float         : left;
        height        : 32px;
        vertical-align: middle;
        p{
            height     : 100%;
            line-height: 32px;
            width      : 150px;
            font-size  : 16px;
        }
    }
    .commentCon_label{
        margin-bottom: 20px;
        p{
            font-size: 16px;
        }
    }
    .quill_box{
        margin-top: 20px;
    }
</style>
<template>
    <div>
        <Modal v-model="modal12" draggable scrollable title="请写下你的想法" :footer-hide="true" :width="800">
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
        <div class="details_main">
            <!-- 这是详情的头像的那部分 -->
            <div class="details_top">
                <div class="details_touxiang">
                    <img style="width:240px;height:240px" :src="formData.image" alt="">
                </div>
                <div class="details_name">{{formData.author.username}}</div>
                <div v-if="formData.isCollected">
                    <div class="details_focus" @click="focus">{{gz}}</div>
                </div>
                <div v-else>
                    <div class="details_focus yigz" @click="focus">{{gz}}</div>
                </div>
                <div class="details_de">
                    <div class="details_de1">出发日期 / <span>{{formData.created}}</span></div>
                    <div class="details_de2">出行天数 / <span>{{formData.day}}</span>天</div>
                    <div class="details_de3">人均消费 / <span>{{formData.price}}RMB</span></div>
                </div>
            </div>
            <!-- 这是详情的标题加评论部分 -->
            <div class="details_center">
                <div class="details_title"  v-html="data.title">
                </div>
                <div class="details_comment">
                    <Button @click="commentModal" class="details_comment1"><span>{{formData.clicknum}} </span>评论</Button>
                    <Button class="details_comment2" @click="collectStrategy">
                        <span>{{formData.collectnum}}</span> 收藏
                    </Button>
                    
                    <!-- <div class="details_comment2"><span>{{formData.collectnum}}</span> 收藏</div> -->
                </div>
            </div>
            <!-- 这是文章加目录 -->
            <div class="details_content">
                <!-- 文章 -->
                <div class="details_article">
                    <div v-html="data.content"></div>
                  <Button class="load_more" @click="more">加载更多></Button>

                </div>
                <!-- 目录 -->
                <div class="details_catalog">
                    <div class="details_c1">
                        <div class="details_c11">攻略目录</div>
                        <div class="detatail_c12" v-for="(arr,index) in arrs" :key="index">
                            <div class="details_spot">{{arr}}</div>
                            <div class="details_he">
                                <div class="deatails_he1"></div>
                                <div class="deatails_he2"></div>
                                <div class="deatails_he1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';//在线编辑器
export default {
    components: {
        quillEditor
    },
    data(){
        return {
            commentData: null,
            numberValue: 1,
            formData   : {
                text       : '',
                title      : '',
                image      : '',
                day        : '',
                price      : '',
                isCollected: '',
                created    : '',
                "author"   : {
                    "id"      : 5,
                    "username": "test",
                    "follow"  : false
                }
            },
            data:{
                content: '1111'
            },
            gz     : '+关注',
            ha     : true,
            modal12: false,
            arrs   : ["厦门速览",'特别推荐','线路推荐','交通指南','景点推荐','鼓浪屿','菽庄花园','日光岩']
        }
    },
    methods:{
        getDetails(id){
            this.axios({
                url   : `http://47.98.224.37:8080/api/v1/strategies/${this.$route.query.id}`,
                method: 'get'
            }).then(res=>{
                this.data     = res.data.data;
                this.formData = res.data.data;
                if(!this.formData){
                    this.$Modal.info({
                    title  : '提示框',
                    content: '<br/><p style="font-size:18px; ">该攻略已被删除，请选择其他攻略</p>',
                    onOk   : () => {
                        this.$router.push({path:'/profile',query:{id:this.$cookie.get('id')}});
                    },
                    // onCancel: () => {
                    //     this.$Message.info('操作取消！');
                    //     this.$router.push('home');
                    // }
                });
                }
            })
        },
        focus(){
            if(this.$cookie.get('nickname')){
                if(this.gz=='+关注'){
                    this.$Message.success('关注成功！');
                    this.gz                   = '已关注';
                    this.formData.isCollected = false
                }else{
                    this.$Message.success('已取消关注！');
                    this.gz                   = '+关注';
                    this.formData.isCollected = true
                }
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
        more(){
            const title   = '更多';
            const content = '<p>没有更多了哦！</p>';
            this.$Modal.info({
                title  : title,
                content: content
            });
        },
        commentModal(){
            if(this.$cookie.get('nickname')){
                this.modal12 = true;
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
                url   : `http://47.98.224.37:8080/api/v1/comments/strategies/${this.formData.id}`,
                method: 'post',
                data  : {
                        strategy_id: this.formData.id,
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
                    this.formData.clicknum += 1;
                    this.modal12            = false;
                }else{
                    this.$Message.error(res.data.message);
                }
            })
        },
        cancel(){
            this.modal12 = false;
            this.$Message.info('操作取消！');
        },
        collectStrategy(){
            if(this.$cookie.get('nickname')){
                this.axios({
                    url   : `http://47.98.224.37:8080/api/v1/users/collect/strategies/${this.formData.id}`,
                    method: 'get'
                }).then(res=>{
                    if(res.data.status==200){
                        this.$Message.success(res.data.message);
                        if(res.data.message=='收藏成功'){
                            this.formData.collectnum += 1;
                        }else{
                            this.formData.collectnum -= 1;
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
        }
    },
    // mounted(){
    //     this.getDetails()
    // },
    beforeMount(){
        this.getDetails()
    }

}
</script>
<style lang="scss">
.details_spot{
    width      : 95px;
    height     : 24px;
    font-size  : 16px;
    line-height: 24px;
}
.details_he{
    margin: 0 4px;
    .deatails_he1{
        width     : 1px;
        height    : 12px;
        margin    : 0 auto;
        background: #333
    }
    .deatails_he2{
        width        : 10px;
        height       : 10px;
        border       : 1px solid #333;
        border-radius: 5px;
        margin       : 0 auto;
    }
}
.details_content{
    width     : 1200px;
    min-height: 800px;
    overflow  : hidden;
    .details_article{
        text-indent: 28px;
        width      : 950px;
        min-height : 100px;
        float      : left;
        line-height: 28px;
        font-size  : 14px;
        img{
            display: block;
            width  : 500px;
            height : 400px;
            margin : 25px  auto 25px;
        }
        .load_more{
            cursor       : pointer;
            width        : 702px;
            height       : 57px;
            border-radius: 7px;
            border       : 1px solid #ff9c00;
            margin       : 44px auto 146px;
            color        : #ff9c00;
            text-align   : center;
            line-height  : 55px;
            font-size    : 16px;
            display      : block;
        }
    }
    .details_catalog{
        float     : right;
        width     : 250px;
        min-height: 100px;
        text-align: center;
        .details_c1{
            min-width : 95px;
            min-height: 800px;
            float     : right;
            .details_c11{
                width        : 95px;
                height       : 42px;
                font-size    : 20px;
                line-height  : 42px;
                font-weight  : 500;
                margin-bottom: 28px;
            }
            .detatail_c12{

            }
        }


    }

}
//标题：厦门速览
.details_center{
    width : 1200px;
    height: 85px;
    .details_comment{
        width    : 318px;
        height   : 85px;
        font-size: 14px;
        float    : left;
    }
    .details_comment1{
        min-width  : 110px;
        line-height: 30px;
        float      : left;
        border     : 0;
        margin-top : 28px;
        background : url(../../images/comment.png) no-repeat;
        text-indent: 12px;
        display    : block;
        padding    : 0;
    }
      .details_comment2{
        min-width  : 110px;
        line-height: 30px;
        float      : left;
        border     : 0;
        margin-top : 28px;
        background : url(../../images/collect.png) no-repeat;
        text-indent: 12px;
        display    : block;
        padding    : 0;
        
    }
    .details_title{
        width      : 880px;
        float      : left;
        font-size  : 24px;
        color      : #333;
        line-height: 85px;
        height     : 85px;
        text-align : center;
        font-weight: 500;
    }
}
.details_main{
    width     : 1200px;
    min-height: 1500px;
    margin    : 0 auto;
    overflow  : hidden;
    //顶部
    .details_top{
        width        : 1200px;
        height       : 240px;
        margin-top   : 69px;
        margin-bottom: 5px;
        .details_touxiang{
            width        : 240px;
            height       : 240px;
            float        : left;
            border-radius: 50%;
            overflow     : hidden;
        }
        .details_name{
            width      : 240px;
            height     : 144px;
            font-size  : 24px;
            font-weight: 300;
            text-align : center;
            line-height: 144px;
            float      : left;
        }
        .details_focus{
            width        : 80px;
            height       : 40px;
            border       : 1px solid orange;
            border-radius: 6px;
            float        : left;
            font-size    : 14px;
            line-height  : 40px;
            text-align   : center;
            color        : orange;
            margin-top   : 62px;
            cursor       : pointer;
        }
        .yigz{
            color: #999;
        }
        .details_de{
            width : 950px;
            height: 60px;
            float : left;
            .details_de1{
                float       : left;
                width       : 260px;
                height      : 60px;
                text-indent : 65px;
                background  : url(../../images/start-time.png) no-repeat;
                line-height : 82px;
                margin-right: 80px;
            }
            .details_de2{
                float       : left;
                width       : 290px;
                height      : 55px;
                text-indent : 61px;
                background  : url(../../images/days.png) no-repeat;
                line-height : 72px;
                margin-top  : 5px;
                margin-right: 80px;
            }
            .details_de3{
                float      : left;
                width      : 240px;
                height     : 60px;
                text-indent: 64px;
                background : url(../../images/consume.png) no-repeat;
                line-height: 82px;
            }
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
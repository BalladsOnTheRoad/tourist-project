<template>
    <div class="ue_card">
        <div class="card_header_bg">
        </div>

        <div class="write_travel_content">
            <div class="wt_title">
                <h3>
                    写游记
                </h3>
            </div>
            <p class="edit_line"></p>


            <div class="wt_form">
                <Form ref="formInline" :model="formInline"  inline :rules="ruleValidate">
                        
                    
                    <FormItem prop="title">
                        <div class="form_label">
                            <p>标题：</p>
                        </div>
                        <i-input type="text" v-model="formInline.title" >
                        </i-input>
                    </FormItem>

                    <FormItem prop="content">
                        <div class="form_label">
                            <p class="">游记内容：</p>
                        </div>
                       <br>
                        <div class="write_travel_box">
                            <quill-editor v-model="formInline.content"
                                          ref = "myQuillEditor"

                                        :options = "editorOption">
                            </quill-editor>
                        </div>
                        
                    </FormItem>
                    <FormItem>
                        <div class="button_wrapper">
                            <Button type="default" @click="handleSubmit('formInline')">确定</Button>
                            <Button type="default" @click="formCancel">取消</Button>
                        </div>
                    </FormItem>

                </Form>
            </div>

        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex';
import Quill from 'quill';

export default {
    inject: ['reload'],
    data () {
        return {
            formInline: {
                title  : '',
                content: '<h2>我的游记</h2>',
            },
            imgList     : [],
            size        : 0,
            uploadStatus: true,
            ruleValidate: {
                title: [
                    { required: true, message: '标题不允许为空！', trigger: 'blur' }
                ]
            },
            editorOption: {
            }
        }
    },
    computed:{
        ...mapGetters(['getWMStatus']),
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    },
    methods: {
        ...mapActions(['changeWMStatusAction']),
        formCancel(){
            this.$store.dispatch('changeWMStatusAction',false);
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                     var travelData          = JSON.parse(JSON.stringify(this.formInline));
                         travelData.image    = '1';
                         travelData.describe = this.formInline.content;
                         travelData.areaId   = 1;
                    this.axios({
                        url             : 'http://47.98.224.37:8080/api/v1/travels/add',
                        method          : 'post',
                        data            : travelData,
                        transformRequest: [
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
                            this.$Message.success({
                                content : "添加游记成功!",
                                duration: 2
                            });
                            this.$store.dispatch('changeWMStatusAction',false);
                            this.reload();
                            this.formInline = null;
                        }else{
                            this.$Message.error(res.data.message);
                        }
                    })
                } else {
                    this.$Message.error('游记书写有误,请重新书写.');
                }
            })
            return false;
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
    .ue_card{
        width     : 700px;
        height    : 680px;
        position  : fixed;
        left      : 50%;
        top       : 50%;
        transform : translate(-350px,-340px);
        background: #ffffff;
        padding   : 0 30px;
    }

    .write_travel_content{
    }
    /* 修改个人信息内容  */
    .wt_title{
        padding-top  : 44px;
        margin-bottom: 25px;
        h3{
            font-size   : 24px;
            font-weight : normal;
            font-stretch: normal;
            color       : #000000;
        }
    }

    .edit_line{
        width           : 100%;
        height          : 1px;
        background-color: #e8e8e8;
    }


    .write_travel_box{
        margin-top: 10px;
    }


    /* 用户form */
    .user_img_upload{
        overflow     : hidden;
        margin-bottom: 20px;
    }
    .wt_form{
        padding-top: 13px;
    }
    .form_label{
        float : left;
        width : 96px;
        height: 40px;
        p{
            font-size   : 18px;
            font-weight : normal;
            font-stretch: normal;
            line-height : 40px;
            color       : #000000;
        }
        
    }
    /deep/ .ivu-form-item-content{
        &::after{
             content  : "";
             clear    : both;
             display  : block;
             font-size: 0;
             height   : 0;
        }
    }
    .button_wrapper{
        padding-left: 270px;
    }
    .ivu-form-item{
        margin-bottom: 20px;
    }
    /deep/ .ivu-input-wrapper{
        float  : left;
        width  : 350px;
        padding: 4px 0;
    }
    /deep/ .ivu-input{
        width: 100%;
    }
    /deep/ .ivu-radio-group{
        padding: 4px 0;
    }
    /deep/ .ivu-form-item-error-tip{
        position    : absolute;
        right       : 0;
        bottom      : 0;
        padding-left: 95px;
    }
    /deep/ .ql-editor{
        height: 300px;
    }
</style>
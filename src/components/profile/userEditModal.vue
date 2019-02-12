<template>
    <div class="ue_card">
        <div class="card_header_bg">
        </div>

        <div class="edit_content">
            <div class="edit_title">
                <h3>
                    修改个人资料
                </h3>
            </div>
            <p class="edit_line"></p>


            <div class="edit_form">
                <Form ref="formInline" :model="formInline"  inline :rules="ruleValidate">
                    <div class="user_img_upload">
                        <div class="form_label">
                            <p>头像：</p>
                        </div>
                        <div class="upload">
                            <div class="upload_warp">
                                <div class="upload_button" @click="fileClick">
                                </div>
                                <div class="upload_warp_img_div" v-for="(item,index) of imgList" :key="index">
                                    <img :src="imgList[imgList.length-1].file.src" alt="">
                                </div>
                            </div>
                            <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
                        </div>
                    </div>
                        
                    
                    <FormItem prop="user">
                        <div class="form_label">
                            <p>用户名：</p>
                        </div>
                        <i-input type="text" v-model="formInline.user" >
                        </i-input>
                    </FormItem>
                    <FormItem prop="sex">
                        <div class="form_label">
                            <p>性别：</p>
                        </div>
                        <RadioGroup v-model="formInline.sex">
                            <Radio label="男"></Radio>
                            <Radio label="女"></Radio>
                            <Radio label="未知"></Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem prop="resume">
                        <div class="form_label">
                            <p>个性签名：</p>
                        </div>
                        <i-input v-model="formInline.resume" type="textarea" :autosize="{minRows: 6,maxRows: 6}"></i-input>
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
export default {
    data () {
        return {
             formInline: {
                user_img_path: '',
                user         : '',
                sex          : '',
                resume       : '',
            },
            imgList     : [],
            size        : 0,
            uploadStatus: true,
            ruleValidate: {
                user: [
                    { required: true, message: '用户名不允许为空', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '用户性别不允许为空', trigger: 'blur' }
                ],
                resume: [
                    { required: true, message: '个人简介不允许为空', trigger: 'blur' }
                ]
            }
        }
    },
    computed:{
        ...mapGetters(['getUEMStatus']),
    },
    methods: {
        ...mapActions(['changeUEMStatusAction']),
        formCancel(){
            this.$store.dispatch('changeUEMStatusAction',null);
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success({
                        content : "修改用户信息成功",
                        duration: 2
                    });
                    this.$store.dispatch('changeUEMStatusAction',null);
                    console.log(this.formInline);
                } else {
                    this.$Message.error('修改用户信息失败，请重新修改!');
                }
            })
        },
        fileClick() {
            document.getElementById('upload_file').click();
        },
        fileChange(el) {
              if (!el.target.files[0].size) return;
              this.fileList(el.target);
              el.target.value = ''
        },
        fileList(fileList) {
                var _this = this;
                let files = fileList.files;
              for (let i = 0; i < files.length; i++) {
                  if (files[i].type != '') {
                      this.fileAdd(files[i]);
                  } else {
                      this.folders(fileList.items[i]);
                  }
              }
              var file   = fileList.files[0];
              var imgStr = '';
              if(typeof FileReader != 'undefined') {
                var reader = new FileReader();
                var imgFile;
                reader.readAsDataURL(file);
                var str           = '';
                    reader.onload = function(e) {
                  imgFile                        = e.target.result;
                  imgStr                         = e.target.result;
                  _this.formInline.user_img_path = imgStr

                };
              } else {
                var URL      = window.URL || window.webkitURL;
                var imageURL = URL.createObjectURL(file);
              }
              
          },
          fileAdd(file) {
              this.size = this.size + file.size;
              if (file.type.indexOf('image') == -1) {
                  file.src = 'wenjian.png';
                  this.imgList.push({
                      file
                  });
              } else {
                  let reader     = new FileReader();
                      reader.vue = this;
                  reader.readAsDataURL(file);
                  reader.onload = function () {
                      file.src = this.result;
                      this.vue.imgList.push({
                          file
                      });
                  }
              }
          },
    }
}
</script>
<style lang="scss" scoped>
    .ue_card{
        width          : 389px;
        height         : 550px;
        position       : fixed;
        left           : 50%;
        top            : 195px;
        transform      : translateX(-195px);
        background     : url('../../images/user_edit01.png') no-repeat 0px 0px;
        background-size: 389px 550px;
    }
    .card_header_bg{
        width     : 177px;
        height    : 140px;
        position  : absolute;
        top       : 0;
        right     : 0;
        background: url('../../images/user_edit02.png') no-repeat -6px 0px;
    }

    .edit_content{
        width : 377px;
        margin: 0 auto;
    }
    /* 修改个人信息内容  */
    .edit_title{
        padding-top  : 44px;
        padding-left : 43px;
        margin-bottom: 25px;
        h3{
            font-size   : 24px;
            font-weight : normal;
            font-stretch: normal;
            color       : #000000;
        }
    }

    .edit_line{
        width           : 350px;
        height          : 1px;
        background-color: #e8e8e8;
    }


    /*编辑资料 头像部分*/
     .upload_warp_img_div img {
      width : 100%;
      height: 100%;
    }

    .upload_warp_img_div {
      width        : 54px;
      height       : 54px;
      border-radius: 50%;
      position     : absolute;
      top          : 0;
      left         : 0;
    }
    .upload_button {
      width : 100%;
      height: 100%;
      cursor: pointer;
    }

    .upload_warp {
      width : 100%;
      height: 100%;
    }

    .upload {
      width           : 54px;
      height          : 54px;
      background-color: #c7c5c5;
      border-radius   : 50%;
      position        : relative;
      float           : left;
    }


    /* 用户form */
    .user_img_upload{
        overflow     : hidden;
        margin-bottom: 20px;
    }
    .edit_form{
        padding-top : 13px;
        padding-left: 38px;
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
        padding-top : 15px;
        padding-left: 81px;
    }
    .ivu-form-item{
        margin-bottom: 20px;
    }
    /deep/ .ivu-input-wrapper{
        float  : left;
        width  : 189px;
        padding: 4px 0;
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
</style>
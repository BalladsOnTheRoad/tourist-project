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
               <Modal v-model="photoModalStatus" title="选择头像框" style="width:650px;">
                   <div>
                       <ul class="user_photo_list">
                           <li v-for="(userPhotoList, index) in userPhotoLists" :key="index" @click="choosePhoto(index)">
                               <img :src="userPhotoList.photoname" :alt="userPhotoList.id">
                           </li>
                       </ul>
                   </div>
                </Modal>
                <Form ref="formInline" :model="formInline"  inline :rules="ruleValidate">
                    <div class="user_img_upload">
                        <div class="form_label">
                            <p>头像：</p>
                        </div>
                        <div class="upload">
                            <img :src="editUserInfo.photo" alt="用户头像" @click="photoModalStatus= true">
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
    inject: ['reload'],
    data () {
        return {
            photoModalStatus: false,
            formInline      : {
                userPhoto: '',
                user     : '',
                sex      : '',
                resume   : '',
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
            },
            editUserInfo  : null,
            userPhotoLists: null,
        }
    },
    computed:{
        ...mapGetters(['getUEMStatus','getUserInfo']),
    },
    methods: {
        ...mapActions(['changeUEMStatusAction']),
        formCancel(){
            this.$store.dispatch('changeUEMStatusAction',false);
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    if(this.formInline.sex=='男'){
                        this.formInline.sex = 1;
                    }else{
                        this.formInline.sex = 2;
                    }
                    this.axios({
                        url   : 'http://47.98.224.37:8080/api/v1/users/edit',
                        method: 'POST',
                        data  : {
                            photo    : this.formInline.userPhoto,
                            nickname : this.formInline.user,
                            sex      : this.formInline.sex,
                            signature: this.formInline.resume
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
                            this.$Message.success({
                                content : res.data.message,
                                duration: 2
                            });
                            this.$store.dispatch('changeUEMStatusAction',false);
                            this.reload();
                        }else{
                            this.$Message.error(res.data.message);
                        }
                    })
                } else {
                    this.$Message.error('修改用户信息失败，请重新修改!');
                }
            })
        },
        changePhoto(){
        },
        choosePhoto(index){
            this.formInline.userPhoto = this.userPhotoLists[index].photoname;
            this.photoModalStatus     = false;
            this.editUserInfo.photo   = this.formInline.userPhoto;
        }
    },
    mounted(){
        this.editUserInfo = this.getUserInfo;
        if(this.editUserInfo.photo){
            this.formInline.userPhoto = this.editUserInfo.photo;
            this.formInline.user      = this.editUserInfo.nickname;
            if(this.editUserInfo.sex==1){
                this.formInline.sex = '男';
            }else{
                this.formInline.sex = '女';
            }
            this.formInline.resume = this.editUserInfo.signature;
        }
        
    },
    beforeMount(){
        this.axios({
            url    : 'http://47.98.224.37:8080/api/v1/photo/getphoto',
            method : 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res=>{
            if(res.data.status==200){
                this.userPhotoLists = res.data.data;
            }else{
                this.$Message.error('获取系统用户头像失败！');
            }
        })
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
      overflow        : hidden;
      img{
          display: block;
          width  : 100%;
          height : 100%;
          cursor : pointer;
      }
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

    // 用户头像
    .user_photo_list{
        overflow: hidden;
        li{
            float        : left;
            margin-right : 20px;
            margin-bottom: 20px;
            cursor       : pointer;
        }
        
        li:nth-of-type(5n){
            margin-right: 0;
        }
        img{
            display      : block;
            width        : 100px;
            height       : 100px;
            border-radius: 50%;
        }
    }
    /deep/ .ivu-modal-content{
        width: 615px;
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
    /deep/ .ivu-modal{
        top: 250px;
    }
</style>
<template>
  <Row type="flex" style="height:100%; ">
    <div class="login_box_outer">
        <i-col span="8" class="login_box_inner" offset="8">

          <div class="login_logo_outer">
            <div class="login_logo_inner">
              <img src="../../images/logo.png" alt="" class="logo" @click="backHome">
            </div>
          </div>

          <div class="project_name">
            <h1>
              小猪旅行
            </h1>
          </div>


          <div class="form_box">
            <Form ref="forget_form" :model="forget_form" :rules="ruleInline" show-message>
              <FormItem prop="email">
                  <i-input type="text" prefix="md-mail" placeholder="输入邮箱"  style="width: 283px" v-model="forget_form.email"/>
              </FormItem>
              <FormItem prop="verification">
                  <i-input type="text" prefix="ios-lock" placeholder="输入验证码"  style="width: 185px" v-model="forget_form.verification"/>
                  <Button class="get_verifycation" @click="getCode">获取验证码</Button>
              </FormItem>
              <FormItem>
                  <Button type="primary"  class="forget_button" @click="submitForm('forget_form')">确定</Button>
              </FormItem>
            </Form>



            <div class="form_bottom">
              <p class="form_login"><router-link to="/login">登录</router-link></p>
              <p class="form_register"><router-link to="/register" >注册</router-link></p>
            </div>
            <div class="close_form">
              <a href="javascript:;" class="close_button">
              </a>
            </div>

          </div>

        </i-col>
    </div>
  </Row>
</template>
<script>
export default {
  data () {
    return {
      forget_form: {
          email       : '',
          verification: ''
      },
      ruleInline: {
          email: [
              { required: true, message: '请输入你的邮箱！', trigger: 'blur' },
                { type: 'email', message: '邮箱格式不正确！', trigger: 'blur' }
          ],
          verification: [
              { required: true, message: '请输入验证码！', trigger: 'blur' ,type: 'string'}
          ]
      }
    }
  },
  methods: {
    getCode() {
      this.$Message.info('此项功能没有。');
      // if(this.forget_form.email){
      //   this.axios({
      //     url   : 'http://47.98.224.37:8080/api/v1/users/forgetpassword',
      //     method: 'get',
      //     params: {
      //       email: this.forget_form.email
      //     }
      //   }).then(res=>{
      //     if(res.data.status==200){
      //       this.$Message.success(res.data.message);
      //     }else{
      //       this.$Message.error(res.data.message);
      //     }
      //   })
      // }else{
      //   this.$Message.error('请输入你的邮箱');
      // }
        // this.$refs[name].validate((valid) => {
        //     if (valid) {
        //         this.$Message.success('Success!');
        //         this.axios({
        //           url:'http://47.98.224.37:8080/api/v1/users/forgetpassword',
        //           method:'get',
        //           params:{
        //             email:this.forget_form.email
        //           }
        //         }).then(res=>{
        //           if(res.data.status==200){
        //             this.$Message.success(res.data.message);

        //           }
        //         })
        //     } else {
        //         this.$Message.error('Fail!');
        //     }
        // })
    },
    submitForm(name){
      this.$refs[name].validate((valid) => {
          if (valid) {
              this.axios({
                url   : 'http://47.98.224.37:8080/api/v1/users/checkcode',
                method: 'post',
                data  : {
                  code: this.forget_form.verification
                }
              }).then(res=>{
                if(res.data.status==200){
                  this.$Message.success(res.data.message);
                  this.$router.push('changepass');
                }else{
                  this.$Message.error(res.data.message);
                }
              })
          } else {
              this.$Message.error('输入有误，请重新输入！');
          }
      })
    },
    backHome(){
      this.$router.push('home');
    },
  },
  // beforeRouteLeave (to, from, next) {
  //   this.$Modal.info({
  //       title  : '提示框',
  //       content: '<br/><p style="font-size:18px; ">你确认要离开该忘记密码页面吗？</p>',
  //       onOk   : () => {
  //           this.$Message.info('操作成功！');
  //           next();
  //       },
  //       onCancel: () => {
  //           this.$Message.info('操作取消！');
  //       }
  //   });
  // }
}
</script>
<style lang="scss" scoped>
  @mixin circleBox($length,$opacity){
    width        : $length;
    height       : $length;
    border-radius: 50%;
    background   : rgba($color: #ffffff, $alpha: $opacity);
  }
  .login_box_outer{
    width          : 100%;
    height         : 100%;
    background     : url('../../images/login_bg.png') no-repeat 0 -40px;
    background-size: cover;
  }
  .login_box_inner{
    margin-top  : 200px;
    padding-top : 38px;
    padding-left: 20px;
  }
  .login_logo_outer{
    @include circleBox(115px, 0.42);
    padding: 10px;
    margin : 0 auto;
  }
  .login_logo_inner{
    @include circleBox(95px, 0.39);
    margin     : 0 auto;
    padding-top: 7px;
    img{
      cursor: pointer;
    }
  }
  .project_name{
    margin-top: 20px;
    h1{
      height        : 34px;
      text-align    : center;
      font-size     : 32px;
      font-weight   : normal;
      font-stretch  : normal;
      line-height   : 30px;
      letter-spacing: 0px;
      color         : #ff9d00;
      margin        : 0 auto;
    }
  }
  .form_box{
    margin-top: 60px;
  }
  /deep/ .ivu-input-default{
      height   : 44px;
      font-size: 16px;
  }
  /deep/ .ivu-form-item-content{
      width : 283px;
      height: 44px;
      margin: 0 auto;
  }
  /deep/ .ivu-input-prefix{
    width      : 30px;
    height     : 44px;
    line-height: 42px;
    font-size  : 16px;
  }
  
  .forget_button{
    width           : 283px;
    height          : 48px;
    background-color: #ff9d00;
    box-shadow      : 0px 1px 1px 0px
		rgba(11, 2, 5, 0.52);
	  border        : solid 1px #9d9d9d;
	  font-size     : 18px;
	  font-weight   : normal;
	  font-stretch  : normal;
	  line-height   : 30px;
	  letter-spacing: 3px;
	  color         : #ffffff;
  }
  
  .form_bottom{
      width         : 283px;
      color         : #ffffff;
      overflow      : hidden;
      margin        : 0 auto;
      height        : 24px;
      font-family   : MicrosoftYaHei;
      font-size     : 16px;
      font-weight   : normal;
      font-stretch  : normal;
      line-height   : 24px;
      letter-spacing: 0px;
      color         : #ffffff;
      padding       : 0 5px;
      margin-top    : -10px;
      a{
        color: #ffffff;

        &:hover{
            color: #ff9d00;
        }
      }
    .form_login{
      float: left;
    }
    .form_register{
      float: right;
    }
  }
  
  .close_form{
    width     : 20px;
    height    : 20px;
    margin    : 0 auto;
    background: url('../../images/login_return.png') no-repeat center;
    margin-top: 10px;
    .close_button{
      display    : block;
      width      : 20px;
      height     : 20px;
      background : url('../../images/login_return.png') no-repeat center;
      transform  : rotate(90deg);
      margin-left: 2px;
    }
  }
  /deep/ .ivu-form-item-error-tip{
  font-size: 15px;
}
/deep/ .ivu-form-item-required {
  margin-bottom: 26px;
}   
.get_verifycation{
    width           : 102px;
    height          : 44px;
    background-color: #ff9d00;
    border          : solid 1px #9d9d9d;
    position        : absolute;
    right           : 0;
    top             : 0;
    font-family     : MicrosoftYaHei;
    font-size       : 16px;
    font-weight     : normal;
    font-stretch    : normal;
    color           : #ffffff;
    letter-spacing  : 0px;
    text-align      : center;
    padding-left    : 10px;
}
  
</style>

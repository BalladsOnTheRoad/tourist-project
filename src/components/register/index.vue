<template>
  <Row type="flex" style="height:100%; ">
    <div class="login_box_outer">
        <i-col span="8" class="login_box_inner" offset="8">

          <div class="login_logo_outer">
            <div class="login_logo_inner">
              <img src="../../images/logo.png" alt="" class="logo">
            </div>
          </div>

          <div class="project_name">
            <h1>
              小猪旅行
            </h1>
          </div>


          <div class="form_box">
            <Form ref="register_form" :model="register_form" :rules="ruleInline">
              <FormItem prop="email">
                  <i-input type="text" prefix="md-person" placeholder="输入邮箱"  style="width: 283px" v-model="register_form.email"/>
              </FormItem>
              <FormItem prop="password">
                  <i-input type="password" prefix="ios-lock" placeholder="输入密码"  style="width: 283px" v-model="register_form.password"/>
              </FormItem>
              <FormItem prop="repassword">
                  <i-input type="password" prefix="ios-lock" placeholder="确认密码"  style="width: 283px" v-model="register_form.repassword"/>
              </FormItem>
              <FormItem>
                  <Button type="primary" @click="handleSubmit('register_form')" class="register_button">注册</Button>
              </FormItem>
            </Form>



            <div class="form_bottom">
              <p class="form_login"><router-link to="/login">登录</router-link></p>
              <p class="forget_pass"><router-link to="/forgetpass">忘记密码？</router-link></p>
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
    const validatePass = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请输入你的密码！'));
      } else {
          if (this.register_form.repassword !== '') {
              this.$refs.register_form.validateField('repassword');
          }
          callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请重新输入你的密码！'));
        } else if (value !== this.register_form.password) {
            callback(new Error('两次输入的密码不一致！'));
        } else {
            callback();
        }
    };
    return {
      register_form: {
          email     : '',
          password  : '',
          repassword: ''
      },
      ruleInline: {
          email: [
                { required: true, message: '请输入你的邮箱！', trigger: 'blur' },
                { type: 'email', message: '邮箱格式不正确！', trigger: 'blur' }
          ],
          password: [
              { validator: validatePass, trigger: 'blur' }
          ],
          repassword: [
              { validator: validatePassCheck, trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.axios({
                  url   : 'http://47.98.224.37:8080/api/v1/users/register',
                  method: 'post',
                  data  : {
                    email   : this.register_form.email,
                    password: this.register_form.password
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
                    this.$Modal.confirm({
                      title  : '登录对话框',
                      content: '<p>你是否需要登录？</p>',
                      onOk   : () => {
                          this.$router.push('login');
                          this.$Message.success('操作成功！')
                      },
                      onCancel: () => {
                          this.$Message.info('操作取消！');
                      }
                  });
                  }else{
                    this.$Message.error(res.data.message);
                  }
                })
            } else {
                this.$Message.error('注册失败！');
            }
        })
    } 
  },
  // beforeRouteLeave (to, from, next) {
  //   return false;
  //   // if(this.isRegister){
  //   //   this.$Modal.info({
  //   //       title  : '提示框',
  //   //       content: '<br/><p style="font-size:18px; ">你确认要离开该注册页吗？</p>',
  //   //       onOk   : () => {
  //   //           this.$Message.info('操作成功！');
  //   //           next(this.isRegister);
  //   //       },
  //   //       onCancel: () => {
  //   //           this.$Message.info('操作取消！');
  //   //       }
  //   //   });
  //   // }else{
  //   //   return false;
  //   // }
    
  // },
  mounted(){

  }
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
  }
  .logo{
  width  : 100%;
  height : auto;
  display: block;
  margin : 0 auto;
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
    margin-top: 10px;
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

.register_button{
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
    .forget_pass{
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
</style>

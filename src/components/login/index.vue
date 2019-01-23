<template>
  <Row type="flex" style="height:100%; ">
    <div class="login_box_outer">
        <i-col span="8" class="login_box_inner" offset="8">

          <div class="login_logo_outer">
            <div class="login_logo_inner">
              
            </div>
          </div>

          <div class="project_name">
            <h1>
              项目名
            </h1>
          </div>


          <div class="form_box">
            <Form ref="login_form" :model="login_form" :rules="ruleInline">
              <FormItem prop="user">
                  <!-- <i-input type="text" v-model="login_form.user" placeholder="账号" class="login_user">
                      <Icon type="md-person" slot="prepend" style="width:20px; background:#ffffff" size="15"></Icon>
                  </i-input> -->
                  <i-input type="text" prefix="md-person" placeholder="账号" class="login_user" style="width: 283px" v-model="login_form.user"/>
              </FormItem>
              <FormItem prop="password">
                  <!-- <i-input type="password" v-model="login_form.password" placeholder="密码">
                      <Icon type="ios-lock" slot="prepend" style="width:20px; background:#ffffff" size="15"></Icon>
                  </i-input> -->
                  <i-input type="password" prefix="ios-lock" placeholder="密码" class="login_password" style="width: 283px" v-model="login_form.password"/>

              </FormItem>
              <FormItem>
                  <Button type="primary" @click="handleSubmit('login_form')" class="login_button">登录</Button>
              </FormItem>
            </Form>



            <div class="form_bottom">
              <p class="register">
                <router-link to="/register">注册</router-link>
                </p>
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
    return {
      login_form: {
          user    : '',
          password: ''
      },
      ruleInline: {
          user: [
              { required: true, message: '请输入你的账号 ！', trigger: 'blur'}
          ],
          password: [
              { required: true, message: '请输入你的密码！', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码长度不得少于6位 ！', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('Success!');
            } else {
                this.$Message.error('Fail!');
            }
        })
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$Modal.info({
        title  : '提示框',
        content: '<br/><p style="font-size:18px; ">你确认要离开该登录页吗？</p>',
        onOk   : () => {
            this.$Message.info('Clicked ok');
            next();
        },
        onCancel: () => {
            this.$Message.info('Clicked cancel');
        }
    });
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
    margin: 0 auto;
  }
  .project_name{
    margin-top: 20px;
    h1{
      width         : 100px;
      height        : 34px;
      font-size     : 32px;
      font-weight   : normal;
      font-stretch  : normal;
      line-height   : 30px;
      letter-spacing: 0px;
      color         : #062f41;
      box-shadow    : 0px 2px 2px 0px
      rgba(251, 236, 190, 0.75);
      margin: 0 auto;
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
  .login_button{
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
    .register{
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

<template>
  <Row type="flex" style="height:100%; ">
    <div class="login_box_outer">
        <i-col span="8" class="login_box_inner" offset="8">

          <div class="login_logo_outer">
            <div class="login_logo_inner">
              <img src="@/logo.png" alt="" class="logo" @click="backHome">
            </div>
          </div>

          <div class="project_name">
            <h1>
              小猪旅行
            </h1>
          </div>


          <div class="form_box">
            <Form ref="change_form" :model="change_form" :rules="ruleInline">
              <FormItem prop="pwd">
                  <i-input type="password" prefix="ios-lock-outline" placeholder="输入新密码" style="width: 283px" v-model="change_form.pwd"/>
              </FormItem>
              <FormItem prop="cpwd">
                  <i-input type="password" prefix="ios-lock" placeholder="确认新密码"  style="width: 283px" v-model="change_form.cpwd"/>
              </FormItem>
              <FormItem>
                  <Button type="primary" @click="handleSubmit('change_form')" class="login_button">确定</Button>
              </FormItem>
            </Form>



            <div class="form_bottom">
              <p class="register">
                <router-link to="/">首页</router-link>
                </p>
              <p class="forget_pass"><router-link :to="'/forgetpass'">忘记密码？</router-link></p>
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
import { mapGetters,mapActions} from 'vuex';
export default {
  data () {
    const pwdValidate = (rule, value, callback) => {
        this.$refs.change_form.validateField('cpwd');
        callback();
    };
    const pwdCheckValidate = (rule, value, callback) => {
        if (this.change_form.pwd != '' && value == '') {
            callback(new Error('确认密码不能为空!'));
        } else if (this.change_form.pwd != value) {
            callback(new Error('新密码和确认密码应相同!'));
            this.$Message.error('新密码与确认密码不同！');
        } else {
            callback();
        }
    }
    return {
      userId     : null,
      change_form: {
          pwd : '',
          cpwd: ''
      },
      ruleInline: {
          pwd: [
              { required: true, validator: pwdValidate, trigger: 'blur' },
              { type: 'string', min: 6,message: '密码长度不得少于6位！', trigger: 'blur' }
          ],
          cpwd: [
              { required: true, validator: pwdCheckValidate, trigger: 'blur' },
              { type: 'string', min: 6, message: '密码长度不得少于6位 ！'}
          ]
      }
    }
  },
  methods: {
    ...mapActions(['changeLoginStatusAction','changeUserInfoAction']),
    backHome(){
      this.$router.push('/');
    },
    handleSubmit(name) {
      
          this.$refs[name].validate((valid) => {
            if (valid) {
                this.axios({
                  url   : 'http://47.98.224.37:8080/api/v1/users/resetpassword',
                  method: 'POST',
                  data  : {
                    id      : this.$cookie.get('id'),
                    password: this.change_form.pwd,
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
                    this.$cookie.delete('nickname');
                    this.$cookie.delete('id');
                      this.$Modal.confirm({
                        title  : '提示框',
                        content: '<br/><p style="font-size:18px; ">修改密码成功，请重新登录？</p>',
                        onOk   : () => {
                          this.$router.push({path:'/login'});
                        },
                        onCancel: () => {
                            this.$Message.info('操作取消！');
                            this.$router.push('/');
                        }
                      });
                  }else{
                    this.$Message.error(res.data.message);
                  }
                })
                
            } else {
                this.$Message.error('登录失败!');
            }
          })
    },
    
  },
  computed:{
    ...mapGetters(['getLoginStatus','getUserInfo']),
  },
  beforeMount(){
    this.userId = this.$cookie.get('id');
      if(!this.$cookie.get('id')){
        this.$Modal.confirm({
            title  : '提示框',
            content: '<br/><p style="font-size:18px; ">尚未登录，是否进入登录界面</p>',
            onOk   : () => {
                this.$router.push({path:'/login'});
                this.$Message.success('操作成功！');
            },
            onCancel: () => {
                this.$Message.info('操作取消！');
                this.$router.go(-1);
            }
        });
      }
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
.logo{
  width  : 100%;
  height : auto;
  display: block;
  margin : 0 auto;
}
</style>

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
                <!-- <div class="edit_headImg">
                    <div class="edit_label">
                        头像：
                    </div>
                    <div class="edit_input">
                        <input type="image" name="img" >
                    </div>
                </div> -->
                <!-- <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                        <i-input type="text" v-model="formInline.user" placeholder="Username">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </i-input>
                    </FormItem>
                    <FormItem prop="password">
                        <i-input type="password" v-model="formInline.password" placeholder="Password">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </i-input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                    </FormItem>
                </Form> -->
               
            </div>

        </div>
    </div>
</template>
<script>
import {ImageUpload , ImagePreview} from 'vue-image-upload-preview';
export default {
    data () {
        return {
             formInline: {
                user    : '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
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
    }
}
</script>
<style lang="scss" scoped>
    .ue_card{
        width : 389px;
        height: 550px;
        // background-color: #ffffff;
        // box-shadow      : 0px 3px 7px 0px
		// rgba(0, 0, 0, 0.35);
        position: fixed;
        left    : 50%;
        top     : 195px;
        // transform: translate(-195px,-275px);
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
</style>
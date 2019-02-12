<template>
    <div class="travel_list">
        <div class="travel_title">
            <h3>{{user_travel_item.title}}</h3>
        </div>
        <div class="travel_content">
            <div>
                <p v-html="user_travel_item.describe"></p>
                <span><router-link to="/">[详情]</router-link></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['user_travel_item'],
}
</script>
<style lang="scss">
    .travel_list{
        width        : 100%;
        height       : 245px;
        border       : solid 1px #333333;
        margin-bottom: 42px;
        padding      : 14px 52px 0 47px;
        overflow     : hidden;
        position     : relative;
    }
    .travel_title{
        overflow: hidden;
        h3{
            font-size   : 36px;
            font-weight : normal;
            font-stretch: normal;
            color       : #333333;
        }
    }
    .travel_content{
        margin-top: 10px;
        div{
            font-size: 24px;
            color    : #333333;
            display  : inline-block;
            a{
                position: absolute;
                bottom  : 10px;
                right   : 20px;
                color   : #0376b8;
                &:hover{
                    color: #ff9d00;
                }
            }
        }
    }
</style>
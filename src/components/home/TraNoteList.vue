<template>
    <div class="tra_node_list">
        <div class="img_box">
            <img src="../../images/public_header02.jpg" alt="">
        </div>
        <div class="tn_content">
            <div class="node_tag">
                <router-link to="/">海岛旅游</router-link>
            </div>
            <div class="node_title">
                <h3>
                    成全你的难忘“漂流记” ── 7处推荐别错过
                </h3>
            </div>
            <div class="node_content">
                <p>
                    芙花芬度假酒店位于小小的NAKATCHAFUSHI岛上，隐匿在北马累岛庇护的水域里。每间僻静客房都有自己的跳水池、BOSE音响系统和设施齐全的吧台。一天浮潜或是玩沙结束后，可以在酒店的庭院餐厅里一边享用美味的海鲜，一边欣赏印度洋的美景。这座私密的波利尼西亚度假村拥有梦幻的地理位置，位于PAPETOAI闪闪发亮的蓝色泻湖中央。你可随意地跳下入住的洋房甲板，浮潜或是玩皮划艇，还有部分客房提供私人小型泳池或搭建在水上的透明玻璃观海台。更值得一提的是，整座度假村以其微妙的生态系统而著称，是热爱自然的旅行者不可多得的住宿之选。
                </p>
            </div>
            <div class="node_user">
                <div class="node_user_info">
                    <div class="user_profile">
                        
                    </div>
                    <div class="user_name">
                        <p>
                            皮皮虾我们一起走
                        </p>
                    </div>
                </div>


                <div class="node_user_options">
                    <ul>
                        <li>
                            <router-link to="/">
                                <img src="../../images/collect.png" alt="">
                                <span>1563</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                <img src="../../images/like.png" alt="">
                                <span>6520</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                <img src="../../images/comment.png" alt="">
                                <span>2690</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .tra_node_list{
        margin-bottom: 60px;
        overflow     : hidden;
    }
    .img_box{
        width           : 300px;
        height          : 300px;
        background-color: #0080e6;
        float           : left;
        margin-right    : 30px;
        img{
            width : 100%;
            height: 100%;
        }
    }
    .tn_content{
        float: left;
    }
    .node_tag{
        width        : 130px;
        height       : 40px;
        border-radius: 5px;
        border       : solid 1px #ff9d00;
        margin-bottom: 25px;
        a{
            display    : block;
            width      : 100%;
            height     : 100%;
            font-size  : 24px;
            color      : #ff9d00;
            text-align : center;
            line-height: 40px;
        }
    }
    .node_title{
        h3{
            font-size   : 30px;
            font-weight : normal;
            font-stretch: normal;
            color       : #ff9d00;
            line-height : 36px;
        }
    }
    .node_content{
        margin-top: 20px;
        p{
            width         : 770px;
            font-family   : MicrosoftYaHei;
            font-size     : 14px;
            font-weight   : normal;
            font-stretch  : normal;
            line-height   : 24px;
            letter-spacing: 0px;
            color         : #333333;
        }
    }




    /*   游记  用户部分  */
    .node_user{
        margin-top: 10px;
    }
    .node_user_info{
        float   : left;
        overflow: hidden;
    }
    .user_profile{
        width           : 37px;
        height          : 37px;
        background-color: #ff9d00;
        border-radius   : 50%;
        float           : left;
        margin-right    : 16px;
    }
    .user_name{
        float: left;
        p{
            font-size  : 14px;
            height     : 37px;
            line-height: 37px;
            color      : #333333;
        }
    }

    .node_user_options{
        float     : right;
        margin-top: 10px;
        li{
            float       : left;
            margin-right: 77px;
            img{
                width         : 24px;
                height        : 24px;
                display       : inline-block;
                vertical-align: middle;
                margin-right  : 11px;
            }
            span{
                font-size: 14px;
                color    : #ff9d00;
            }
        }
    }
</style>
<template>
    <div>
        <div class="header">
            <strategy-header></strategy-header>
        </div>
        <router-view></router-view>
        <div class="footer">
            <strategy-footer></strategy-footer>
        </div>
    </div>
</template>
<script>
import StrategyFooter from '../public/footer';
import StrategyHeader from '../public/basicHeader';
export default {
    components:{
        'strategy-footer': StrategyFooter,
        'strategy-header': StrategyHeader
    }
}
</script>
<style lang="scss" scoped>
    .header{
        height: 650px;
        /deep/ .profile_header{
            background: url('../../images/strategy_header_bg.png') no-repeat 0 0;
        }
    }
    .footer{
        background-color: #0d0d0d;
        opacity         : 0.96;
    }
</style>
<template>
    <div class="travel_wrapper">
        <div class="write_travel">
            <a href="javascript:;">写游记</a>
        </div>
        <div class="travel_lsits">
            <travel-list v-for="(n) in 4" :key="n"></travel-list>            
        </div>
    </div>
</template>
<script>
import TravelList from './travelList';
export default {
    components:{
        'travel-list': TravelList,
    }
}
</script>
<style lang="scss" scoped>

    .travel_wrapper{
        padding: 20px 68px 0 56px;
    }   
    .write_travel{
        text-align   : right;
        margin-bottom: 15px;
        a{
            display     : inline-block;
            width       : 107px;
            background  : url('../../images/edit.png') no-repeat 0 5px;
            padding-left: 35px;
            font-size   : 24px;
            color       : #ff9d00;
        }
    }
    .travel_lsits{
        width : 100%;
        height: 500px;
    }
</style>
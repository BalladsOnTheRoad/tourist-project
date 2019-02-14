<template>
    <div class="travel_wrapper">
        <div class="write_travel">
            <a href="javascript:;" @click="postPhoto">上传照片</a>
        </div>
        <div class="travel_lsits">
            <div class="photo_list_box">
                <ul class="photo_list">
                    <li v-for="(photoList, index) in photoLists" :key="index">
                        <img :src="photoList.photoname" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import TravelList from './travelList';
export default {
    data(){
        return{
            photoLists: null,
        }
    },
    components:{
        'travel-list': TravelList,
    },
    methods:{
        postPhoto(){
            this.$Message.success('上传成功！');
        }
    },
    beforeMount(){
        this.axios({
            url   : 'http://47.98.224.37:8080/api/v1/photo/getphoto',
            method: 'get'
        }).then(res=>{
            this.photoLists = res.data.data;
        })
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
            display      : inline-block;
            width        : 200px;
            height       : 50px;
            line-height  : 50px;
            font-size    : 24px;
            color        : #ff9d00;
            text-align   : center;
            border       : 1px solid #ff9d00;
            border-radius: 30px;
        }
    }
    .travel_lsits{
        width     : 100%;
        height    : 1100px;
        margin-top: 20px;
        
    }
    .photo_list_box{
        height: 100%;
    }
    .photo_list{
        overflow-y: auto;
        height    : 100%;
        li{
            float        : left;
            margin-right : 35px;
            margin-bottom: 70px;
            &:nth-of-type(3n){
                margin-right: 0;
            }
            img{
                display: block;
                width  : 320px;
                height : 300px;
            }

        }
    }
</style>
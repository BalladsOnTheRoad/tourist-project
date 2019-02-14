<template>
    <div>
        <header></header>
        <div class="carousel">
         <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
        <swiper-slide>
            <div class="Str_classify">
            <ul class="lunbo">
                <li v-for="name in names" >
                    <router-link to="/">
                    <div class="Str_classify_top">
                        {{name}}
                    </div>
                    <img style="width:350px;height:230px" src="../../images/q8.jpg"/>
                    </router-link>
                </li>
            </ul>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="Str_classify">
            <ul class="lunbo">
                <li v-for="name in names">
                    <router-link to="/">
                    <div class="Str_classify_top">
                        {{name}}
                    </div>
                    <img style="width:350px;height:230px" src="../../images/q11.jpg"/>
                    </router-link>
                </li>
            </ul>
            </div>
        </swiper-slide>
    <!-- Optional controls -->
     <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'carousel',
    data(){
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
            el       : '.swiper-pagination',
            clickable: true,
            autoplay : true,
            speed    : 20,
            renderBullet(index, lunbo) {
              return `<span class="${lunbo} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
          }
        },
        components:{
            swiper,
            swiperSlide
        },
         names: ['宏村','丽江','大理','乌镇','镇江','滇西','武威','泰国','杭州','苏州','兰州','黄山']
        }
      },
      computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
    }
</script>

<style lang="scss">
.swiper-container{
    margin-top: -125px;
}
.swiper-container,.swiper-wrapper{
    height: 1395px;
}
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color      : #ffa619;
    border     : 1px solid #ffa619;
    background : #fff;
    font-weight: 400;
    width      : 40px;
    height     : 40px;
  }
  .swiper-pagination-bullet-custom {
     width      : 40px;
     height     : 40px;
     font-weight: 400;
     text-align : center;
     line-height: 35px;
     font-size  : 18px;
     color      : #000;
     border     : 1px solid #000;
     background : #fff;
     opacity    : 1;
  }
header{
    width           : 100%;
    height          : 650px;
    background-image: url(../../images/q11.jpg);
    background-size : cover;
}
.Str_classify{
    width       : 1150px;
    height      : 1395px;
    margin      : 0 auto;
    padding-left: 22px;
    overflow    : hidden;
    background  : #fff;
    li{
        float        : left;
        list-style   : none;
        margin-right : 25px;
        width        : 350px;
        height       : 295px;
        margin-bottom: 27px;
        .Str_classify_top{
            font-size  : 24px;
            margin-top : 12px;
            width      : 170px;
            height     : 55px;
            line-height: 55px;
            float      : right;
            font-weight: 400;
        }
    }

}

</style>
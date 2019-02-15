<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
 name: "app",
 provide () {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      msg          : "Welcome to Your Vue.js App",
      isRouterAlive: true,
    };
  },
  methods:{
     reload () {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    }
  }
};
</script>

<style lang="scss">
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,img {
  margin : 0;
  padding: 0;
}

*,*:after,*::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing   : border-box;
  -ms-box-sizing    : border-box;
  -o-box-sizing     : border-box;
  box-sizing        : border-box;
}
img{
  display: block;
}
li{
  list-style: none;
}
html,body{
  width : 100%;
  height: 100%;
}
#app{
  width : 100%;
  height: 100%;
}
i{
  font-style: normal;
}



</style>

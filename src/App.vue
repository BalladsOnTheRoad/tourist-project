<template>
  <div id="app">
    <div class="header">
      <div class="log">
        <ul>
          <li>
            <router-link to="./login">登录</router-link>
          </li>
          <li>
            <router-link to="./regist">注册</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {
 name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,img {
  margin: 0;
  padding: 0;
}

*,
*:after,
*::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}
</style>

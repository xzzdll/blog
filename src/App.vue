<template>
  <div id="app" style="height:100%;">
    <router-view></router-view>
    <waterMack style="padding-left:100px" curDate="测试"/>
  </div>
</template>

<script>
export default {
  name: 'APP'
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  margin: auto;
  /* margin-right: calc(100vw - 100%); */
  /* background-color:#ececec; */
}
</style>

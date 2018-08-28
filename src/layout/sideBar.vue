<template>
  <div>
    <div class="card" style="height:300px;">
      <img src="../assets/img/20180828144419.jpg" style="width:75%;height:200px" />
      <div style="text-align:left">
        <p style="font-size: 20px;font-weight: bold;">John</p>
        <p style="color: #999;font-size: 13px;"> 前端打字员</p>
        <p style="color: #999;font-size: 13px;"> 文章 - 4&nbsp;&nbsp;|&nbsp;&nbsp;访问 - 4801</p>
      </div>
    </div>
    <div class="card" style="height:100px;">
      <div class="card_head" style="height:50%;">
        <span class="title">
          FOLLOW ME
        </span>
      </div>
      <div style="height:50%;padding-top:15px;text-align:left">
        <span @click="handleClick('https://github.com/JohnNight')"><i class="fa fa-github-square" style="font-size:32px;"></i></span>
        <span @click="handleClick('tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=634408262&website=www.oicqzone.com')" style="margin-left:10px"><i class="fa fa-qq" style="font-size:27px;"></i></span>
      </div>
    </div>
    <div class="card" style="height:100px;">
      <div class="card_head" style="height:50%;">
        <span class="title">
          云标签
        </span>
      </div>
      <div style="height:50%;padding-top:15px;text-align:left">

      </div>
    </div>
    <div class="card">
      <div class="card_head">
        <span class="title">
          文章列表
        </span>
      </div>
      <div style="height:80%">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (url) {
      window.open(url);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 250px;
  background-color: #f7fcf6;
  margin-bottom: 50px;
  padding: 30px;
  padding-top: 0px;
  .card_head {
    height: 20%;
    border-bottom: 1px solid #e8e8e8;
    .title {
      font-size: 16px;
      padding: 16px 0;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      display: inline-block;
      -ms-flex: 1 1;
      flex: 1 1;
    }
  }
}
</style>

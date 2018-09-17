<template>
  <div>
    <div class="card" style="height:320px;">
      <img src="../assets/img/20180828144419.jpg" style="width:200px;height:200px;margin-top:20px" />
      <div style="text-align:left">
        <p style="font-size: 20px;font-weight: bold;">John</p>
        <p style="color: #999;font-size: 13px;"> 前端打字员</p>
        <p style="color: #999;font-size: 13px;"> 文章 - {{number}}&nbsp;&nbsp;|&nbsp;&nbsp;访问 - {{totalVisit}}</p>
      </div>
    </div>
    <div class="card" style="height:100px;">
      <div class="card_head" style="height:50%;">
        <span class="title">
          FOLLOW ME
        </span>
      </div>
      <div style="height:50%;padding-top:15px;text-align:left">
        <span @click="handleClick('https://github.com/JohnNight')" style="cursor:pointer">
          <i class="fa fa-github-square" style="font-size:32px;"></i>
        </span>
        <span @click="handleClick('tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=634408262&website=www.oicqzone.com')" style="margin-left:10px;cursor:pointer">
          <i class="fa fa-qq" style="font-size:27px;"></i>
        </span>
      </div>
    </div>
    <div class="card" style="height:150px;">
      <div class="card_head" style="height:50%;">
        <span class="title">
          云标签
        </span>
      </div>
      <div style="height:50%;padding-top:15px;text-align:left">
        <el-button type="primary" round size="mini">ES6</el-button>
        <el-button type="success" round size="mini">React</el-button>
        <el-button type="info" round size="mini">Vue</el-button>
        <div style="height:5px"></div>
        <el-button type="warning" round size="mini" style="margin-left:0">Node</el-button>
        <el-button type="danger" round size="mini">Css</el-button>
      </div>
    </div>
    <div class="card" style="height:auto">
      <div class="card_head">
        <span class="title">
          文章列表
        </span>
      </div>
      <ul style="height:80%;text-align:left;padding-left:20px">
        <li :key="index" v-for="(item,index) in articalData" style="margin-top:15px;">
          <span href="#" style="cursor:pointer;color:#40a9ff" @click="showArtical(item._id)">{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetch } from '@/fetch/api';
export default {
  data () {
    return {
      articalData: [],
      number: 0,
      totalVisit: 0
    };
  },
  methods: {
    handleClick (url) {
      window.open(url);
    },
    showArtical (id) {
      this.$router.push({ path: '/artical', query: { id: id } });
    }
  },
  mounted () {
    fetch('artical/list').then((data) => {
      if (data.status === 'true') {
        this.articalData = data.list;
        this.number = data.list.length;
      } else {
        this.$message.error(data.message);
      }
    });
    fetch('count/visitor').then((data) => {
      if (data.status === 'true') {
        this.totalVisit = data.count;
      } else {
        this.$message.error(data.message);
      }
    });
    fetch('add/visitor', { ip: window.returnCitySN['cip'], city: window.returnCitySN['cname'] });
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

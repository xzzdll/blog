<template>
  <el-container>
    <el-header style="height:160px">
      <Header></Header>
    </el-header>
    <el-container>
      <el-row :gutter="0" style="width:100%;background-color: #444;" type=flex align='middle'>
        <el-col :span="11" :offset="5" align='middle'>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#444" text-color="#fff" active-text-color="#56adf9" style="border-bottom:none;">
            <el-menu-item index="1" style="font-size:17px">主页</el-menu-item>
            <el-menu-item index="2" style="font-size:17px">归档</el-menu-item>
            <el-menu-item index="3" style="font-size:17px">说说</el-menu-item>
            <el-menu-item index="4" style="font-size:17px">收藏</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search">
          </el-input>
        </el-col>
      </el-row>
    </el-container>
    <el-container :style="{height:pageHeight}" style="overflow-x: hidden; overflow-y: auto">
      <el-main style="height:100%;width:100%;padding-bottom:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './head';
import Aside from './aside';
import Footer from './foot';
export default {
  components: {
    Header, Aside, Footer
  },
  data () {
    return {
      pageHeight: 'auto',
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created () {
    this.pageHeight = (document.documentElement.clientHeight - 220) + 'px';
    window.addEventListener('resize', () => {
      this.pageHeight = (document.documentElement.clientHeight - 220) + 'px';
    }, false);
  }
};
</script>

<style>
.el-footer {
  color: #333;
  text-align: center;
}

.el-header {
  color: #333;
  text-align: center;
  line-height: 90px;
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(#484848),
    to(#5a5a5a)
  );
}

.el-main {
  color: #333;
  text-align: center;
}
</style>

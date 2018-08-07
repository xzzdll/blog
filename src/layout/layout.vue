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
        <el-container>
            <el-main>
                <div :style="{height:pageHeight}">
                    <router-view></router-view>
                </div>
            </el-main>
            <el-aside width="28%">
                <Aside></Aside>
            </el-aside>
        </el-container>
        <el-footer>
            <div>
                <Footer></Footer>
            </div>
        </el-footer>
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
    this.pageHeight = (document.documentElement.clientHeight - 260) + 'px';
    window.addEventListener('resize', () => {
      this.pageHeight = (document.documentElement.clientHeight - 260) + 'px';
    }, false);
  }
};
</script>

<style>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 90px;
}

.el-header {
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(#484848),
    to(#5a5a5a)
  );
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

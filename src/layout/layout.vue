<template>
    <el-container>
        <el-header style="height:160px">
            <Header></Header>
        </el-header>
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
      pageHeight: 'auto'
    };
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
  line-height: 60px;
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

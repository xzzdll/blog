<template>
    <el-container>
        <el-header>
            <div>
                <Header></Header>
            </div>
        </el-header>
        <el-container>
            <el-main>
                <div>
                    <router-view></router-view>
                </div>
            </el-main>
            <el-aside width="200px">
                <div>
                    <Aside></Aside>
                </div>
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
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
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

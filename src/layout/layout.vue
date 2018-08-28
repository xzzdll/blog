<template>
  <el-container>
    <el-header style="height:160px">
      <Header></Header>
    </el-header>
    <el-container>
      <Menu></Menu>
    </el-container>
    <el-container>
      <div style="height:100%;width:100%;padding-bottom:0">
        <el-main style="overflow:unset">
          <el-container>
            <el-row :gutter="20" style="width:100%">
              <el-col :span="14" :offset="2">
                <router-view></router-view>
              </el-col>
              <el-col :span="6" :offset="1">
                <Siderbar></Siderbar>
              </el-col>
            </el-row>
          </el-container>
          <el-container>
            <Footer style="height:50px;width:100%"></Footer>
          </el-container>
        </el-main>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import Header from './head';
import Siderbar from './sideBar';
import Footer from './foot';
import Menu from './menu';
export default {
  components: {
    Header, Siderbar, Footer, Menu
  },
  data () {
    return {

    };
  }
};
</script>

<style lang="scss">
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

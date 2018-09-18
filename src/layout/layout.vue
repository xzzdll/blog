<template>
  <el-container>
    <el-header style="height:145px">
      <Header></Header>
    </el-header>
    <el-container>
      <Menu></Menu>
    </el-container>
    <el-container>
      <div style="height:100%;width:100%;padding-bottom:0">
        <el-main style="overflow:unset;padding-bottom:0;padding-left:0;padding-right:0;">
          <el-container style="margin-bottom:30px">
            <el-row style="width:100%;" type="flex" justify="center">
              <el-col :md="13" :xs="23" :sm="23">
                <transition name="slide-fade">
                  <keep-alive>
                  <router-view></router-view>
                  </keep-alive>
                </transition>
              </el-col>
              <el-col :md="5" class="hidden-sm-and-down" :offset="1">
                <Siderbar></Siderbar>
              </el-col>
            </el-row>
          </el-container>
          <el-container>
            <Footer style="height:50px;width:100%"></Footer>
          </el-container>
        </el-main>
      </div>
      <a class="hidden-sm-and-down" href="https://github.com/JohnNight" target="_blank"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

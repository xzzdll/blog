<template>
  <el-container>
    <el-row :style="{'padding-right':sidebar ? '320px' :'0px',width:'100%'}">
      <el-col class="main">
        <el-header style="height:110px;position:relative">
          <Header></Header>
          <github></github>
        </el-header>
        <el-container>
          <Menu></Menu>
        </el-container>
        <el-container>
          <div style="height:100%;width:100%;padding-bottom:0">
            <el-main style="overflow:unset;padding-bottom:0;padding-left:0;padding-right:0;">
              <el-container style="margin-bottom:30px">
                <el-row style="width:100%;" type="flex" justify="center">
                  <el-col :md="15">
                    <transition appear name="slide-fade">
                      <keep-alive>
                        <router-view></router-view>
                      </keep-alive>
                    </transition>
                  </el-col>
                </el-row>
              </el-container>
              <el-container>
                <Footer style="height:50px;width:100%"></Footer>
              </el-container>
            </el-main>
          </div>
        </el-container>
      </el-col>
      <el-col class="side" :style="{ width:sidebar ? '320px' :'0' }">
        <Siderbar></Siderbar>
      </el-col>
    </el-row>
    <div style="position: fixed; right: 50px;
    bottom:50px;cursor:pointer" v-on:click="sidebar = !sidebar"> <i class="el-icon-d-arrow-left" style="font-size: 25px"></i> </div>
  </el-container>
</template>

<script>
import Header from './head';
import Siderbar from './sideBar';
import Footer from './foot';
import Menu from './menu';
import github from '@/components/github';
export default {
  components: {
    Header, Siderbar, Footer, Menu, github
  },
  data () {
    return {
      sidebar: false
    };
  }
};
</script>

<style lang="scss">
.main {
  position: relative;
}

.side {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 0;
  box-shadow: inset 0 2px 6px #000;
}

.el-footer {
  color: #333;
  text-align: center;
}

.el-header {
  color: #333;
  // background: -webkit-gradient(
  //   linear,
  //   0 0,
  //   0 bottom,
  //   from(#484848),
  //   to(#5a5a5a)
  // );
  background-color: #f5f5f5;
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
// .slide-fade-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>

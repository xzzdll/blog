<template>
  <el-container>
    <el-row class="main" :style="{'right':sidebar ? '160px' :'0px',width:'100%'}">
      <el-col>
        <el-header style="height:110px;position:relative">
          <Header></Header>
        </el-header>
        <el-container>
        </el-container>
        <el-container>
          <div style="height:100%;width:100%;padding-bottom:0">
            <el-main style="overflow:unset;padding-bottom:0;padding-left:0;padding-right:0;">
              <el-container style="margin-bottom:30px">
                <el-row style="width:100%;" type="flex" justify="center">
                  <el-col :md="14">
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
    </el-row>
    <div class="side" :style="{ right:sidebar ? '0' :'-320px' }">
      <github></github>
      <Siderbar></Siderbar>
    </div>
    <div style="position: fixed; right: 50px;
    bottom:70px;cursor:pointer;z-index: 10001;" v-on:click="sidebar = !sidebar">
      <i v-if="!sidebar" class="el-icon-d-arrow-left" style="font-size: 25px"></i>
      <i v-else class="el-icon-close" style="font-size: 25px;color:white"></i>
    </div>
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
      sidebar: true
    };
  },
  mounted () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone',
      'SymbianOS', 'Windows Phone',
      'iPad', 'iPod'];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.includes(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      this.sidebar = false;
    }
  }
};
</script>

<style lang="scss">
.main {
  position: relative;
  transition: right 0.5s;
  -moz-transition: right 0.5s; /* Firefox 4 */
  -webkit-transition: right 0.5s; /* Safari 和 Chrome */
  -o-transition: right 0.5s; /* Opera */
}

.side {
  transition: right 0.5s;
  -moz-transition: right 0.5s; /* Firefox 4 */
  -webkit-transition: right 0.5s; /* Safari 和 Chrome */
  -o-transition: right 0.5s; /* Opera */
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 320px;
  box-shadow: inset 0 2px 6px #000;
  z-index: 9999;
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

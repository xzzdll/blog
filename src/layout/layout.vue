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
                <transition appear name="slide-fade">
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
      <a href="https://github.com/JohnNight" class="github-corner" aria-label="View source on Github">
        <svg width="80" height="80" viewBox="0 0 250 250" class="gay-hub" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
        </svg>
      </a>
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
// .slide-fade-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>

<style>
.gay-hub {
  fill: rgb(52, 147, 239);
  color: #fff;
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>

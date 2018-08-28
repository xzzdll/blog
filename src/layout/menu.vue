<template>
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
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

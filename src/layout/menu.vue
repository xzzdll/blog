<template>
  <el-row :gutter="0" style="width:100%;background-color: #f5f5f5;font-size: 13px" type="flex" justify="center" class="head">
    <el-col :md="24" :xs="24" :sm="24">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#f5f5f5" text-color="#555" active-text-color="#555" style="border-bottom:none;" router>
        <el-menu-item index="index" style="font-size:13px">
          <i class="el-icon-document" style="vertical-align:unset"></i>文章</el-menu-item>
        <el-menu-item index="say" style="font-size:13px">
          <i class="fa fa-coffee" aria-hidden="true" style="padding-right:5px;vertical-align:unset"></i>
          说说</el-menu-item>
        <el-menu-item index="time-file" style="font-size:13px">
          <i class="fa fa-tag" aria-hidden="true" style="padding-right:5px;vertical-align:unset"></i>
          归档</el-menu-item>
        <!-- <el-menu-item index="collect" style="font-size:17px">收藏</el-menu-item> -->
      </el-menu>
    </el-col>
    <!-- <el-col :span="4"> -->
    <!-- <el-input placeholder="请输入内容" prefix-icon="el-icon-search">
      </el-input> -->
    <!-- </el-col> -->
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 'index'
    };
  }
};
</script>

<style>
.head .el-menu--horizontal>.el-menu-item {
    /* border-bottom: unset !important; */
    /* color: #303133; */
}
</style>

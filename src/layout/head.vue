<template>
  <el-row :gutter="0" style="width:100%;" type="flex" justify="center">
    <el-col :md="16" :xs="23" :sm="23">
      <div style="font-size:30px;color:#3493ef;padding-top:35px;font-weight:bold">
        John Blog
      </div>
      <div class="combined-bar" style="width: 260px; transform: translate(0px, 0px);margin-top:6px"></div>
      <div style="color:#fff;padding-top:8px">
        我有故人提刀去，斩尽春风未肯归。
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.combined-bar {
  width: 100%;
  height: 1px;
  background: hsla(0, 0%, 100%, 0.7);
}
</style>

<template>
  <el-row :gutter="0" style="width:100%;" type="flex" justify="center">
    <el-col :md="16" :xs="23" :sm="23">
      <div class="combined-bar" style="width: 150px; transform: translate(0px, 0px);margin-top:35px"></div>
      <div style="font-size:30px;color:#3493ef;margin-top:6px;font-weight:bold">
        xzzdll Blog
      </div>
      <div class="combined-bar" style="width: 150px; transform: translate(0px, 0px);margin-top:6px"></div>
      <!-- <div style="color:#000;padding-top:8px">
        我有故人提刀去，斩尽春风未肯归。
      </div> -->
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
  background: #000;
}
</style>

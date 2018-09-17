<template>
    <el-container>
      <h1 style="margin-left:20%;font-size:30px;color:#fff">
        <!-- John Blog -->
      </h1>
    </el-container>
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

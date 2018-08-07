<template>
  <div>
    <el-container>
      <el-row :gutter="20" style="width:100%">
        <el-col :span="11" :offset="3">
          <div style="height:80px"></div>
          <div style="height:80px"></div>
          <div style="height:80px"></div>
          <div style="height:80px"></div>
        </el-col>
        <el-col :span="6" :offset="1">
          <!-- <div class="card">
            <div class="card_head">
              <span class="title">
                FOLLOW ME
              </span>
            </div>
            <div style="height:80%"></div>
          </div> -->
          <div class="card">
            <div class="card_head">
              <span class="title">
                FOLLOW ME
              </span>
            </div>
            <div style="height:80%"></div>
          </div>
          <div class="card">
            <div class="card_head">
              <span class="title">
                云标签
              </span>
            </div>
            <div style="height:80%"></div>
          </div>
          <div class="card">
            <div class="card_head">
              <span class="title">
                文章列表
              </span>
            </div>
            <div style="height:80%"></div>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <el-container>
      <Footer style="height:50px;width:100%"></Footer>
    </el-container>
  </div>
</template>

<script>
import Footer from '@/layout/foot';
export default {
  data () {
    return {
      pageHeight: 'auto',
      activeIndex: '1'
    };
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 250px;
  background-color: white;
  margin-bottom: 50px;
  .card_head {
    height: 20%;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    .title {
      font-size: 16px;
      padding: 16px 0;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      display: inline-block;
      -ms-flex: 1 1;
      flex: 1 1;
    }
  }
}
</style>

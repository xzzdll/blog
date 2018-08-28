<template>
  <div>
    <el-main style="overflow:unset">
      <el-container>
        <el-row :gutter="20" style="width:100%">
          <el-col :span="14" :offset="2">
            <div class="articalCard" :key="index" v-for="(item,index) in articalData">
              <div class="articalCardTitle">{{item.title}}</div>
              <div class="articalCardBody" v-html='item.subString'>
                {{item.subString}}
              </div>
              <div class="articalCardfoot">
                <span>阅读全文 > ></span>
              </div>
            </div>
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
    </el-main>
  </div>
</template>

<script>
import Footer from '@/layout/foot';
import { fetch } from '@/fetch/api';
export default {
  data () {
    return {
      pageHeight: 'auto',
      activeIndex: '1',
      articalData: []
    };
  },
  components: {
    Footer
  },
  mounted () {
    fetch('artical/list').then((data) => {
      if (data.status === 'true') {
        data.list.forEach((tmp) => {
          tmp.subString = tmp.content.substring(0, 100);
        });
        this.articalData = data.list;
      } else {
        this.$message.error(data.message);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.articalCard {
  background-color: white;
  margin-bottom: 50px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;

  .articalCardTitle {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .articalCardBody {
    text-align: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }

  .articalCardfoot {
    color: #108ee9;
    font-weight: 600;
    cursor: pointer;
  }
}

.card {
  height: 250px;
  background-color: white;
  margin-bottom: 50px;
  .card_head {
    height: 20%;
    border-bottom: 1px solid #e8e8e8;
    .title {
      font-size: 16px;
      padding: 16px 0;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      display: inline-block;
      -ms-flex: 1 1;
      flex: 1 1;
    }
  }
}
</style>

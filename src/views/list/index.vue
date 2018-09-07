<template>
  <div>
    <div class="articalCard" :key="index" v-for="(item,index) in articalData" @click="showArtical(item._id)">
      <div class="articalCardTitle">{{item.title}}</div>
      <div class="articalCardSubTitle">
        <span style="margin-right:10px">发表于:{{item.date}}</span>
        <span style="margin-right:10px">标签:{{item.type}}</span>
        <span style="margin-right:10px">浏览:{{item.times}}</span>
      </div>
      <div class="articalCardBody" v-html='item.subString'>
        {{item.subString}}
      </div>
      <div class="articalCardfoot">
        <span>阅读全文 > ></span>
      </div>
    </div>
    <el-pagination :small=true @size-change="handleSizeChange" @current-change="handleCurrentChange" class="z-pagination" :current-page.sync="currentPage" :page-size="pageSize" layout="sizes,prev, pager, next" :total="totalRows">
    </el-pagination>
  </div>
</template>

<script>
import { fetch } from '@/fetch/api';
export default {
  data () {
    return {
      articalData: [],
      totalRows: 0,
      currentPage: 1,
      pageSize: 10
    };
  },
  mounted () {
    this.updateData();
  },
  methods: {
    showArtical (id) {
      this.$router.push({ path: '/artical', query: { id: id } });
    },
    handleSizeChange (val) {
      this.pageSize = val;
      this.updateData();
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.updateData();
    },
    updateData () {
      fetch('artical/list', { currentPage: this.currentPage,
        pageSize: this.pageSize }).then((data) => {
        if (data.status === 'true') {
          data.list.forEach((tmp) => {
            tmp.subString = tmp.content.substring(0, 200) + '...';
          });
          this.articalData = data.list;
          this.totalRows = data.totalRows;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.articalCard {
  background-color: #f7fcf6;
  margin-bottom: 50px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;

  .articalCardTitle {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .articalCardSubTitle {
    margin-bottom: 5px;
    font-size: 14px;
    color: #999;
  }

  .articalCardBody {
    text-align: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }

  .articalCardfoot {
    color: #108ee9;
    font-weight: 600;
  }
}
</style>

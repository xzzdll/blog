<template>
  <div>
    <div>
      <div v-show="pageShow" class="articalCard" :key="index" v-for="(item,index) in articalData" @click="showArtical(item._id)">
        <div class="articalCardTitle">{{item.title}}</div>
        <div class="articalCardSubTitle">
          <span style="margin-right:10px">发表于:{{item.date}}</span>
          <span style="margin-right:10px">标签:{{item.type}}</span>
          <span style="margin-right:10px">浏览:{{item.times}}</span>
        </div>
        <div class="articalCardBody" v-html='item.content' v-highlight>
          {{item.content}}
        </div>
        <div>....</div>
        <div class="articalCardfoot">
          <span>阅读全文 > ></span>
        </div>
      </div>
      <el-pagination v-show="pageShow" :small=true @size-change="handleSizeChange" @current-change="handleCurrentChange" class="z-pagination" :current-page.sync="currentPage" :page-size="pageSize" layout="sizes,prev, pager, next" :total="totalRows">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { fetch } from '@/fetch/api';
import { util } from '@/utils/util';
export default {
  metaInfo: {
    title: '主页',
    meta: [
      {
        name: 'keywords',
        content: 'John，blog'
      },
      {
        name: 'description',
        content: 'John的小小博客'
      }
    ]
  },
  data () {
    return {
      pageShow: false,
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
          this.articalData = data.list;
          this.articalData.forEach(x => {
            x.content = util.removeTag(x.content);
          });
          this.totalRows = data.totalRows;
          this.$nextTick(() => {
            this.pageShow = true;
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.articalCard {
  // background-color: #f7fcf6;
  margin-bottom: 50px;
  display: flex;
  padding: 20px;
  padding-left: 35px;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;

  .articalCardTitle {
    margin-bottom: 10px;
    font-size: 26px !important;
    font-weight: 400 !important;
    color: rgb(85, 85, 85) !important;
  }

  .articalCardSubTitle {
    margin-bottom: 8px;
    font-size: 14px;
    color: #999;
  }

  .articalCardBody {
    width: 100%;
    margin-bottom: 0px;
    text-align: left;
    font-size: 14px !important;
    color: rgb(85, 85, 85) !important;
  }

  .articalCardfoot {
    color: rgb(85, 85, 85);
    font-weight: 600;
    border-bottom: 2px solid rgb(102, 102, 102);
  }
}
</style>

<style lang="scss">
// .ql-snow .ql-editor pre.ql-syntax {
// background-color: #f7f7f7;
// // background-color: #23241f;
// color: #000;
// }
</style>

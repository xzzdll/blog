<template>
  <div>
    <transition name="fade">
      <div class="articalCard" :key="index" v-for="(item,index) in articalData">
        <div class="articalCardTitle">{{item.title}}</div>
        <div class="articalCardBody">
          <div class="ql-snow">
            <div class="ql-editor">
              <div v-html='item.content'>
              {{item.content}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { fetch } from '@/fetch/api';
export default {
  data () {
    return {
      pageHeight: 'auto',
      activeIndex: '1',
      articalData: []
    };
  },
  computed: {
    id: function () {
      return this.$route.query.id;
    }
  },
  mounted () {
    if (!this.id) {
      this.articalData = [{
        title: '无数据',
        content: '无数据'
      }];
      return;
    }
    fetch('artical/list', { id: this.id }).then((data) => {
      if (data.status === 'true') {
        this.articalData = data.list;
      } else {
        this.$message.error(data.message);
      }
    });
  },
  watch: {
    id: function () {
      fetch('artical/list', { id: this.id }).then((data) => {
        if (data.status === 'true') {
          this.articalData = data.list;
        } else {
          this.$message.error(data.message);
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

  .articalCardTitle {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .articalCardBody {
    width: 100%;
    text-align: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>

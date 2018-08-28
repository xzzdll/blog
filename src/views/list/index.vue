<template>
<div>
  <div class="articalCard" :key="index" v-for="(item,index) in articalData">
    <div class="articalCardTitle">{{item.title}}</div>
    <div class="articalCardBody" v-html='item.subString'>
      {{item.subString}}
    </div>
    <div class="articalCardfoot">
      <span>阅读全文 > ></span>
    </div>
  </div>
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
  mounted () {
    fetch('artical/list').then((data) => {
      if (data.status === 'true') {
        data.list.forEach((tmp) => {
          tmp.subString = tmp.content.substring(0, 100) + '…';
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
</style>

<template>
  <div style="background-color:white;overflow:hidden">
    <div class="articalCard" :key="index" v-for="(item,index) in sayData">
      <div class="articalCardBody" v-html='item.content'>
        {{item.content}}
      </div>
      <div class="date" style="color:#999;width:100%">
        发表于：{{item.date}}
      </div>
    </div>
  </div>
</template>

<script>
import { fetch } from '@/fetch/api';
export default {
  data () {
    return {
      sayData: []
    };
  },
  mounted () {
    fetch('say/list').then((data) => {
      if (data.status === 'true') {
        this.sayData = data.list;
      } else {
        this.$message.error(data.message);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.articalCard {
  background-color: #f0f0f0;
  margin: 50px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;

  .articalCardBody {
    text-align: left;
    font-size: 14px;
    color: #111111;
  }

  .date {
    text-align: right;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>

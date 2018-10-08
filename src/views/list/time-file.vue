<template>
  <div style="background-color: #f7fcf6;">
    <div style="background-color:white;overflow:hidden">
      <div style="margin-top:25px;margin-bottom:25px">
        <div class="ant-timeline-item" :key="index" v-for="(item,index) in articalData">
          <div class="ant-timeline-item-tail"></div>
          <div class="ant-timeline-item-head ant-timeline-item-head-blue"></div>
          <div class="articalCard">
            <div class="articalCardDate">
              {{item.date}}
            </div>
            <div class="articalCardBody">
              {{item.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetch } from '@/fetch/api';
export default {
  metaInfo: {
    title: '归档列表',
    meta: [
      {
        name: 'keywords',
        content: '归档'
      },
      {
        name: 'description',
        content: '博客的归档列表哦'
      }
    ]
  },
  data () {
    return {
      articalData: []
    };
  },
  mounted () {
    fetch('artical/list').then((data) => {
      if (data.status === 'true') {
        data.list.forEach((tmp) => {
          tmp.subString = tmp.content.substring(0, 200) + '...';
        });
        this.articalData = data.list;
      } else {
        this.$message.error(data.message);
      }
    });
  },
  methods: {
    showArtical (id) {
      this.$router.push({ path: '/artical', query: { id: id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.ant-timeline-item {
  position: relative;
  margin-left: 35px;
  overflow: hidden;
  .ant-timeline-item-tail {
    position: absolute;
    left: 5.4px;
    top: 0.75em;
    height: 100%;
    border-left: 2px solid #e8e8e8;
  }
  .ant-timeline-item-head {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 100px;
    border: 2px solid transparent;
  }
  .ant-timeline-item-head-blue {
    border-color: #1890ff;
    color: #1890ff;
  }
  .articalCard {
    margin: 10px;
    margin-left: 20px;
    margin-right: 40px;
    padding: 20px;
    position: relative;
    top: -6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .articalCardBody {
      text-align: left;
      font-size: 14px;
      color: #40a9ff;
    }

    .articalCardDate {
      text-align: left;
      font-size: 20px;
      color: #40a9ff;
      font-weight: bold;
      padding-bottom: 50px;
    }

    .date {
      text-align: right;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
</style>

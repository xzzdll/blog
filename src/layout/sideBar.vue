<template>
  <div>
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
  </div>
</template>

<style lang="scss" scoped>
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

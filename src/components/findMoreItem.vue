<template>
  <div class="col-item">
    <div class="item-avatar"></div>
    <p class="item-title">哈哈</p>
  </div>
</template>

<script>

export default {
  name: "findMoreItem"
};
</script>

<style lang="scss" scoped>
.col-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18vw;
  flex-basis: 18vw;
  // background-color: #999;
  .item-avatar {
    height: 18vw;
    background-color: #fff;
    border-radius: 4px;
    background: url('http://img.hb.aicdn.com/ef1b19506228b4b46341764f5aa01d40aa9255b21fe17-FiFXcr_/fw/486/gifto/true') center center / cover no-repeat
  }
  .item-title {
    text-align: center;
    font-size: 13px;
  }
}
</style>
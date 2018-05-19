<template>
  <div class="swiper-item">
    <div class="bottom-mask"></div>
    <div class="title">编排</div>
  </div>
</template>

<script>
export default {
  name: 'swiperitem',
  props:{
    // swiperItem: Object
  },
};
</script>

<style lang="scss" scoped>
.swiper-item {
  position: relative;
  width: 24vw;
  height: 24vw;
  // margin-right: 2vw;
  // margin-right: 1vw;
  background-color: #ccc;
  border-radius: 4px;
  .bottom-mask {
    position: absolute;
    height: 8vw;
    width: 100%;
    bottom: 0;
    // background-color: rgba(0,0,0,.3);
    background-color: #000;
    opacity: 0.3;
    border-radius: 0 0 4px 4px;
  }
  .title {
    position: absolute;
    line-height: 8vw;
    padding-left: 2vw;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    bottom: 0;
    z-index: 2;
  }
}
</style>
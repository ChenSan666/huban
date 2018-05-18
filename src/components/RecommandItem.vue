<template>
  <div class="recommand-box" >
    <div class="recommand-bg clearfix">
      <div class="recommand-bg-item index1"></div>
      <div class="recommand-bg-item index2"></div>
      <div class="recommand-bg-item"></div>
    </div>
    <div class="recommand-class">APP-Keyboard</div>
    <p class="recommand-desc">知识的海洋</p>
  </div>
</template>

<script>
export default {
  name:"recommandItem"
};
</script>

<style lang="scss" scoped>
.recommand-box {
  margin: 10px 0 48px 0;
  .recommand-bg {
    margin: 10px 0;
    .recommand-bg-item {
      height: 30vw;
      width: 30vw;
      float: left;
      background: url('http://img.hb.aicdn.com/7a9acb97796fc89d2fd80bef6841a00215af3cf9b496b-8ZrgIQ') center center / cover no-repeat;
      background-color: #ccc;
      &.index1,
      &.index2 {
        margin-right: 2vw;
      }
    }
  }
  .recommand-class {
    font-size: 15px;
    color: #0f0f0f;
    font-weight: 700;
  }
  .recommand-desc {
    padding-top: 6px;
    font-size: 11px;
    font-weight: 300;
    color: #aaa;
  }
}
</style>
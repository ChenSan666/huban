<template>
  <div class="user-space-box" :class="index%2==0?'left':''">
    <div class="avatar"></div>
    <div class="desc">
      <div class="title">{{1}}</div>
      <div class="number">{{1}}采集</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userspacebox',
    props: {
      index: Number,
      // objItex: Object
    }
  }
</script>

<style lang="scss" scoped>
  .user-space-box{
    width: 46vw;
    height: 64vw;
    float: left;
    margin-bottom: 2vw;
    background-color: #fff;
    .avatar{
      height: 46vw;
      background-color: #f9f;
      // background: url('') center center / cover no-repeat; 
    }
    .desc{
      padding: 3vw 3vw;
      .title{
        font-size: 14px;
      }
      .number{
        font-size: 11px;
        padding-top: 1vw;
        color: rgb(240,240,240)
      }
    }
    &.left{
      margin-right: 2vw;
    }
  }
</style>
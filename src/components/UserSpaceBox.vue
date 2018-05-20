<template>
  <div class="user-space-box" @click="toBoardLabel" :class="index%2==0?'left':''">
    <div class="avatar" :style="'background-image: url('+bgUrl+')'"></div>
    <div class="desc">
      <div class="title">{{board.title}}</div>
      <div class="number">{{board.pin_count}}采集</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userspacebox',
    props: {
      index: Number,
      board: Object
    },
    computed: {
      bgUrl() {
        return 'http://img.hb.aicdn.com/' + this.board.pins[0].file.key + COMPRESS
      }
    },
    methods:{
      toBoardLabel() {
        this.$router.push({
          path: "/label/"+this.board.board_id
        });
      }
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
      background: url('') center center / cover no-repeat; 
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
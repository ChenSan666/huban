<template>
  <div @click="toExplorePage" class="swiper-item" :style="'background-image: url('+avatarUrl+')'">
    <div class="bottom-mask" :style="'background-color: #'+swiperItem.theme+';'"></div>
    <div class="title">{{swiperItem.name}}</div>
  </div>
</template>

<script>

export default {
  name: 'swiperitem',
  props:{
    swiperItem: Object
  },
  computed: {
    avatarUrl() {
      return "http://img.hb.aicdn.com/" + this.swiperItem.cover.key + COMPRESS
    }
  },
  methods: {
    toExplorePage() {
      this.$router.push({
        name: 'explore_page',
        params: {
          urlname: this.swiperItem.urlname
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-item {
  position: relative;
  width: 24vw;
  height: 24vw;
  // margin-right: 2vw;
  // margin-right: 1vw;
  background: url('') center center / cover no-repeat;
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
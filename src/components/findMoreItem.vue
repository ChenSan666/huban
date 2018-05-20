<template>
  <div class="col-item" @click="toExplorePage">
    <div class="item-avatar" :style="'background: url('+avatarUrl +') center center / cover no-repeat;'"></div>
    <p class="item-title">{{recommend.title}}</p>
  </div>
</template>

<script>

export default {
  name: "findMoreItem",
  props: {
    recommend: Object
  },
  computed:{
    avatarUrl() {
      return 'http://img.hb.aicdn.com/' + this.recommend.cover.key + COMPRESS
    }
  },
  methods:{
    toExplorePage() {
      this.$router.push({
        name: 'explore_page',
        params: {
          urlname: this.recommend.urlname
        }
      })
    }
  },
  mounted() {
    console.log(this.recommend);
  }
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
  }
  .item-title {
    text-align: center;
    font-size: 13px;
  }
}
</style>
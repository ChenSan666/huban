<template>
  <div @click="toKindPage" :class="'item ' + (odd?'odd':'')" :style="`background:url(`+bgUrl+`) center center no-repeat;background-size: cover;`">
    <div class="mask"></div>
    <div class="title-name">
      {{category.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "box",
  props: {
    odd:{
      type: Boolean,
      default: false
    },
    category:{
      type: Object
    }
  },
  methods: {
    toKindPage() {
      this.$router.push({
        name: 'kind_page',
        params:{
          navLink: this.category.nav_link
        }}
      )
    }
  },
  computed:{
    bgUrl() {
      // category
      return 'http://img.hb.aicdn.com/'+this.category.covers[0].file.key + COMPRESS
    }
  },
  mounted() {
    console.log(this.category);
  }
};
</script>

<style lang="scss" scoped>
.item{
    position: relative;
    float: left;
    width: 46vw;
    height: 46vw;
    margin-bottom: 2vw;
    border-radius: 1px;
    .title-name{
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: #fff;
      font-size: 18px;
      // z-index: 10;
    }
    .mask{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: rgba(0,0,0,0.1)
    }
    &.odd{
      margin-right: 2vw;
    }
  }
</style>
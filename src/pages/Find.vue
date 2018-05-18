<template>
  <div class="find">
    <div class="recommand">
      <p class="recommand-log">推荐兴趣</p>
      <recommand-item />
      <recommand-item />
      <recommand-item />
      <recommand-item />
      <recommand-item />
    </div>
    <div class="find-more">
      <p class="find-more-title">发现更多</p>
      <div class="find-more-wrapper">
        <div class="row">
          <find-more-item />
          <find-more-item />
          <find-more-item />
        </div>
        <div class="row">
          <find-more-item />
          <find-more-item />
          <find-more-item />
        </div>
        <div class="row">
          <find-more-item />
          <find-more-item />
          <find-more-item />
        </div>
        
      </div>
    </div>
    
  </div>
</template>
<style lang="scss" scoped>
.find {
  margin: 28px 0 64px 0;
  padding: 0 3vw 20px 3vw;
  background-color: #fff;
  .recommand {
    .recommand-log {
      font-size: 12px;
      margin: 4px 0 20px 0;
      font-weight:600;
    }
  }
  .find-more{
    .find-more-title {
      font-size: 12px;
      margin: 4px 0 20px 0;
      font-weight:600;
    }
    .find-more-wrapper{
      display: flex;
      height: 96vw;
      padding: 2vw;
      flex-direction: column;
      justify-content: space-between;
      .row{
        display: flex;
        flex-basis: 27vw;
        height: 27vw;
        justify-content: space-between;
      }
    }
  }
}
// <find-more-item />
</style>
<script>
import findMoreItem from "@/components/findMoreItem";
import RecommandItem from "@/components/RecommandItem";
export default {
  name: "find",
  data(){
    return {
      categories: []
    };
  },
  mounted() {
    this.$http
      .get(PROXY_API + "https://api.huaban.com/categories/")
      .then(res => {
        console.log(res);
        this.categories.push(...res.data.categories);
      });
  },
  components: {RecommandItem,findMoreItem}
};
</script>
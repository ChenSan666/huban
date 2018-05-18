<template>
  <div class="home">
    <div class="bg">
    </div>
    <div class="content">
      <div class="search-box">
        <span class="placehold">请输入你喜欢的...</span>
        <img src="" class="search-icon">
      </div>
      <div class="tuijian">
        <div class="every every-day">
          <span>每日精选</span>
        </div>
        <div class="every every-img">
          <span>万能配图</span>
        </div>
      </div>
      <p class="fenlei">分类浏览</p>
      <div class="wrapper clearfix">
        <Box :odd="true"/>
        <Box />
        <Box :odd="true"/>
        <Box />
      </div>
    </div>
  </div>
</template>

<script>
  import Box from "@/components/Box";

  export default {
    components: {Box}
  }
</script>

<style lang="scss" scoped>
  .home{
    margin-bottom: 64px;
    .bg{
      width: 100%;
      height: 160px;
      // background-color: #ccc;
      background:url("https://hbfile.b0.upaiyun.com//img/home/banner/c88dab66a15416697c930a31c0ec3364b2c3990b102914") center center no-repeat;
    }
    .content{
      width: 94vw;
      margin: 0 auto;
      margin-top: -32px;
      // background-color: #999;
      .search-box{
        display: flex;
        align-content: center;
        height: 64px;
        margin-bottom: 16px;
        box-sizing: border-box;
        padding: 14px;
        background-color: rgb(250,250,250);
        border-radius: 6px;
        color: #ccc;
        .placehold{
          line-height: 38px;
          font-size: 24px;
        }
        // .search-icon{}
      }
      .tuijian{
        display: flex;
        justify-content: space-between;
        height: 56px;
        .every{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-basis:46vw;
          width:46vw;
          border-radius: 6px;
          font-size: 14px;
          color: #fff;
        }
        .every-day{
          background: linear-gradient(left, rgb(0, 100, 255), rgb(0, 240, 255))
        }
        .every-img{
          background: linear-gradient(left, rgb(48, 35, 174), rgb(200, 108, 215));
        }
        margin-bottom: 16px;
      }
      .fenlei{
        font-size: 13px;
        color: #ccc;
        padding: 0 4px 10px 4px;;
      }
    }
  }
</style>
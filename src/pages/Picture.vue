<template>
  <div class="pic">
    <div class="pic-item">
      <img :src="'http://img.hb.aicdn.com/'+key+'_/fw/486/gifto/true'" alt="">
    </div>
    <div class="pic-desc">
      <p class="pic-title">{{text}}</p>
      <p class="pic-source">来源: <span class="web-site">{{source}}</span></p>
    </div>
    <div class="bottom-bar">
      <!-- <div class="warning"></div> -->
      <div class="share">分享</div>
      <div class="download"> <a :href="'http://img.hb.aicdn.com/'+key" >下载</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pic',
    data() {
      return {
        key: '',
        text: '',
        source:'',
      };
    },
    mounted() {
      var pin_id = this.$route.params.pin_id;
      console.log(pin_id);
      this.$http.get(GET_PROXY_API+`https://api.huaban.com/pins/${pin_id}/`)
        .then(res =>{
          console.log(res);
          this.text = res.data.pin.raw_text;
          this.source = res.data.pin.source;
          this.key = res.data.pin.file.key;
        })
    }
  }
</script>

<style lang="scss" scoped>
  .pic{
    margin-bottom: 64px;
    .pic-item{
      img{
        width: 100%;
      }
    }
    .pic-desc{
      padding: 6vw 3vw;
      .pic-title{
        padding: 0 10vw 4vw 0;
        font-size: 13px;
      }
      .pic-source{
        font-size: 11px;
        .web-site{
          font-weight: bolder;
        }
      }
    }
    .bottom-bar{
      position: fixed;
      display: flex;
      height: 16vw;
      bottom: 0vw;
      width: 100%; 
      align-items: center;
      justify-content: space-between;
      padding: 0 3vw;
      box-sizing: border-box;
      background-color: #fff;
      .share{
        width: 20vw;
        height: 8vw;
        font-size: 12px;
        color: #000;
        text-align: center;
        line-height: 8vw;
        font-weight: 400;
        background-color: rgb(244,244,244);
        border-radius: 3px;

      }
      .download{
        width: 20vw;
        height: 8vw;
        font-size: 12px;
        
        text-align: center;
        line-height: 8vw;
        font-weight: 300;
        background-color: rgb(219,63,77);
        border-radius: 3px;
        a{
          color: #fff;
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
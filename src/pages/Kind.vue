<template>
  <div class="kind">
    <div class="swiper-wrapper" v-if="explores!=0">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="explore in explores" :key="explore.keyword_id">
          <SwiperItem :swiperItem="explore"/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="pic-wrapper">
      <div class="water-fall">
        <vueWaterfallEasy :reachBottomDistance="800" :gap="20"  :maxCols="2" :imgsArr="imgsArr" @scrollReachBottom="getData" @click="toPic">
        </vueWaterfallEasy>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SwiperItem from "@/components/SwiperItem";

import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  data() {
    return {
      imgsArr: [],
      params: 0,

      explores:[],

      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -40,
        freeMode: true
      }
    };
  },
  methods: {
    init() {
      var navLink = this.$route.params.navLink;
      this.$http
        .get(GET_PROXY_API + 'https://api.huaban.com'+ navLink) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);
          this.explores.push(...res.data.explores);

          this.params = res.data.pins[res.data.pins.length-1].pin_id;
          var newArr = [];
          res.data.pins.forEach((item, index) => {
            var obj = {};
            obj.src = 'http://img.hb.aicdn.com/' + item.file.key + COMPRESS;
            obj.pin_id=item.pin_id
            newArr.push(obj);
          });
          this.imgsArr = this.imgsArr.concat(newArr);
      });
    },
    getData() {
      this.$http
        .get(GET_PROXY_API + "https://api.huaban.com/favorite/apparel/?limit=20&max=" + this.params) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);
          this.params = res.data.pins[res.data.pins.length-1].pin_id;

          var newArr = [];
          res.data.pins.forEach((item, index) => {
            var obj = {};
            obj.src = 'http://img.hb.aicdn.com/' + item.file.key + COMPRESS;
            obj.pin_id=item.pin_id
            newArr.push(obj);
          });

          this.imgsArr = this.imgsArr.concat(newArr);
        });
    },
    toPic(event, { index, value }) {
      if (event.target.tagName.toLowerCase() == "img") {
        this.$router.push({
          name: 'picture_page',
          params:{
            pin_id: value.pin_id
          }
        })
      }
    }
  },
  created(){
    this.init();
   
  },
  components: {
    SwiperItem,
    swiper,
    swiperSlide,
    vueWaterfallEasy
  }
};
</script>

<style lang="scss" scoped>
.kind {
  padding: 3vw;
  .swiper-wrapper {
    padding: 3vw 0;
  }
  .pic-wrapper {
    .water-fall{
      position: absolute;
      top: 32vw;
      left: 0;
      right: 0;
      bottom: 0;
      margin-bottom: 4vw;
      padding: 0 3vw;
    }
  }
}
</style>
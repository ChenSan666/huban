<template>
  <div class="kind">
    <div class="swiper-wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <SwiperItem />
        </swiper-slide>
        <swiper-slide>
          <SwiperItem />
        </swiper-slide>
        <swiper-slide>
          <SwiperItem />
        </swiper-slide>
        <swiper-slide>
          <SwiperItem />
        </swiper-slide>
        <swiper-slide>
          <SwiperItem />
        </swiper-slide>
        <swiper-slide>
          <SwiperItem />
        </swiper-slide>
        <swiper-slide>
          <SwiperItem />
        </swiper-slide>
      </swiper>
    </div>
    <div class="pic-wrapper clearfix">
      <div class="img">
        <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D800%2C450/sign=13374005fa03738dde1f042a832b9c65/6609c93d70cf3bc7350bf249dd00baa1cd112a0f.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SwiperItem from "@/components/SwiperItem";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -40,
        freeMode: true
      }
    };
  },
  components: {
    SwiperItem,
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
.kind {
  padding: 3vw;
  .swiper-wrapper {
    padding: 3vw 0;
  }
  .pic-wrapper{
    .img{
      float: left;
      width: 46vw;
      img{
        width: 100%;

      }
    }
  }

}
</style>
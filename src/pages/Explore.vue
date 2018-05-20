<template>
  <div class="explore">
    <div class="water-fall">
      <div class="desc">
        <div class="name">{{name}}</div>
        <div class="count">{{fellowCount}}人已经关注</div>
      </div>
      <vueWaterfallEasy :reachBottomDistance="800" :gap="20"  :maxCols="2" :imgsArr="imgsArr" @scrollReachBottom="getData" @click="toPic">
      </vueWaterfallEasy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "explore",
  data() {
    return {
      params: 0,
      imgsArr: [],
      urlname: "",
      fellowCount: 0,
      name: ""
    };
  },
  methods: {
    init() {
      this.urlname = this.$route.params.urlname;

      this.$http
        .get(GET_PROXY_API + "https://api.huaban.com/explore/" + this.urlname) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);
          this.name = res.data.name;
          this.fellowCount = res.data.following_count;
          this.params = res.data.pins[res.data.pins.length - 1].pin_id;
          var newArr = [];
          res.data.pins.forEach((item, index) => {
            var obj = {};
            obj.src = "http://img.hb.aicdn.com/" + item.file.key + COMPRESS;
            // obj.href = "/pic/" + item.pin_id;
            obj.pin_id=item.pin_id
            newArr.push(obj);
          });

          this.imgsArr = this.imgsArr.concat(newArr);
        });
    },
    getData() {
      this.$http
        .get(
          GET_PROXY_API +
            "https://api.huaban.com/explore/" +
            this.urlname +
            "/?limit=20&max=" +
            this.params
        ) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);

          this.params = res.data.pins[res.data.pins.length - 1].pin_id;

          var newArr = [];
          res.data.pins.forEach((item, index) => {
            var obj = {};
            obj.src = "http://img.hb.aicdn.com/" + item.file.key + COMPRESS;
            // obj.href = "/pic/" + item.pin_id;
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
  created() {
    this.init();
    console.log(1);
  },
  components: {
    vueWaterfallEasy
  }
};
</script>

<style lang="scss" scoped>
.explore {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 3vw;
  // background-color: #000;
  .water-fall {
    height: 100%;
    .desc {
      margin: -3vw -3vw 0 -3vw;
      padding: 0 5vw;
      height: 80px;
      background-color: rgb(250, 250, 250);
      .name {
        font-size: 15px;
        padding-top: 16px;
      }
      .count {
        font: 10px sans-serif;
        color: #ccc;
        padding-top: 6px;
      }
    }
  }
}
</style>
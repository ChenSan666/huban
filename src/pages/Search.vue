<template>
  <div class="search">
    <div class="search-box">
      <div class="icon search-icon">皮</div>
      <input @keyup.enter="getSearchData" class="search-input" type="text" v-model="keyword" v-focus placeholder="请输入关键字...">
      <div @click="keyword=''"  class="icon clear-icon">
        <span v-show="keyword.trim()">X</span> 
      </div>

    </div>
    <hr class="hr">
    <div class="water-fall">
      <vueWaterfallEasy :reachBottomDistance="800" :gap="20"  :maxCols="2" :imgsArr="imgsArr" @scrollReachBottom="getData" @click="toPic">
      </vueWaterfallEasy>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  name: "search",
  data() {
    return {
      imgsArr: [],
      params: 0,
      keyword: "",
      explores: []
    };
  },
  methods: {
    init() {
      this.$http
        .get(GET_PROXY_API + "https://api.huaban.com/favorite/apparel/") // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);
          this.explores.push(...res.data.explores);

          this.params = res.data.pins[res.data.pins.length - 1].pin_id;
          var newArr = [];
          res.data.pins.forEach((item, index) => {
            var obj = {};
            obj.src = "http://img.hb.aicdn.com/" + item.file.key + COMPRESS;
            obj.pin_id = item.pin_id;
            newArr.push(obj);
          });
          this.imgsArr = this.imgsArr.concat(newArr);
        });
    },
    getData() {
      this.$http
        .get(
          GET_PROXY_API +
            "https://api.huaban.com/favorite/apparel/?limit=20&max=" +
            this.params
        ) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);
          this.params = res.data.pins[res.data.pins.length - 1].pin_id;

          var newArr = [];
          res.data.pins.forEach((item, index) => {
            var obj = {};
            obj.src = "http://img.hb.aicdn.com/" + item.file.key + COMPRESS;
            obj.pin_id = item.pin_id;
            newArr.push(obj);
          });

          this.imgsArr = this.imgsArr.concat(newArr);
        });
    },
    getSearchData() {
      this.imgsArr = [];
      this.$http
        .get(GET_PROXY_API + "https://api.huaban.com/search/?q=" + this.keyword) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);
          this.params = res.data.pins[res.data.pins.length - 1].pin_id;

          var newArr = [];
          res.data.pins.forEach((item, index) => {
            var obj = {};
            obj.src = "http://img.hb.aicdn.com/" + item.file.key + COMPRESS;
            obj.pin_id = item.pin_id;
            newArr.push(obj);
          });
          this.imgsArr = this.imgsArr.concat(newArr);
        });
    },
    toPic(event, { index, value }) {
      if (event.target.tagName.toLowerCase() == "img") {
        this.$router.push({
          name: "picture_page",
          params: {
            pin_id: value.pin_id
          }
        });
      }
    }
  },
  created() {
    this.init();
  },
  components: {
    Nav,
    vueWaterfallEasy
  }
};
</script>

<style lang="scss" scoped>
.search {
  height: 100%;
  width: 100%;
  padding: 3vw 3vw 64px 3vw;
  box-sizing: border-box;
  .search-box {
    display: flex;
    height: 32px;
    background-color: #eee;
    border-radius: 8px;
    box-sizing: border-box;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10vw;
      flex-basis: 10vw;
    }

    .search-input {
      flex: 1;
      padding: 0;
      outline: none;
      border: 0;
      font-size: 14px;
      height: 32px;
      background-color: #eee;
    }
  }
  .hr {
    margin: 3vw 0;
    border: 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .water-fall {
    position: absolute;
    top: 16vw;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 3vw;
  }
}
</style>
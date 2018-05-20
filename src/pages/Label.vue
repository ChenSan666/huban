<template>
  <div class="label">
    <div class="water-fall">
      <vueWaterfallEasy :reachBottomDistance="800" :gap="20"  :maxCols="2" :imgsArr="imgsArr" @scrollReachBottom="getData" @click="toPic">
      </vueWaterfallEasy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  name: "Label",
  data() {
    return {
      imgsArr: [],
      params: 0,
      keyword: "",
      id:''
    };
  },
  methods: {
    init(id) {
      this.$http
        .get(GET_PROXY_API + `https://api.huaban.com/boards/${id}/pins/?limit=20`) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);
          this.id=id;
          // this.explores.push(...res.data.explores);

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
        .get(GET_PROXY_API + `https://api.huaban.com/boards/${this.id}/pins/?limit=20&max=` + this.params) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          console.log(res);
          this.params = res.data.pins[res.data.pins.length-1].pin_id;

          var newArr = [];
          res.data.pins.forEach((item, index) => {
            var obj = {};
            obj.src = 'http://img.hb.aicdn.com/' + item.file.key + COMPRESS;
            obj.href="";
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
    var label_id = this.$route.params.id;

    this.init(label_id)
  },
  components: {
    vueWaterfallEasy
  }
};
</script>

<style lang="scss" scoped>
  .label{
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 3vw;
    .water-fall{
      height: 100%;
    }
  }
</style>
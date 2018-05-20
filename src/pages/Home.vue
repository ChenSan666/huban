<template>
  <div class="home">
    <div v-if="!!banner" class="bg" :style="'background: url('+bannerBg+') center center no-repeat;'">
    </div>
    <div class="content">
      <div class="search-box" @click="toSearchPage">
        <span class="placehold">请输入你喜欢的...</span>
        <img src="" class="search-icon">
      </div>
      <div class="tuijian">
        <div class="every every-day" @click="toUserSpace(0)">
          <span>每日精选</span>
        </div>
        <div class="every every-img" @click="toUserSpace(1)">
          <span>万能配图</span>
        </div>
      </div>
      <p class="fenlei">分类浏览</p>
      <div class="wrapper clearfix" v-if="categories == 0?false:true">
        <Box v-for="(item, index) in categories" :odd="index%2 == 0" :category="item" :key="item.id"/>
      </div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Box from "@/components/Box";
import Nav from "@/components/Nav";

export default {
  name: "home",
  data() {
    return {
      reconmmedUser:["",""],
      categories: [],
      bannerObj: null,
      banner: null
    };
  },
  mounted() {
    // console.log(this);
    if (!sessionStorage.getItem("categories")) {
      this.$http
        .get(GET_PROXY_API + "https://api.huaban.com/categories/")
        .then(res => {
          console.log(res);
          this.categories.push(...res.data.categories);
          sessionStorage.setItem(
            "categories",
            JSON.stringify(res.data.categories)
          );
        });
    } else {
      this.categories.push(...JSON.parse(sessionStorage.getItem("categories")));
    }

    if (!sessionStorage.getItem("banner")) {
      this.$http.get(GET_PROXY_API + "https://api.huaban.com/").then(res => {
        console.log(res);
        // this.categories.push(...res.data.categories);
        var newArr = [];
        sessionStorage.setItem("banner", JSON.stringify(res.data));
        res.data.recommends.forEach((item) => {
          console.log(item.user);
          if(item.user){
            newArr.push(item[user].user_id);
          }
        });

        this.reconmmedUser = newArr;
        this.banner = res.data;
        this.bannerObj = res.data.banners[0];
      });
    } else {
      this.banner = JSON.parse(sessionStorage.getItem("banner"));
      var newArr =[];
      this.banner.recommends.forEach((item) => {
        console.log(item.user);
        if(item.user){
          newArr.push(item.user.user_id);
        }
      });
      this.reconmmedUser = newArr;
      this.bannerObj = this.banner.banners[0];
      console.log(this.banner);
    }
  },
  methods:{
     toUserSpace(index){
       console.log(this.reconmmedUser);
       this.$router.push({
         path: '/user/'+this.reconmmedUser[index]
       })
     },
     toSearchPage() {
       this.$router.push({
         name: 'search_page'
       })
     }
  },
  computed: {
    bannerBg() {
      if (this.bannerObj) {
        return (
          "https://hbfile.b0.upaiyun.com/" +
          this.bannerObj.cover.path +
          this.bannerObj.cover.key
        );
      } else {
        return "";
      }
    }
  },
  components: { Box, Nav}
};
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 64px;
  .bg {
    width: 100%;
    height: 160px;
    // background-color: #ccc;
  }
  .content {
    width: 94vw;
    margin: 0 auto;
    margin-top: -32px;
    // background-color: #999;
    .search-box {
      display: flex;
      align-content: center;
      height: 64px;
      margin-bottom: 16px;
      box-sizing: border-box;
      padding: 14px;
      background-color: rgb(250, 250, 250);
      border-radius: 6px;
      color: #ccc;
      .placehold {
        line-height: 38px;
        font-size: 24px;
      }
      // .search-icon{}
    }
    .tuijian {
      display: flex;
      justify-content: space-between;
      height: 56px;
      .every {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 46vw;
        width: 46vw;
        border-radius: 6px;
        font-size: 14px;
        color: #fff;
      }
      .every-day {
        background: -webkit-linear-gradient(left, rgb(0, 100, 255), rgb(0, 240, 255));
      }
      .every-img {
        background: -webkit-linear-gradient(left, rgb(48, 35, 174), rgb(200, 108, 215));
      }
      margin-bottom: 16px;
    }
    .fenlei {
      font-size: 13px;
      color: #ccc;
      padding: 0 4px 10px 4px;
    }
  }
}
</style>
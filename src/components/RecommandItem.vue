<template>
  <div class="recommand-box" >
    <div class="recommand-bg clearfix">
      
      <div v-for="(item, index) in explore.top_three " class="recommand-bg-item" :class="(index < 2)?'index':''" :key="item.pin_id" :style="'background-image:url(http://img.hb.aicdn.com/'+item.file.key+'_/fw/486/gifto/true)'"></div>
    </div>
    <div class="recommand-class">{{explore.name}}</div>
    <p class="recommand-desc">{{desc}}</p>
  </div>
</template>

<script>
export default {
  name:"recommandItem",
  props:{
    explore:{
      type: Object
    }
  },
  data() {
    return {

    };
  },
  computed: {
    desc() {
      if(!this.explore.description){
        return "";
      }else{
        return this.explore.description;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recommand-box {
  margin: 10px 0 48px 0;
  .recommand-bg {
    margin: 10px 0;
    .recommand-bg-item {
      height: 30vw;
      width: 30vw;
      float: left;
      background: url('http://img.hb.aicdn.com/7a9acb97796fc89d2fd80bef6841a00215af3cf9b496b-8ZrgIQ') center center / cover no-repeat;
      background-color: #ccc;
      &.index{
        margin-right: 2vw;
      }
    }
  }
  .recommand-class {
    font-size: 15px;
    color: #0f0f0f;
    font-weight: 700;
  }
  .recommand-desc {
    padding-top: 6px;
    font-size: 11px;
    font-weight: 300;
    color: #aaa;
  }
}
</style>
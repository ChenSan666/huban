<template>
  <div class="user-space clearfix" v-if="boards != 0">
    <user-space-box v-for="(item, index) in boards" :board="item" :key="item.board_id" :index="index"/>
  </div>
</template>

<script>
  import UserSpaceBox from '@/components/UserSpaceBox';
  export default {
    name: "userspace",
    data() {
      return {
        boards: [],
      };
    },
    mounted() {
      var user_id = this.$route.params.id;
      this.$http.get(GET_PROXY_API + "https://api.huaban.com/users/"+user_id+"/boards?max=null&limit=20 ")
        .then(res => {
          console.log(res);
          this.boards = res.data.boards;
          console.log(this.boards);
        })
    },
    components: {UserSpaceBox}
  }
</script>

<style lang="scss" scoped>
.user-space{
  padding: 2vw 3vw;
  padding-bottom: 64px;
  background-color: rgb(252,252,252);
}
</style>
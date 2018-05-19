<template>
  <div class="user-space clearfix">
    <user-space-box :index="0"/>
    <user-space-box/>
    <user-space-box :index="0"/>
    <user-space-box/>
    <user-space-box :index="0"/>
    <user-space-box/>
    <user-space-box :index="0"/>
    <user-space-box/>
    <user-space-box :index="0"/>
    <user-space-box/>
    <user-space-box :index="0"/>
    <user-space-box/>
    <user-space-box :index="0"/>
    <user-space-box/>
    <user-space-box :index="0"/>
    <user-space-box/>
  </div>
</template>

<script>
  import UserSpaceBox from '@/components/UserSpaceBox';
  export default {
    name: "userspace",
    components: {UserSpaceBox}
  }
</script>

<style lang="scss" scoped>
.user-space{
  padding: 2vw 3vw;
  padding-bottom: 64px;
  background-color: rgb(244,244,244);
}
</style>
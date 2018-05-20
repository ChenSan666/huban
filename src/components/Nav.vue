<template>
  <div class="nav">
    <div class="nav-item">
      <router-link to="/home">
        主页
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/find">
        发现
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/search">
        搜索
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 64px;
  display: flex;
  border-top: 1px solid #eee;
  align-items: center;
  justify-content: center;
  background-color: rgb(253, 253, 253);
  z-index: 100;
  .nav-item {
    flex: 1;
    display: flex;
    a {
      color: #999;
      display: inline-block;
      text-align: center;
      line-height: 64px;
      width: 100%;
      height: 100%;
      &.router-link-active {
        color: #0f0f0f;
      }
    }
  }
}
</style>
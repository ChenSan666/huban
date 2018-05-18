<template>
  <div id="app">
    <router-view/>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from "@/components/Nav";

  export default {
    name: "App",
    components: {Nav}
  }
</script>

<style>

</style>

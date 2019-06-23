<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/TheHeader";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
@import url(~@/assets/blog_template/bower_components/bootstrap/dist/css/bootstrap.css);
@import url(~@/assets/blog_template/css/app.css);
</style>

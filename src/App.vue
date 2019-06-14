<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
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

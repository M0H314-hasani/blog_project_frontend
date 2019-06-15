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
  },
};
</script>

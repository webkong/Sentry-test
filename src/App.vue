<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Sentry + Vue.js 示例</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  created() {
    
      const a = {};
      a.length = 0;
      const b = a['k'].length // k没有length所以会报错
      console.log(b);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

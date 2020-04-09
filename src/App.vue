<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "app",
  components: {
    Calculator,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #46b759;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

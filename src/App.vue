<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Layout from "@/views/Layout.vue";

@Component({
  components: {
    Layout
  },
})
export default class App extends Vue {
}
</script>

<style>
@font-face {
  font-family: 'Vitro_core';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Vitro_core.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Vitro_pride';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Vitro_pride.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  padding: 0px;

}
</style>

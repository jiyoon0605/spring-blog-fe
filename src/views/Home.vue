<template>
  <div class="home">
    Home
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Home extends Vue{

}
</script>
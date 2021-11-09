<template>
  <el-card class="post-card-container">
    <img class="blog-card-img"
         src="https://thumbs.dreamstime.com/z/tv-test-image-card-rainbow-multi-color-bars-geometric-signals-retro-hardware-s-minimal-pop-art-print-suitable-89603635.jpg"/>
    <div class="post-card-box">
      <div class="blog-card-title">test</div>
      <div class="blog-card-date">2021.11.09</div>
    </div>
  </el-card>
</template>
<script lang="ts">
import {Vue} from "vue-property-decorator";

export default class BlogPostCard extends Vue {

}
</script>
<style>
.el-card__body {
  padding: 0px;
}

.post-card-container {
  width: 330px;
  height: 420px;
  background-color: white;
  border-radius: 20px;
  transition: 300ms ease all;
  padding: 0 !important;
}

.post-card-container:hover {
  transform: rotate(-1deg);
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
}

.blog-card-title {
  font-family: Vitro_core;
  font-size: 25px;
  width: 100%;
}

.blog-card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-card-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 15px 15px 15px;
}

.blog-card-date {
  font-family: Vitro_pride;
  font-size: 15px;
  margin: 10px 0px;
}
</style>
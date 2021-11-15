<template>
  <el-card class="post-card-container" @click.native="goToDetail">
    <img class="blog-card-img" :src="image" v-if="image"/>
    <div class="post-card-box">
      <div class="blog-card-title" v-text="title"/>
      <div class="blog-card-date" v-text="createAt"/>
      <div class="blog-card-contents" v-text="contents"/>
      <div class="blog-card-view" v-text="view"/>
    </div>
  </el-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Post} from "@/model/Post";

@Component
export default class BlogPostCard extends Vue {
  @Prop() private readonly postData: Post;

  get title() {
    return this.postData.TITLE;
  }

  get contents() {
    return this.postData.CONTENTS;
  }

  get createAt() {
    return this.postData.CREATED_AT;
  }

  get image() {
    return this.postData.IMAGE_URL;
  }

  get view() {
    return this.postData.VIEWS
  }

  goToDetail() {
    this.$router.push({
      name: 'postDetail',
      params: {
        id: this.postData.ID.toString()
      }
    })
  }

}
</script>
<style>
.el-card__body {
  padding: 0px;
}

.post-card-container {
  width: 330px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  transition: 300ms ease all;
  padding: 0 !important;
  position: relative;
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
  margin: 10px 0;
  color: #9fa3a9;
}

.blog-card-contents {
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 10px;
}

.blog-card-view {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #9fa3a9;
}
</style>
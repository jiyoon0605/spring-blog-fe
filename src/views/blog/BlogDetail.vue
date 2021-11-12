<template>
  <div class="blog-detail-container">
    <div class="blog-detail-box">
      <div class="blog-detail-header-info">
        <div class="blog-detail-title" v-text="title"/>
        <div class="blog-detail-date" v-text="date"/>
      </div>
      <img class="blog-detail-img" :src="image" v-show="image"/>
      <div content="content"></div>
    </div>
  </div>
</template>
<script lang="ts">
import CommonView from "@/views/CommonView";
import {Component} from "vue-property-decorator";
import {getPostDetail} from "@/api/PostApi";
import {PostDetail} from "@/model/Post";

@Component
export default class BlogDetail extends CommonView {
  private postId: number = null;
  private postData: PostDetail = {
    TITLE: '',
    CONTENTS: '',
    CREATED_AT: '',
    WRITER: '',
    ID: 0,
    VIEWS: 0,
  };

  mounted() {
    this.postId = parseInt(this.$route.params.id);
    this.getPostDetailData();
  }

  get title() {
    return this.postData.TITLE;
  }

  get date() {
    return this.postData?.EDITED_AT ?
        this.postData.CREATED_AT + `(edited : ${this.postData?.EDITED_AT})` :
        this.postData.CREATED_AT;
  }

  get image() {
    return this.postData?.IMAGE_URL;
  }

  get content() {
    return this.postData.CONTENTS;
  }


  getPostDetailData() {
    getPostDetail(this.postId)
        .then(res => {
          const {data} = res.data.result.data;
          this.postData = data;
          console.log(this.postData)
        })
        .catch(err => {
          const {data} = err.response;
          this.alertData.type = 'error';
          this.alertData.title = data.message;
          this.alertData.description = data.result.data.message;
          this.alertData.isShow = true;
          this.$router.push({name: 'blog'});
        })
  }
}
</script>
<style>
.blog-detail-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 50px;
}

.blog-detail-box {
  width: 1000px;
}

.blog-detail-title {
  font-family: Vitro_core;
  font-size: 35px;
}

.blog-detail-img {
  width: 100%;
  margin: 30px 0;
}
</style>
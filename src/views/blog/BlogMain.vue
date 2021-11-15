<template>
  <main class="blog-main">
    <BlogMenu/>
    <div class="blog-container">
      <div v-for="post in postList" :key="post.ID">
        <BlogPostCard :post-data="post"/>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import {Component} from "vue-property-decorator";
import BlogPostCard from "@/components/card/BlogPostCard.vue";
import {getPostList} from "@/api/PostApi";
import {Post} from "@/model/Post";
import CommonView from "@/views/CommonView";
import BlogMenu from "@/components/nav/BlogMenu.vue";

@Component({
  components: {BlogMenu, BlogPostCard}
})
export default class BlogMain extends CommonView {
  private postList: Post[] = [];

  get getPostList() {
    return this.postList;
  }

  mounted() {
    getPostList()
        .then(res => {
          const {data} = res.data.result;
          this.postList = data;
          this.postList.forEach(el => el.CONTENTS = el.CONTENTS.replace(/(<([^>]+)>)/gi, ""));
        })
        .catch(err => {
          const {message, result} = err.response.data;
          this.alertData.type = 'error';
          this.alertData.title = message;
          this.alertData.description = result.message;
          this.alertData.isShow = true;
        })
  }

}
</script>
<style>
.blog-main {
  background-color: #eff0f3;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -99;
}

.blog-container {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 1500px;
  height: 900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 10px;
  justify-items: center;
}

.blog-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}

.is-opened {
  background-color: transparent !important;
}
</style>
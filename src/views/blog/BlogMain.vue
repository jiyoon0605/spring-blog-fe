<template>
  <main class="blog-main">
    <BlogMenu @onSearch="onSearchTitle" @onChangeSort="onChangeSort"/>
    <div class="blog-container">
      <div v-for="post in filteredPostList" :key="post.ID">
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
  private filteredPostList: Post[] = [];


  get getPostList() {
    return this.postList;
  }

  mounted() {
    getPostList()
        .then(res => {
          const {data} = res.data.result;
          this.postList = data;
          this.postList.forEach(el => el.CONTENTS = el.CONTENTS.replace(/(<([^>]+)>)/gi, ""));
          this.filteredPostList = this.postList;
        })
        .catch(err => {
          const {message, result} = err.response.data;
          this.alertData.type = 'error';
          this.alertData.title = message;
          this.alertData.description = result.message;
          this.alertData.isShow = true;
        })

  }

  onSearchTitle(text) {
    this.filteredPostList = this.postList.filter(el => el.TITLE.includes(text));
  }

  onChangeSort(num) {
    if (num == 0)
      this.filteredPostList = this.postList.slice().sort((a, b) => a.CREATED_AT - b.CREATED_AT);
    else if (num == 1)
      this.filteredPostList = this.postList.slice().sort((a, b) => b.VIEWS - a.VIEWS);
    else
      this.filteredPostList = this.postList.slice().sort((a, b) => a.CREATED_AT - b.CREATED_AT).reverse();

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
  align-content: flex-start;
}

.blog-container::-webkit-scrollbar {
  display: none;
}

.is-opened {
  background-color: transparent !important;
}
</style>
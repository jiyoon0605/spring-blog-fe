<template>
  <main>
    <div v-for="(info,index) in cardInfos" :key="index" class="section-container">
      <InfoSection :info="info">
        <div :class="index===0?'main card-item card-text-box':'card-item card-text-box'" style="width: 40%">
          <div class="card-title" v-text="info.title"/>
          <div class="card-description" v-text="info.description"/>
          <LinkedButton :class="index===0?'main card-label-button':'card-label-button'" :button-label="info.routeLabel"
                        :path-name="info.routePath"/>
        </div>
      </InfoSection>
    </div>
    <div class="new-post-list">
      <h1>Recent Post</h1>
      <div class="main-post-container">
        <BlogPostCard :post-data="post" v-for="post in recentPosts" :key="post.ID"/>
      </div>
    </div>
    <div class="popular-post-list">
      <h1>Popular Post</h1>
      <div class="main-post-container">
        <BlogPostCard :post-data="post" v-for="post in popularPosts" :key="post.ID"/>
      </div>
    </div>
  </main>
</template>
<script lang="ts">

import InfoSection from "@/components/card/InfoSection.vue";
import {Component} from "vue-property-decorator";
import {CardInfo} from "@/model/Home";
import LinkedButton from "@/components/button/LinkedButton.vue";
import welcomeImg from "@/assets/blogPhotos/coding.jpg"
import {getPostList} from "@/api/PostApi";
import {Post} from "@/model/Post";
import CommonView from "@/views/CommonView";
import BlogPostCard from "@/components/card/BlogPostCard.vue";

@Component({
  components: {BlogPostCard, LinkedButton, InfoSection},
})
export default class Home extends CommonView {
  cardInfos: CardInfo[] = [
    {
      title: 'WELCOME!',
      description: 'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
      routePath: 'auth',
      routeLabel: 'LOGIN/REGISTER',
      imgPathString: welcomeImg,
      leftText: false,
    },
  ]
  recentPosts: Post[] = [];
  popularPosts: Post[] = [];

  mounted() {
    getPostList().then(res => {
      const {data} = res.data.result;
      this.recentPosts = data.slice();
      this.recentPosts.forEach(el => el.CONTENTS = el.CONTENTS.replace(/(<([^>]+)>)/gi, ""));
      this.recentPosts = this.recentPosts.slice(0, 3)

      this.popularPosts = data.slice();
      this.popularPosts.forEach(el => el.CONTENTS = el.CONTENTS.replace(/(<([^>]+)>)/gi, ""));
      this.popularPosts.sort((a, b) => b.VIEWS - a.VIEWS)
      this.popularPosts = this.popularPosts.slice(0, 3)

      console.log(this.recentPosts, this.popularPosts)
    })
  }


}
</script>
<style>

main h1 {
  width: 100%;
  font-family: Vitro_core;
  margin: 0 0 50px 50px;
}

.main-post-container {
  padding: 70px 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  align-content: center;

}

.new-post-list,
.popular-post-list {
  padding-top: 50px;
  height: 100%;
}

.popular-post-list {
  border-top: 1px solid #d2d2d2;
}
</style>
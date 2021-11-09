<template>
  <main class="blog-main">
    <div class="blog-container">
      <BlogPostCard/>
    </div>
  </main>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import BlogPostCard from "@/components/card/BlogPostCard.vue";

@Component({
  components: {BlogPostCard}
})
export default class BlogMain extends Vue {

}
</script>
<style>
.blog-main {
  background-color: #9d9fa8;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-container {
  margin-top: 20px;
  box-sizing: border-box;
  padding:20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 1500px;
  height: 900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 10px;
  justify-items: center
}

.blog-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
</style>
<template>
  <div class="post-editor-container">
    <div class="post-editor-title">Create New Post</div>
    <TextEditor/>
  </div>
</template>
<script lang="ts">
import CommonView from "@/views/CommonView";
import {Component} from "vue-property-decorator";
import TextEditor from "@/components/textEditor/TextEditor.vue";
import RoundButton from "@/components/button/RoundButton.vue";

@Component({
  components: {RoundButton, TextEditor}
})
export default class BlogPost extends CommonView {

}
</script>
<style>
.post-editor-container {
  height: 100vh;
  box-sizing: border-box;
  padding: 50px 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-editor-title {
  font-family: Vitro_core;
  font-size: 30px;
  margin: 60px 0;
}
</style>
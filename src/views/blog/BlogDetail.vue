<template>
  <div class="blog-detail-container">
    <div class="blog-detail-box">
      <div class="blog-detail-header-info">
        <div class="blog-detail-title" v-text="title"/>
        <div class="blog-detail-date" v-text="date"/>
        <div>
          <div v-text="writer" class="blog-detail-writer-name"/>
          <div v-text="email" class="blog-detail-writer-email"/>
        </div>
        <div class="blog-detail-view">view : {{ view }}</div>
        <div class="contents-box">
          <editor-content class="editor-content" :editor="editor" v-if="editor"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import CommonView from "@/views/CommonView";
import {Component} from "vue-property-decorator";
import {getPostDetail, increaseView} from "@/api/PostApi";
import {PostDetail} from "@/model/Post";
import {Editor, EditorContent} from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

@Component({
  components: {
    EditorContent
  }
})
export default class BlogDetail extends CommonView {
  editor: Editor = new Editor({extensions: [StarterKit], editable: false,})
  private postId: number = null;
  private postData: PostDetail = {
    TITLE: '',
    CONTENTS: '',
    CREATED_AT: '',
    WRITER: '',
    ID: 0,
    VIEWS: 0,
  };

  beforeMount() {
    this.editor = new Editor({
      content: '<div>No Content</div>',
      extensions: [
        StarterKit,
      ],
      editable: false,
    })
  }

  mounted() {
    this.postId = parseInt(this.$route.params.id);
    this.getPostDetailData();
  }

  get content() {
    return this.postData.CONTENTS
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

  get writer() {
    return this.postData.NICKNAME;
  }

  get email() {
    return this.postData.EMAIL;
  }

  get view() {
    return this.postData.VIEWS;
  }


  getPostDetailData() {
    increaseView(this.$route.params.id)
        .then(() =>
            getPostDetail(this.postId)
                .then(res => {
                  const {data} = res.data.result;
                  this.postData = data;
                  this.editor.commands.setContent(this.postData.CONTENTS)
                })
                .catch(err => {
                  const {data} = err.response;
                  this.alertData.type = 'error';
                  this.alertData.title = data.message;
                  this.alertData.description = data.result.data.message;
                  this.alertData.isShow = true;
                  this.$router.push({name: 'blog'});
                })
        )

  }
}
</script>
<style>
.blog-detail-container {
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

.contents-box {
  margin-top: 80px;
  width: 100%;
}

code {
  background-color: rgba(97, 97, 97, 0.1);
  color: #616161;
}

pre {
  background: #0D0D0D;
  color: #FFF;
  font-family: 'JetBrainsMono', monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

}

.ProseMirror code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
}


.ProseMirror blockquote {
  padding-left: 1rem;
  border-left: 2px solid rgba(13, 13, 13, 0.1);
}

.ProseMirror hr {
  border: none;
  border-top: 2px solid rgba(13, 13, 13, 0.1);
  margin: 2rem 0;
}

.ProseMirror li {
  margin-left: 20px;
}

.blog-detail-writer-name {
  margin-top: 20px;
  font-family: Vitro_core;
  font-size: 15px;
}

.blog-detail-writer-email {
  color: #565960;
}

.blog-detail-view {
  width: 100%;
  text-align: right;
}

</style>
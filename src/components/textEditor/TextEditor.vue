<template>
  <editor-content :editor="editor" v-if="editor"/>
</template>

<script lang="ts">
import {Editor, EditorContent} from '@tiptap/vue-2'
import {Component, Vue} from "vue-property-decorator";
import StarterKit from "@tiptap/starter-kit";

@Component({
  components: {
    EditorContent
  }
})
export default class TextEditor extends Vue {
  editor: Editor = null;
  beforeMount(){
    this.editor=new Editor({
      content:'<div>test</div>',
      extensions:[
          StarterKit
      ]
    })
  }

  beforeDestroy(){
    this.editor?.destroy()
  }
}
</script>
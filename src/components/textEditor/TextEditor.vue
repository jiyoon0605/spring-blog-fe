<template>
  <div class="editor-box">
    <div class="editor-title">
      <el-input v-model="title" placeholder="title"/>
    </div>
    <div v-if="editor" class="editor-header">
      <div class="editor-header-buttons">
        <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          <font-awesome icon="bold"/>
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
          <font-awesome icon="italic"/>
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
          <font-awesome icon="strikethrough"/>
        </button>
        <select @change="onHeadingChange">
          <option label="h1" value="1"/>
          <option label="h2" value="2"/>
          <option label="h3" value="3"/>
          <option label="h4" value="4"/>
          <option label="h5" value="5"/>
          <option label="h6" value="6"/>
        </select>
        <button @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }">
          <font-awesome icon="list-ul"/>
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }">
          <font-awesome icon="list-ol"/>
        </button>
        <button @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }">
          <font-awesome icon="code"/>
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }">
          <font-awesome icon="quote-left"/>
        </button>
        <button @click="editor.chain().focus().setHorizontalRule().run()">
          <font-awesome icon="grip-lines"/>
        </button>
        <button @click="editor.chain().focus().undo().run()">
          <font-awesome icon="undo"/>
        </button>
        <button @click="editor.chain().focus().redo().run()">
          <font-awesome icon="redo"/>
        </button>
        <input id="imageInput" name="imageInput" type="file" accept=".gif, .jpg, .png" @change="addImage" :ref="image"/>
        <label for="imageInput" v-if="imageIsNull">
          <font-awesome icon="image"/>
        </label>
        <div v-else>
          <p>{{ imageName }}</p>
          <button>삭제</button>
        </div>
      </div>
      <div class="editor-header-right">
        <RoundButton button-label="submit" style="margin-right:5px;"/>
      </div>

    </div>
    <editor-content class="editor-content" :editor="editor" v-if="editor"/>
    <div class="limit-text">
      {{ getCurText }}/{{ limit }}
    </div>
  </div>
</template>

<script lang="ts">
import {Editor, EditorContent, FloatingMenu} from '@tiptap/vue-2'
import {Component, Vue} from "vue-property-decorator";
import RoundButton from "@/components/button/RoundButton.vue";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";

@Component({
  components: {
    RoundButton,
    EditorContent,
    FloatingMenu
  }
})
export default class TextEditor extends Vue {
  editor: Editor;
  title: string = '';
  limit = 5000;
  image = null;

  beforeMount() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        CharacterCount.configure(({
          limit: this.limit
        }))
      ]
    })
  }

  beforeDestroy() {
    this.editor?.destroy()
  }

  onHeadingChange() {
    this.editor.chain().focus().toggleHeading({level: 1}).run()
  }

  onFocus() {
    this.editor.chain().focus();
  }

  get getCurText() {
    return this.editor.getText().length | 0;
  }

  addImage(e) {
    this.image = e.target.files[0];
  }

  get imageIsNull() {
    return this.image === null;
  }

  get imageName() {
    return this.image.name;
  }
}
</script>
<style>
.editor-box {
  display: flex;
  flex-direction: column;
  color: #0d0d0d;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  position: relative;
}

.editor-header {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  flex-wrap: wrap;
  padding: 0.25rem;
  border-bottom: 1px solid black;
}

.editor-header {
  display: flex;
  justify-content: space-between;
}

.editor-header-buttons > button,
.editor-header-buttons label {
  background-color: transparent;
  min-width: 30px;
  height: 40px;
  outline: none;
  border: none;
  margin: 3px;
  border-radius: 5px;

}

.editor-header-buttons > label {
  padding: 10px 8px;
}

.limit-text {
  margin: 0 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;

}

.editor-header-buttons > button:hover,
.editor-header-buttons > button:active,
.editor-header-buttons label:hover {
  background-color: cornflowerblue;
  color: white;

}

.editor-content {
  padding: 20px;
  overflow-x: hidden;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0;
  outline: none;
  border: none;
}

.editor-title input {
  font-family: Vitro_core;
  font-size: 30px;
  padding: 40px 20px;
  outline: none;
  border: none;
  color: black;
}

.editor-header-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

select {
  width: 100px;
  font-family: Vitro_pride;
  margin: 0 10px;
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

#imageInput {
  width: 0;
  height: 0;
  visibility: hidden;
}

</style>
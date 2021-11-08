<template>
  <el-button class="link-button" type="text" v-text="buttonLabel" @click="goto"></el-button>
</template>
<script lang="ts">

import {Prop, Vue} from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class LinkedButton extends Vue {
  @Prop({default: ''}) private pathName: string;
  @Prop({default: ''}) private buttonLabel: string;

  public goto() {
    this.$router.push(this.pathName);
  }
}
</script>
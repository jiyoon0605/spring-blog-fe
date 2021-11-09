<template>
  <el-button class="link-button" type="text" v-text="buttonLabel" @click="goto"></el-button>
</template>
<script lang="ts">

import {Mixins, Prop} from "vue-property-decorator";
import Component from "vue-class-component";
import Button from "@/components/button/Button";

@Component
export default class LinkedButton extends Mixins<Button>(Button) {
  @Prop({default: ''}) private pathName: string;

  public goto() {
    this.$router.push({name: this.pathName});
  }
}
</script>
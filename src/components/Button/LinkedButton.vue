<template>
  <el-button class="link-button" type="text" v-text="buttonLabel"></el-button>
</template>
<script lang="ts">

import {Prop, Vue} from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class LinkedButton extends Vue {
  @Prop({default: ''}) private pathName: string;
  @Prop({default: ''}) private buttonLabel: string;
}
</script>
<style>
.link-button{
  margin:0 20px !important;
  font-size: 15px !important;
  font-family: Vitro_core !important;
  color: #565960 !important;
}
.link-button:hover{
  color: cornflowerblue !important;
}
</style>
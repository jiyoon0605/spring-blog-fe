<template>
  <el-button round v-text="buttonLabel"></el-button>
</template>
<script lang="ts">
import {Component, Mixins} from "vue-property-decorator";
import Button from "@/components/button/Button";

@Component
export default class RoundButton extends Mixins<Button>(Button) {

}
</script>
<style>
.el-button--default{
  font-family: Vitro_core !important;
  font-size: 15px !important;
  background-color: cornflowerblue !important;
  border: none !important;
  color: white !important;
  padding:10px 30px !important;
  margin-top: 40px;

}
</style>
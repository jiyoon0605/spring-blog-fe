<template>
  <div class="card">
    <slot v-if="!info.leftText"/>
    <img class="card-item" style="width: 60%" :src="info.imgPathString"/>
    <slot v-if="info.leftText"/>

  </div>
</template>
<script lang="ts">
import {Prop, Vue} from "vue-property-decorator";
import Component from "vue-class-component";
import {CardInfo} from "@/model/home";


@Component
export default class InfoSection extends Vue {
  @Prop() private readonly info: CardInfo;
}
</script>
<style>
.card {

  width: 100%;
  height: 650px;
  display: flex;
}

.card-item {
  height: 100%;
  background-color: white;
  color: #303030 !important;
}

.card-text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;
}

.card-text-box > * {
  width: 100%;
}

.main {
  background-color: #303030 !important;
  color: white !important;
}

.card-title {
  font-family: Vitro_core;
  font-size: 25px;
  margin: 30px;
}

.card-description {
  font-size: 15px;
  font-family: Vitro_pride;
}

.card-label-button {
  text-align: left !important;
  font-size: 20px !important;
  margin-top: 10px !important;
  color: #303030;
  font-family: Vitro_pride !important;
}
.card-label-button:hover{
  text-decoration: underline;
}
</style>
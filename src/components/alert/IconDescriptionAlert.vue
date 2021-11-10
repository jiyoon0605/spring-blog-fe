<template>
  <div class="alert-container">
    <el-alert
        v-show="isShow"
        :title="title"
        :type="type"
        :description="description"
        show-icon
        @close="onClose"
    />
  </div>

</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class IconDescriptionAlert extends Vue {
  @Prop({default: () => false}) private readonly isShow: boolean;
  @Prop({default: () => ''}) private readonly type: string;
  @Prop({default: () => ''}) private readonly title: string;
  @Prop({default: () => ''}) private readonly description: string;

  onClose(){
    this.$emit("close");
  }
}
</script>
<style>
.alert-container {
  top: 20px;
  position: absolute;
}
.el-alert{
  min-width: 300px;
}
</style>
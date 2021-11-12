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
import {Component, Vue} from "vue-property-decorator";

@Component
export default class IconDescriptionAlert extends Vue {


  onClose() {
    this.$store.commit("setAlertIsShow", false);
  }

  get isShow() {
    return this.$store.getters.getAlertInfo.isShow;
  }

  get title() {
    return this.$store.getters.getAlertInfo.title;
  }

  get type() {
    return this.$store.getters.getAlertInfo.type;
  }

  get description() {
    return this.$store.getters.getAlertInfo.description;
  }

}
</script>
<style>
.alert-container {
  top: 40px;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  box-sizing: border-box;
  padding: 0 50px;
}

.el-alert {
  min-width: 100px !important;
  max-width: 500px !important;
}
</style>
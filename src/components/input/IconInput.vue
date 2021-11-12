<template>
  <el-input class="input-container"
            :prefix-icon="iconName"
            :placeholder="placeholder"
            :type="type"
            v-model="value"
            @change="onChange"
  />
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class IconInput extends Vue {
  @Prop() private readonly placeholder: string;
  @Prop() private readonly iconName: string;
  @Prop() private readonly type: string;
  private readonly value: string="";

  onChange() {
    this.$emit('onChange', {name: this.placeholder, value: this.value});
  }
}
</script>
<style>
.input-container .el-input__inner {
  width: 100% !important;
  height: 100% !important;
  font-family: Vitro_pride !important;
  font-size: 15px !important;
  background-color: #303030 !important;
  color: white !important;

}

.input-container {
  width: 350px !important;
  height: 50px !important;
  margin-bottom: 10px !important;
}
</style>
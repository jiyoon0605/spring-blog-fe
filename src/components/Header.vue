<template>
  <header class="header-container">
    <div class="logo">BLOG</div>
    <div class="navigation">
      <LinkedButton buttonLabel="HOME" pathName="home"/>
      <LinkedButton buttonLabel="BLOGS"/>
      <LinkedButton buttonLabel="LOGIN / REGISTER"/>
    </div>
  </header>
</template>
<script lang="ts">
import {Vue} from "vue-property-decorator";
import Component from "vue-class-component";
import LinkedButton from "@/components/Button/LinkedButton.vue";

@Component({
  components: {LinkedButton},
  component: {
    LinkedButton
  }
})
export default class Header extends Vue {

}
</script>
<style>

.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 35px 80px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);
}

.logo {
  font-family: Vitro_core;
  font-size: 30px;
  color: cornflowerblue;
}
</style>
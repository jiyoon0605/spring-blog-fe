<template>
  <div>
    <header class="header-container">
      <div class="logo" @click="onTitleClick">BLOG</div>
      <div class="navigation">
        <LinkedButton class="header-link" buttonLabel="HOME" pathName="home"/>
        <LinkedButton class="header-link" buttonLabel="BLOGS" path-name="blog"/>
        <LinkedButton class="header-link" buttonLabel="LOGIN / REGISTER" path-name="auth"/>
      </div>
    </header>
  </div>

</template>
<script lang="ts">
import {Vue} from "vue-property-decorator";
import Component from "vue-class-component";
import LinkedButton from "@/components/button/LinkedButton.vue";
import InfoSection from "@/components/card/InfoSection.vue";

@Component({
  components: {LinkedButton, InfoSection},
})
export default class Header extends Vue {

  public onTitleClick(){
    this.$router.push("home");
  }
}
</script>
<style>

.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 80px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);
  z-index: 999;
}

.logo {
  font-family: Vitro_core;
  font-size: 30px;
  color: cornflowerblue;
}

.header-link {
  margin: 0 20px !important;
  font-size: 15px !important;
  font-family: Vitro_core !important;
  color: #565960 !important;
}

.header-link:hover {
  color: cornflowerblue !important;
}
</style>
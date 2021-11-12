<template>
  <el-menu mode="horizontal"
           class="blog-nav-container"
           background-color="transparent"
           active-text-color="#000000">
    <el-menu-item index="1" @keyup="onSearch">
      <el-input v-model="searchText" class="blog-nav-input" prefix-icon="el-icon-search"
                @keyup.native.enter="onSearch"/>
    </el-menu-item>
    <el-menu-item index="2">
      <el-select class="blog-nav-select" v-model="sortType" placeholder="sort" default-first-option>
        <el-option v-for="(type,index) in sortTypeList"
                   :key="index"
                   :label="type.label"
                   :value="type.value"/>
      </el-select>
    </el-menu-item>
    <el-menu-item>
      <el-button class="new-post-btn" v-text="'new post'" @click="gotoWrite"/>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class BlogNavigation extends Vue {
  private sortType: string = 'last';
  private searchText: string = '';
  private sortTypeList =
      [
        {label: 'Latest order', value: 'last'},
        {label: 'View order', value: 'view'},
        {label: 'past order', value: 'past'}
      ];

  onSearch() {
    console.log("teset");
  }

  gotoWrite() {
    this.$router.push({name:'postWrite'});
  }


}
</script>
<style>
.blog-nav-container > * {
  background-color: transparent !important;
  font-family: Vitro_pride !important;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
}

.blog-nav-container {
  width: 100vw !important;
  display: flex;
  justify-content: right;
}

.el-submenu__title {
  border-bottom-color: transparent !important;
}

.blog-nav-container .el-input__inner {
  width: 100% !important;
  height: 100% !important;
  font-family: Vitro_pride !important;
  font-size: 15px !important;
  background-color: transparent;
  border: none;
}

li {
  /*padding: 0 10px 0 0 !important;*/
  color: black !important;
  font-family: Vitro_pride;
}

.new-post-btn {
  font-family: Vitro_core !important;
  font-size: 15px !important;
  background-color: cornflowerblue !important;
  border: none !important;
  color: white !important;
  padding: 10px 30px !important;
}
</style>
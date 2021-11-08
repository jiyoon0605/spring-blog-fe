<template>
  <footer>
    <div class="left">
      <div class="info">
        <div class="name">BLOG</div>
        <div class="icons">
          <i class="el-icon-info"></i>
          <i class="el-icon-info"></i>
          <i class="el-icon-info"></i>
          <i class="el-icon-info"></i>
        </div>
      </div>
      <div class="menu">
        <LinkedButton class="link-btn" button-label="HOME" path-name="home"/>
        <LinkedButton class="link-btn" button-label="BLOGS" path-name="blog"/>
        <LinkedButton class="link-btn" button-label="LOG IN / REGISTER" path-name="auth"/>
      </div>
    </div>
    <div>Copyright 2021 All Rights Reserved</div>
  </footer>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import LinkedButton from "@/components/button/LinkedButton.vue";
@Component({
  components: {LinkedButton}
})
export default class Footer extends Vue{

}
</script>
<style>
footer {
  width: 100%;
  height: 250px;
  background-color: #303030;
  color: white;
  box-sizing: border-box;
  padding: 40px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left{
  display: flex;
}
.info{
  width: 200px;
}
.name{
  font-family: Vitro_core;
  font-size: 30px;
}
.icons{
  display: flex;
}
.icons>i{
  margin: 50px 30px 0 0;
}
.menu{
  display: flex;
  flex-direction: column;
}
.link-btn{
  color: white !important;
  font-size: 15px !important;
  text-align: left !important;
  margin:0 40px 10px 40px !important;
  font-family: Vitro_pride !important;
  padding: 0px 0px 10px 0px !important;
}
</style>
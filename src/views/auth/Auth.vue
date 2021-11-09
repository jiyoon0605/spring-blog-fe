<template>
  <div class="auth-container">
    <div class="container">
      <Login v-if="isLogin"/>
      <Register v-else/>
    </div>
    <div class="angle"/>
    <div class="background" :style="{'background-image':`url(${require('@/assets/background.png')})`}"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
@Component({
  components: {Register, Login}
})
export default class Auth extends Vue {
  private isLogin: boolean = true;

  @Watch('$route')
  watchRoute() {
    this.isLogin=this.$route.path.split("/")[1]==='login'
    console.log(this.$route.path.split("/")[1]==='login')
  }
}
</script>
<style>
.auth-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
}

.container {
  width: 690px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.background {
  width: 1000px;
  height: 100%;
  background-color: #303030;
  position: absolute;
  right: 0;
  z-index: -9;
}

.angle {
  width: 150px;
  height: 110vh;
  background-color: white;
  transform: rotate(4deg);
  position: absolute;
  left: 580px;
  top: -10px;
}


.title {
  font-family: Vitro_core;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.link-button {
  text-decoration: underline;
  font-family: Vitro_pride !important;
  font-size: 20px !important;
}

.login-register {
  font-family: Vitro_pride;
  font-size: 20px;
  color: black;
  margin-bottom: 30px
}
</style>
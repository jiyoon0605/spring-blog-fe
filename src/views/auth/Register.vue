<template>
  <div class="register-container">
    <div class="login-register">
      Already have an account?
      <LinkedButton path-name="auth" button-label="Login"/>
    </div>
    <div class="title">
      Create Your<br>Blog Account
    </div>
    <form class="login-container" v-on:submit.prevent="onSubmit">
      <IconInput icon-name="el-icon-user" placeholder="username" @onChange="onChange"/>
      <IconInput icon-name="el-icon-user" placeholder="nickname" @onChange="onChange"/>
      <IconInput icon-name="el-icon-message" placeholder="email" @onChange="onChange"/>
      <IconInput icon-name="el-icon-lock" placeholder="password" type="password" @onChange="onChange"/>
      <RoundButton button-label="SIGN UP" type="submit"/>
    </form>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import LinkedButton from "@/components/button/LinkedButton.vue";
import IconInput from "@/components/input/IconInput.vue";
import RoundButton from "@/components/button/RoundButton.vue";

@Component({
  components: {RoundButton, IconInput, LinkedButton}
})
export default class Register extends Vue {
  private registerInfo = {
    username: '',
    nickname: '',
    email: '',
    password: ''
  }

  onChange({name, value}) {
    this.registerInfo[name] = value;
  }

  onSubmit() {
    console.log(this.registerInfo)
  }
}
</script>
<style>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
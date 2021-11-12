<template>
  <div class="register-container">
    <div class="login-register">
      Already have an account?
      <LinkedButton class="auth-link-button" path-name="auth" button-label="Login"/>
    </div>
    <div class="title">
      Create Your<br>Blog Account
    </div>
    <form class="login-container" v-on:submit.prevent="onSubmit">
      <IconInput icon-name="el-icon-user" placeholder="username" @onChange="onChange"/>
      <IconInput icon-name="el-icon-user" placeholder="nickname" @onChange="onChange"/>
      <IconInput icon-name="el-icon-message" placeholder="email" @onChange="onChange"/>
      <IconInput icon-name="el-icon-lock" placeholder="password" type="password" @onChange="onChange"/>
      <RoundButton button-label="SIGN UP" type="submit" style="margin-top: 40px"/>
    </form>
  </div>
</template>
<script lang="ts">
import {Component} from "vue-property-decorator";
import LinkedButton from "@/components/button/LinkedButton.vue";
import IconInput from "@/components/input/IconInput.vue";
import RoundButton from "@/components/button/RoundButton.vue";
import {createAccount} from "@/api/AuthApi";
import {UserInfo} from "@/model/Auth";
import IconDescriptionAlert from "@/components/alert/IconDescriptionAlert.vue";
import CommonView from "@/views/CommonView";

@Component({
  components: {IconDescriptionAlert, RoundButton, IconInput, LinkedButton}
})
export default class Register extends CommonView {
  private registerInfo: UserInfo = {
    username: '',
    nickname: '',
    email: '',
    password: ''
  }

  get getAlertData() {
    return this.alertData;
  }

  onChange({name, value}) {
    this.registerInfo[name] = value;
  }

  onSubmit() {
    if (!this.onCheckEmail(this.registerInfo.email) || !this.onInvalidInfo()) {
      return;
    }

    createAccount(this.registerInfo)
        .then(res => {
          const {message, result} = res.data;
          this.alertData.title = message;
          this.alertData.description = result.message;
          this.alertData.type = 'success';
          this.$router.push('login');
        })
        .catch(err => {
          const {result, message} = err.response.data;
          this.alertData.title = message;
          this.alertData.description = result.message;
          this.alertData.type = 'error';
        })
        .finally(() => {
          this.alertData.isShow = true;
        })
  }

  onCheckEmail(email: string) {
    const reg = new RegExp(/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}/g);
    const result = reg.test(email);
    if (result) {
      return true;
    }
    this.alertData.title = 'Invalid email';
    this.alertData.description = 'Please check your email';
    this.alertData.type = "error";
    this.alertData.isShow = true;

    return false;
  }

  onInvalidInfo() {
    if (this.registerInfo.username === '') {
      this.makeAlertData('username');
      return false;
    }
    if (this.registerInfo.nickname === '') {
      this.makeAlertData('nickname');
      return false;
    }
    if (this.registerInfo.password == '') {
      this.makeAlertData('password');
      return false;
    }
    return true;
  }

  makeAlertData(key) {
    this.alertData.title = 'Invalid ' + key;
    this.alertData.description = 'Please check your ' + key;
    this.alertData.type = "error";
    this.alertData.isShow = true;
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
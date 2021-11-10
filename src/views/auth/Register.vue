<template>
  <div class="register-container">
    <IconDescriptionAlert
        :is-show="getAlertData.isShow"
        :type="getAlertData.type"
        :title="getAlertData.title"
        :description="getAlertData.description"
        @close="onAlertClose"
    />
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
      <RoundButton button-label="SIGN UP" type="submit"/>
    </form>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import LinkedButton from "@/components/button/LinkedButton.vue";
import IconInput from "@/components/input/IconInput.vue";
import RoundButton from "@/components/button/RoundButton.vue";
import {createAccount} from "@/api/AuthApi";
import {UserInfo} from "@/model/Auth";
import IconDescriptionAlert from "@/components/alert/IconDescriptionAlert.vue";

@Component({
  components: {IconDescriptionAlert, RoundButton, IconInput, LinkedButton}
})
export default class Register extends Vue {
  private registerInfo: UserInfo = {
    username: '',
    nickname: '',
    email: '',
    password: ''
  }
  private alertData = {
    isShow: false,
    type: "success",
    description: "",
    title: ""
  }

  get getAlertData() {
    return this.alertData;
  }

  onChange({name, value}) {
    this.registerInfo[name] = value;
  }

  onSubmit() {
    if (!this.onCheckEmail(this.registerInfo.email) && !this.onInvalidInfo()) {
      return;
    }

    createAccount(this.registerInfo).then(res => {
      const {message, result, success} = res.data;
      this.alertData.title = message;
      this.alertData.description = result.message;
      if (success) {
        this.alertData.type = 'success';
      } else {
        this.alertData.type = 'error';
      }
      this.alertData.isShow = true;
    })
  }

  onCheckEmail(email: string) {
    const reg = new RegExp(/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}/g);
    const result = reg.test(email);
    this.alertData.title = 'Invalid email';
    this.alertData.description = 'Please check your email';
    this.alertData.type = "error";
    this.alertData.isShow = true;

    return result;
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
    if (this.registerInfo.password === '') {
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

  onAlertClose() {
    console.log("close")
    this.alertData.isShow = false;
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
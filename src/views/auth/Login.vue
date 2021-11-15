<template>
  <div class="login-container">
    <div class="login-register">
      Don't have an account?
      <LinkedButton class="auth-link-button" button-label="Register" path-name="register"/>
    </div>
    <div class="title">
      Login to Blog
    </div>
    <form class="login-container" v-on:submit.prevent="onSubmit">
      <IconInput icon-name="el-icon-message" placeholder="email" @onChange="onChange"/>
      <IconInput icon-name="el-icon-lock" placeholder="password" type="password" @onChange="onChange"/>
      <RoundButton button-label="SIGN IN" type="submit" style="margin-top: 40px"/>
    </form>

  </div>
</template>
<script lang="ts">
import {Component} from "vue-property-decorator";
import IconInput from "@/components/input/IconInput.vue";
import LinkedButton from "@/components/button/LinkedButton.vue";
import RoundButton from "@/components/button/RoundButton.vue";
import IconDescriptionAlert from "@/components/alert/IconDescriptionAlert.vue";
import {login} from "@/api/AuthApi";
import CommonView from "@/views/CommonView";

@Component({
  components: {RoundButton, LinkedButton, IconInput, IconDescriptionAlert}
})
export default class Login extends CommonView {
  private loginInfo = {
    email: '',
    password: ''
  }


  onChange({name, value}) {
    this.loginInfo[name] = value;
  }

  onSubmit() {
    if (!this.onCheckEmail() || !this.onCheckPassword()) {
      return;
    }

    login(this.loginInfo)
        .then(res => {
          const {message, result} = res.data;
          this.alertData.type = 'success';
          this.alertData.title = message;
          this.alertData.description = result.message;
          localStorage.setItem("accessToken", result.data.token);
        })
        .catch(err => {
          const {message, result} = err.response.data;
          this.alertData.type = 'error';
          this.alertData.title = message;
          this.alertData.description = result.message;
        })
        .finally(() => {
              this.alertData.isShow = true;
              if (this.alertData.type === 'success') this.$router.push('home');
            }
        )

  }

  onCheckEmail() {
    const reg = new RegExp(/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}/g);
    const result = reg.test(this.loginInfo.email);
    if (result) {
      return true;
    }

    this.makeAlertData('email');
    return false;
  }

  onCheckPassword() {
    if (this.loginInfo.password !== '') {
      return true;
    }
    this.makeAlertData('password');
    return false;
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
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
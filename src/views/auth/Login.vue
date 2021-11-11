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
      <RoundButton button-label="SIGN IN" type="submit"/>
    </form>

  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import IconInput from "@/components/input/IconInput.vue";
import LinkedButton from "@/components/button/LinkedButton.vue";
import RoundButton from "@/components/button/RoundButton.vue";
import IconDescriptionAlert from "@/components/alert/IconDescriptionAlert.vue";
import {login} from "@/api/AuthApi";

@Component({
  components: {RoundButton, LinkedButton, IconInput, IconDescriptionAlert}
})
export default class Login extends Vue {
  private loginInfo = {
    email: '',
    password: ''
  }
  private alertData = {
    isShow: false,
    type: "success",
    description: "",
    title: ""
  }


  onChange({name, value}) {
    this.loginInfo[name] = value;
  }

  onSubmit() {
    if (!this.onCheckEmail() || !this.onCheckPassword()) {
      return;
    }

    login(this.loginInfo).then(res => {
      const {message, result, success} = res.data;
      this.alertData.title = message;
      this.alertData.description = result.message;
      if (success) {
        this.alertData.type = 'success';
        localStorage.setItem("accessToken", result.data.token);
        this.$router.push('home');
      } else {
        this.alertData.type = 'error';
      }
      this.alertData.isShow = true;
    }).finally(() => this.commitAlertInfo())

  }

  onCheckEmail() {
    const reg = new RegExp(/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}/g);
    const result = reg.test(this.loginInfo.email);
    console.log(result)
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

  @Watch('alertData', {deep: true})
  commitAlertInfo() {
    this.$store.commit("setAlertInfo", this.alertData);
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
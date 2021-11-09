<template>
  <div class="login-container">
    <div class="login-register">
      Don't have an account?
      <LinkedButton class="link-button" button-label="Register" path-name="register"/>
    </div>
    <div class="title">
      Create Your<br>Blog Account
    </div>
    <IconInput icon-name="el-icon-message" placeholder="email" @onChange="onChange"/>
    <IconInput icon-name="el-icon-lock" placeholder="password" type="password" @onChange="onChange"/>
    <RoundButton button-label="SIGN IN"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import IconInput from "@/components/input/IconInput.vue";
import LinkedButton from "@/components/button/LinkedButton.vue";
import RoundButton from "@/components/button/RoundButton.vue";

@Component({
  components: {RoundButton, LinkedButton, IconInput}
})
export default class Login extends Vue {
  private loginInfo = {
    email: '',
    password: ''
  }

  onChange({name, value}) {
    this.loginInfo[name] = value;
    console.log(this.loginInfo)
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
  color: black !important;
}

.login-register {
  font-family: Vitro_pride;
  font-size: 20px;
  color: black;
  margin-bottom: 30px
}
</style>
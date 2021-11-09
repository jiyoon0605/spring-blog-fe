<template>
  <div class="login-container">
    <div class="login-register">
      Don't have an account?
      <LinkedButton class="link-button" button-label="Register" path-name="register"/>
    </div>
    <div class="title">
      Create Your<br>Blog Account
    </div>
    <form class="login-container" v-on:submit.prevent="onSubmit">
      <IconInput icon-name="el-icon-message" placeholder="email" @onChange="onChange"/>
      <IconInput icon-name="el-icon-lock" placeholder="password" type="password" @onChange="onChange"/>
      <RoundButton button-label="SIGN IN" type="submit"/>
    </form>

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
  }

  onSubmit() {
    console.log("submit")
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
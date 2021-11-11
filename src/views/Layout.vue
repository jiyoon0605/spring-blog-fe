<template>
  <div class="home">
    <IconDescriptionAlert/>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import IconDescriptionAlert from "@/components/alert/IconDescriptionAlert.vue";

@Component({
  components: {
    IconDescriptionAlert,
    Header,
    Footer
  }
})
export default class Layout extends Vue {

}
</script>
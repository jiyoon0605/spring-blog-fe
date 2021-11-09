<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {Footer, Header}
})
export default class Main extends Vue{

}
</script>
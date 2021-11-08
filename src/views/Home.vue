<template>
  <main>
    <InfoSection/>
  </main>
</template>
<script lang="ts">

import InfoSection from "@/components/card/InfoSection.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {InfoSection},
  component: InfoSection
})
export default class Home extends Vue{
  infomations=[
    {
      title:'',
      description:'',
      path:''
    }
  ]
}
</script>
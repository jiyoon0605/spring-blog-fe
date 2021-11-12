<template>
  <main>
    <div v-for="(info,index) in cardInfos" :key="index" class="section-container">
      <InfoSection :info="info">
        <div :class="index===0?'main card-item card-text-box':'card-item card-text-box'" style="width: 40%">
          <div class="card-title" v-text="info.title"/>
          <div class="card-description" v-text="info.description"/>
          <LinkedButton :class="index===0?'main card-label-button':'card-label-button'" :button-label="info.routeLabel"
                        :path-name="info.routePath"/>
        </div>
      </InfoSection>
    </div>
    <div></div>
    <div></div>
  </main>
</template>
<script lang="ts">

import InfoSection from "@/components/card/InfoSection.vue";
import {Component, Vue} from "vue-property-decorator";
import {CardInfo} from "@/model/Home";
import LinkedButton from "@/components/button/LinkedButton.vue";
import welcomeImg from "@/assets/blogPhotos/coding.jpg"

@Component({
  components: {LinkedButton, InfoSection},
})
export default class Home extends Vue {
  cardInfos: CardInfo[] = [
    {
      title: 'WELCOME!',
      description: 'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
      routePath: 'auth',
      routeLabel: 'LOGIN/REGISTER',
      imgPathString: welcomeImg,
      leftText: false,
    },
  ]
}
</script>
import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import router from "@/router";
import VueRouter from 'vue-router';
import {store} from "@/store";
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faBold,
    faCode,
    faGripLines,
    faImage,
    faItalic,
    faListOl,
    faListUl,
    faQuoteLeft,
    faRedo,
    faStrikethrough,
    faUndo
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faBold, faItalic, faStrikethrough, faListUl, faListOl, faCode, faQuoteLeft, faGripLines, faUndo, faRedo, faImage);

Vue.component('font-awesome', FontAwesomeIcon);


Vue.config.productionTip = false
Vue.use(Element, {size: 'small', zIndex: 3000});
Vue.use(VueRouter);


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

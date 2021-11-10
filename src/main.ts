import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import router from "@/router";
import VueRouter from 'vue-router';
import {store} from "@/store";


Vue.config.productionTip = false
Vue.use(Element, {size: 'small', zIndex: 3000});
Vue.use(VueRouter);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

import VueRouter, {RouteConfig} from "vue-router";

const routes: RouteConfig[] = [
    {
        path: "/",
        name: "home",
        component: () => import('../views/Home.vue')
    }
]

const router = new VueRouter(
    {
        mode: 'history',
        routes
    });

export default router;
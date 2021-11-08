import VueRouter, {RouteConfig} from "vue-router";

const routes: RouteConfig[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/BlogMain.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/Auth.vue')
    }

]

const router = new VueRouter(
    {
        mode: 'history',
        routes
    });

export default router;
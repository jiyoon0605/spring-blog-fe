import VueRouter, {RouteConfig} from "vue-router";

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/blog',
                name: 'blog',
                component: () => import('../views/BlogMain.vue')
            },
        ],
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/login',
        name: 'auth',
        component: () => import('../views/auth/Auth.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/Auth.vue'),
    },
]

const router = new VueRouter(
    {
        mode: 'history',
        routes
    });

export default router;
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/classified',
            name: 'classified',
            component: () => import('../views/Classified.vue')
        },
        {
            path: '/mi',
            name: 'mi',
            component: () => import('../views/Mi.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/Cart.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/Profile.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
    ]
})

export default router
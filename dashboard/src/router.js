import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/blog',
        component: Blog
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    
})

export default router

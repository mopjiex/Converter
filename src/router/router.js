
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/My-Home.vue';
import Converter from '../components/My-Converter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'Converter',
            path: '/Converter',
            component: Converter
        },

]
})

export default router;
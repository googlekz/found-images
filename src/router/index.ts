import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ImageView from '@/views/ImageView.vue';
import FavoritesView from '@/views/FavoritesView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/image/:id',
        name: 'image',
        component: ImageView
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: FavoritesView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

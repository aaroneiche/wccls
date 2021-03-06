import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home.vue';
import Book from '@/pages/Book.vue'
import Reservations from '@/pages/Reservations.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode:"history",
  base:process.env.BASE_URL,
  routes: [
    {path: '/', component: Home},
    {path: '/reservations', component: Reservations},
    {path: '/materials/:book', component: Book}
  ]
})
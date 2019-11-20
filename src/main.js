import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home.vue';
import Book from '@/pages/Book.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode:"history",
  base:process.env.BASE_URL,
  routes: [
    {path: '/', component: Home},
    {path: '/:book', component: Book}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

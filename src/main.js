import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "@/router.js";

new Vue({
  render: h => h(App),
  router,
  data: {
    set: [
      {
        isbn:"123456",
        title:"Book 1",
        status:"waitlist",
        background:"static/c1.jpg"
      },
      {
        isbn:"123457",
        title:"Book 2",
        status:"available",
        background:"static/c2.jpg"
      },
      {
        isbn:"123458",
        title:"Book 3",
        status:"waitlist",
        background:"static/c3.jpg"
      },
      {
        isbn:"123459",
        title:"Book 4",
        status:"available",
        background:"static/c2.jpg"
      },
      {
        isbn:"1234510",
        title:"Book 5",
        status:"available",
        background:"static/c3.jpg"
      },
      {
        isbn:"1234511",
        title:"Book 6",
        status:"waitlist",
        background:"static/c1.jpg"
      },
      {
        isbn:"1234512",
        title:"Book 7",
        status:"waitlist",
        background:"static/c1.jpg"
      }                        
    ]

  }

}).$mount('#app')

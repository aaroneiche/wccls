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
        author:"Austen Jane",
        status:"waitlist",
        background:"static/c1.jpg",
        description: "This is a book about stuff that happens and it's really great and I think you should read it and I hope that you're considering it right now. "
      },
      {
        isbn:"123457",
        title:"Book 2",
        author:"Ralph Wiggum",
        status:"available",
        background:"static/c2.jpg",
        description: "This is a book about stuff that happens and it's really great and I think you should read it and I hope that you're considering it right now. "
      },
      {
        isbn:"123458",
        title:"Book 3",
        author:"Go around a",
        status:"waitlist",
        background:"static/c3.jpg",
        description: "This is a book about stuff that happens and it's really great and I think you should read it and I hope that you're considering it right now. "
      },
      {
        isbn:"123459",
        title:"Book 4",
        author:"Some guy who",
        status:"available",
        background:"static/c2.jpg",
        description: "This is a book about stuff that happens and it's really great and I think you should read it and I hope that you're considering it right now. "
      },
      {
        isbn:"1234510",
        title:"Book 5",
        author:"What do you suppose",
        status:"available",
        background:"static/c3.jpg",
        description: "This is a book about stuff that happens and it's really great and I think you should read it and I hope that you're considering it right now. "
      },
      {
        isbn:"1234511",
        title:"Book 6",
        author:"Some dude",
        status:"waitlist",
        background:"static/c1.jpg",
        description: "This is a book about stuff that happens and it's really great and I think you should read it and I hope that you're considering it right now. "
      },
      {
        isbn:"1234512",
        title:"Book 7",
        author:"Berf something",
        status:"waitlist",
        background:"static/c1.jpg",
        description: "This is a book about stuff that happens and it's really great and I think you should read it and I hope that you're considering it right now. "
      }                        
    ],
    search: "",
    reservations: [],
    notification: {
      visible: false,
      material: ""
    }
  }
}).$mount('#app')

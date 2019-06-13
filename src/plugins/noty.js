import 'vuejs-noty/dist/vuejs-noty.css'
import noty from 'vuejs-noty'
import Vue from 'vue'

Vue.use(noty, {
  timeout: 3000,
  progressBar: true,
  layout: 'bottomCenter',
  theme: 'nest'
})

import Vue from 'vue'
import Vuex from 'vuex'

import loading from './loading-module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const config = {
  modules: {
    loading
  },
  strict: debug
}

export default new Vuex.Store(config)

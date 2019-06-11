import axios from 'axios'
import store from '@/store'

const api = () => {
  let api = axios.create({
    baseURL: process.env.VUE_APP_API_URL
  })

  api.interceptors.request.use(
    conf => {
      store.dispatch('loading/start')
      return Promise.resolve(conf)
    },
    error => {
      store.dispatch('loading/stop')
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    conf => {
      store.dispatch('loading/stop')
      return Promise.resolve(conf)
    },
    error => {
      store.dispatch('loading/stop')
      return Promise.reject(error)
    }
  )

  return api
}

export default api

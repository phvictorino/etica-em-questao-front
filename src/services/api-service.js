import axios from 'axios'

const api = () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL
  })
}

export default api

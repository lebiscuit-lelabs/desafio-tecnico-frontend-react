import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.got.show/api'
})

export default api

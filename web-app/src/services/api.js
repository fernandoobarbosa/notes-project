import axios from 'axios'
require('dotenv').config()

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export default api

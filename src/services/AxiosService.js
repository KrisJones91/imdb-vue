import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://imdb-api.com/en/API/SearchAll/k_0b5m7t4j/',
  timeout: 8000
})
export const topApi = Axios.create({
  baseURL: 'https://imdb-api.com/en/API/ComingSoon/k_0b5m7t4j',
  timeout: 8000
})

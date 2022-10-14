import axios from 'axios'
import baseUrl from '../config/api'

const server = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
})

export default server

import Axios from 'axios'

import config from '@/config'

export const axios = Axios.create({
  baseURL: config.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => {
    const query = Object.keys(params).map((key) => {
      if (!params[key]) return null
      return [key, params[key]].map(encodeURIComponent).join('=')
    })
    return query.filter((item) => item).join('&')
  },
})

axios.interceptors.response.use(
  (response) => response.data ?? null,
  (error) => Promise.reject(error?.message ?? 'Something went wrong!'),
)

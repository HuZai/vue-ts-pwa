import axios from 'axios'
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/'
} else {
  axios.defaults.baseURL = '/'
}
axios.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => {
    // Do something with request error
    console.error('error:', error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器 axios的一些配置
axios.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    console.error('error:' + error) // for debug
    return Promise.reject(error)
  }
)
export default axios

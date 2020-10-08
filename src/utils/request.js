import axios from 'axios'

import { Toast } from 'mint-ui';




// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url   //跨域代理
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // if (getToken()) {
    //   //如果有的话存入请求头
    //   config.headers['X-Token'] = getToken()
    // }
 
    return config
  },
  error => {
 
    console.log(error) // for debug
    return Promise.reject(error) 
  }
)

// response interceptor
service.interceptors.response.use(
 
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {   // 响应拦截
      Toast({
        message: res.msg,
        duration: 1000
      });
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
   
    return Promise.reject(error)
  }
)

export default service

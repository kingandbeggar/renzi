import Axios from 'axios'
import Vue from 'vue'
// , setToken
import { getToken } from './auth'
const request = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 添加请求拦截器
request.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  if (getToken() !== '') {
    config.headers.Authorization = getToken()
  }
  // console.log(config)
  // console.log('config')
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function(response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // console.log(response)
  // console.log('response')
  const res = response.data
  if (res.success) {
    return res
  } else {
    Vue.prototype.$message.error(res.message)
    return Promise.reject(new Error(res.message))
  }
}, function(error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log(error)
  console.log('拦截到的错误')

  Vue.prototype.$message.error(error.message === 'timeout of 5000ms exceeded' ? '网络超时,请重试' : error.message)
  // 必须要return 要不然await 和trycatch接收不到信息
  return Promise.reject(error)
})
export default request

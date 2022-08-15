import request from '@/utils/request'

export const login = (data) => request({
  url: '/sys/login',
  method: 'post',
  data
})

export function getuserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

export function getuserimg(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

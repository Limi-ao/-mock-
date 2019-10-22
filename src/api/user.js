import request from '@/utils/request'
const querystring = require('querystring')
export function login(data) {
  return request({
    // baseURL: 'http://127.0.0.1:8081',
    url: '/a1/user/loginpw',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: querystring.stringify({
      username: data.username,
      password: data.password
    })
  })
}

export function getInfo(token) {
  return request({
    url: '/a1/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/a1/user/logout',
    method: 'post'
  })
}

export function yzlogin(data) {
  return request({
    url: '/a1/user/yzlogin',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: querystring.stringify({
      phoneV: data.phoneV
    })
  })
}

export function fenye(data){
  return request({
    url:'/a1/user/fenye',
    method:'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: querystring.stringify({
      page: data.page,
      size: data.size
    })
  })
}

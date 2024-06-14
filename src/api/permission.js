import request from '@/api/request.js'


export const postAuthPermission = (data) => {
  return request({
    url: '/api/auth/permission/routes',
    method: 'POST',
    json: true,
    data
  })
}

export const postPermissions = (data) => {
  return request({
    url: '/api/auth/permission/permissions',
    method: 'POST',
    json: true,
    data
  })
}

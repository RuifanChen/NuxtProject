import request from '@/utils/request'

// 获取菜单
export const GetProduct = params => {
  return request({
    url: '/api/product',
    method: 'get',
    params,
  })
}
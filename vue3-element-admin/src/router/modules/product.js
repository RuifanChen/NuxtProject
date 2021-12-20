const Layout = () => import('@/layout/index.vue')
const product = () => import('@/views/product/index.vue')

export default [
  {
    path: '/product',
    component: Layout,
    name: 'change',
    meta: {
      title: '修改商品',
    },
    icon: 'el-icon-help',
    children: [
      {
        path: '',
        name: 'product',
        component: product,
        meta: {
          title: '商品'
        },
      },
    ],
  },
]
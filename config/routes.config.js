export default [
  {
    path: '/login',
    component: './Login/Login'
  },
  {
    path: '/',
    component: './App', // 相对于 page 目录的相对路径
    routes: [
      {
        path: '/',
        component: './Index',
        meta: {
          title: '首页',
          access: 'dashboard'
        }
      },
      {
        path: '/coupon',
        meta: {
          title: '优惠券管理'
        },
        routes: [
          {
            path: 'list',
            component: './coupon/List',
            meta: {
              title: '优惠券列表'
            },
            routes: [
              {
                path: 'test',
                component: './coupon/List',
                meta: {
                  title: '优惠券测试',
                  access: 'partner'
                }
              }
            ]
          },
          {
            path: 'add',
            component: './coupon/Add',
            meta: {
              title: '添加优惠券'
            }
          },
        ]
      },
      {
        path: '/coupon1',
        meta: {
          title: 'coupon1'
        },
        routes: [
          {
            path: 'list',
            component: './coupon/List',
            meta: {
              title: '优惠券列表',
              hidden: true
            }
          },
          {
            path: 'add',
            component: './coupon/Add',
            meta: {
              title: '添加优惠券'
            }
          },
        ]
      },
      {
        path: '/coupon2',
        meta: {
          title: 'coupon2'
        },
        routes: [
          {
            path: 'list',
            component: './coupon/List',
            meta: {
              title: '优惠券列表',
              hidden: false,
              access: 'admin'
            }
          },
          {
            path: 'add',
            component: './coupon/Add',
            meta: {
              title: '添加优惠券',
              hidden: true
            }
          },
        ]
      },
    ]
  }
]
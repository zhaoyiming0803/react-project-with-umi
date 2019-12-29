export default {
  routes: [ {
    path: '/',
    component: './App', // 相对于 page 目录的相对路径
    routes: [
      {
        path: '/',
        component: './Index'
      },
      {
        path: '/coupon',
        routes: [
          { path: '/coupon/list', component: './coupon/List' },
          { path: '/coupon/add', component: './coupon/Add' },
        ]
      }
    ]
  } ],
  plugins: [
    [ 'umi-plugin-react', {
      antd: true,
      dva: true
    } ]
  ],
  publicPath: '/react-project-with-umi/'
};
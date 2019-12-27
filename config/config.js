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
        path: '/business',
        routes: [
          { path: '/business/list', component: './business/List' },
          { path: '/business/add', component: './business/Add' },
        ]
      }
    ]
  } ],
  plugins: [
    [ 'umi-plugin-react', {
      antd: true,
      dva: true
    } ]
  ]
};
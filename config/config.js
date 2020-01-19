const webpackProdConfig = require('../build/prod.config')

export default {
  routes: [
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
      dva: true,
      dynamicImport: true
    } ]
  ],
  publicPath: '/react-project-with-umi/',
  base: '/react-project-with-umi/',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    "react-redux": "ReactRedux"
  },
  chainWebpack: ['master', 'test'].includes(process.env.UMI_ENV) ? webpackProdConfig : undefined
};
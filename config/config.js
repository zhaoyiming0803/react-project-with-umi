export default {
  routes: [{
    path: '/',
    component: './App', // 相对于 page 目录的相对路径
  }],
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }]
  ]
};
export default {
  routes: [{
    path: '/',
    component: './App', // 相对于 page 目录的相对路径
  }],
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用
    }],
  ]
};
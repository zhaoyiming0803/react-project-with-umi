import routes from '../config/routes.config'

const CompressionPlugin = require('compression-webpack-plugin')

export default {
  routes: routes,
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
  treeShaking: true,
  chainWebpack: (config, { webpack }) => {
    config
      .plugin('compression-webpack')
      .use(CompressionPlugin, [ {
        test: /\.(js|css|html|svg)$/,
        threshold: 10,
        deleteOriginalAssets: false
      } ])
  }
};
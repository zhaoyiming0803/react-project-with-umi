const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (config, { webpack }) => {
  config
    .plugin('compression-webpack')
    .use(CompressionPlugin, [ {
      test: /\.(js|css|html|svg)$/,
      threshold: 10,
      deleteOriginalAssets: false
    } ])
}

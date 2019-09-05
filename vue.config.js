module.exports = {
  publicPath: '',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com',
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

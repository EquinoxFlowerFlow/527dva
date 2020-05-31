export default {
  extraBabelPlugins: [
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }]
  ],//antd
  publicPath: '/',//动态路由
  disableCSSModules: true,//less
  alias: {
    '@': `${__dirname}/src`,
    '@@': `${__dirname}/src/components`,
  },

  proxy: {
    '/aps': {
      target: 'https://api.baxiaobu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/aps': '',
      }
    },
    
    '/api': {
      target: 'https://blogs.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      }
    },
  }
}
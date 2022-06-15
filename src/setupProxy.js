const {
  createProxyMiddleware
} = require('http-proxy-middleware');
//npm i -S http-proxy-middleware
module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
        // http://101.201.220.43:3001/api/allproduct/gettotal 获取15个
      target: 'http://101.201.220.43:3001/api', //配置转发目标地址(能返回数据的服务器地址)
      // target: 'http://m.kugou.com?json=true',/*这里写自己的代理地址*/
      changeOrigin: true,
      ws: true,
      pathRewrite: {
          '^/api': ''
      },
  }));
};

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    console.log(app)
    app.use(proxy('*', {
        target: 'http://127.0.0.1:3000', // target host
        ws: true,  // proxy websockets 
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
            '^/api': ''
        }
    }));
};
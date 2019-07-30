const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
    publicPath: "./",
    chainWebpack: config => {
      config.resolve.alias.set('@$', resolve('src'));
    },
    devServer: {
      proxy: {
        "/cmp-supplier-web": {
          // target: "http://192.168.162.34:8677",
          target: "http://csp-test.schengle.com",
          changeOrigin: true //是否跨域
        },
        "/cmp-csd-web": {
          // target: "http://192.168.162.34:8070",
          target: "http://csp-test.schengle.com",
          changeOrigin: true //是否跨域
        },
        "/cmp-manage-web": {
          // target: "http://192.168.162.34:8769",
          target: "http://csp-test.schengle.com",
          changeOrigin: true //是否跨域
        }
      }
    },
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            'primary-color': '#9254de',
            'link-color': '#b98af3',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
}
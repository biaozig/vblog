const path = require('path');
const { getThemeVariables } = require('antd/dist/theme');
const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');


module.exports = override(
    // 配置antd
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // 设置绝对路径：addWebpackAlias
    addWebpackAlias({        
        ["@"]: path.resolve(__dirname, "src"),
        ["mock"]: path.resolve(__dirname, "src/mock"),
        ["pages"]: path.resolve(__dirname, "src/pages"), 
        ["layouts"]: path.resolve(__dirname, "src/layouts"),        
        ["components"]: path.resolve(__dirname, "src/components"),        
    }),
    // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars:{
            '@primary-color':'#2f4050', // 全局主题
            '@link-color': '#1DA57A', // 链接色
            '@border-radius-base': '2px', // 组件/浮层圆角
            '@font-size-base': '13px', // 主字号
            'compact': true, // 开启紧凑模式
        },
    })
);
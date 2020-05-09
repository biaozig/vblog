首先，react-app-rewired是react社区开源的一个修改CRA配置的工具，例如扩展Create React App的Webpack配置，而customize-cra提供了一组用于自定义利用react-app-rewired核心功能的Create React App v2配置, 可以通过config-overrides.js文件来对webpack配置进行扩展 


1、 用于按需加载antd的组件（具体配置方式请参照官网https://ant.design/docs/react/use-with-create-react-app-cn，这里只对config-overrides.js文件说明）

module.exports = override(    
    fixBabelImports('import', {        
        libraryName: 'antd',        
        libraryDirectory: 'es',       
        style: 'css'
    })
);
    补充： 若未使用customize-cra（对于react-app-rewired@2.x 以下版本）：

module.exports = function override(config, env) {    
    // do stuff with the webpack config...    
    config = injectBabelPlugin(        
        ['import', [            
            { 
                libraryName: 'antd', 
                libraryDirectory: 'es', 
                style: 'css' 
            },            
            { 
                libraryName: 'antd-mobile', 
                libraryDirectory: 'es', 
                style: 'css' 
            }        
        ]],        
        config    
    )    
    return config;
};


2、设置绝对路径：addWebpackAlias

module.exports = override(    
    addWebpackAlias({        
        ["mock"]: path.resolve(__dirname, "src/mock"),        
        ["containers"]: path.resolve(__dirname, "src/containers"),        
        ["components"]: path.resolve(__dirname, "src/components")   
    })
)


3、配置less：addLessLoader (loaderOptions)

module.exports = override(    
    addLessLoader({        
        javascriptEnabled: true,        
        modifyVars: { 
            '@primary-color': '#1DA57A' 
        }    
    })
);
### @babel/preset-react
对react语法的转换

### @babel/plugin-transform-runtime
每个Babel编译后的脚本文件，都以导入的方式使用Babel的帮助函数，而不是每个文件都复制一份帮助函数的代码。
1 优点:
（1）提高代码重用性，缩小编译后的代码体积。
（2）防止污染全局作用域。（启用corejs配置）

### syntax-dynamic-import
用以解析识别import()动态导入语法 --- 并非转换，而是解析识别

npm install -D babel-plugin-syntax-dynamic-import
yarn add -D babel-plugin-syntax-dynamic-import

使用：.babelrc
{
  "plugins": ["syntax-dynamic-import"]
}
### @loadable/component
异步加载组件。
使用：
import loadable from "@loadable/component";
import Loading from "./Loading.js";

const LoadableComponent = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />
});

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}


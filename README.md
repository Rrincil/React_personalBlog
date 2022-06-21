# pernalBlog
- <a style="color:red" herf='http://101.201.220.43:8003'>链接</a>
## 一、使用Bootstrap
- npm i BootStrap -s
### （1）public/index.html增加jquery链接
```html
<script type="text/javascript"src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
```
### （2）src/index.js引入Bootstrap样式
```js
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
```
## 二、使用less
- npm i less -s
### 2.1 暴露配置
- npm run eject
### 2.2 修改webpack.config.js
- 添加less配置
```js
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
//可省略
// {
//   loader: require.resolve('less-loader'),
//   options: lessOptions,
// },

//less
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
  {
      importLoaders: 2,
      sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
  },
  'less-loader'
  ),
  sideEffects: true,
},

{
  test: lessModuleRegex,
  use: getStyleLoaders(
  {
      importLoaders: 2,
      sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
      modules: {
      getLocalIdent: getCSSModuleLocalIdent,
      },
  },
  'less-loader'
  ),
},
```
## 三、路由配置及Reux详细配置在React学习笔记中
- <a style="color:red" herf='https://github.com/Rrincil/React-learning-materials-'>学习笔记链接</a>
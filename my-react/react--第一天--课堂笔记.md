## APP开发模式分类
- 原生APP: 
	- iOS
	- Android

- 混合式开发: Hybrid App: 原生APP的外衣, 也是能安装在手机上, 在手机上有一个图标,点击打开. 但实际上里面有大量的H5网页
	- angular+ ionic 
	- React Native

- 流APP: 能够边下载边安装 , 边打开,一边下载

- 小程序: 无需安装卸载, 直接使用. 用完即走 


## Vue学习路线: 
Vue语法, 指令, 事件, todoMVC, 组件, 父子组件,非父子组件, 简单组件的编写, 虎嗅评论,  工程化, vue-cli, 路由, 动画, 组件化框架,elementUI, 网络请求,异步封装. --- 后台管理系统.  状态管理, Vuex.

##React学习路线
React语法, 事件, todoMVC, 组件, 父子组件,非父子组件,简单组件的编写......

## React 的优点: 
- 丰富的第三方资源,支持各种中大型项目的开发.
- 声明式渲染: {{msg}} 非声明式:  document.getElementById.innerHTML = msg;
- 组件系统非常强大
- 平台化好,可以运行在各种终端,例如,PC, 手机, 原生APP, 大型终端等等
- 内部运行机制: 效率非常高.
	- 虚拟DOM树, 当数据更新时, 触发差异化算法, 以最低的成本局部刷新页面. 
	- JSX --- 长得像HTML的JS 
	- 单向数据流: 数据是从顶层组件传递到子组件中


## React开发环境
- 浏览器开发: script标签引入一个react.js.
	- react.js 是 React的核心库. 输出了一个顶层对象, React.
	- 负责浏览器端的渲染, react-dom.js . 输出了一个顶层对象, ReactDOM.
	- 如果想在浏览器里运行,JSX的语法. 那么需要引入一个解析JSX的文件.  browser.min.js
-  
- 类似于Vue的工程化开发, import react from 'react'
- ES5 语法写的
- ES6 语法写的


# 本次课的开发环境: ES6 + 工程化

## 什么是JSX ?? Introducing JSX
- JSX：JavaScript XML
- JSX是React编写组件的一种语法规范，可以看为是javaScript 的扩展，它支持将HTML和JS混写在一起，最后编译为常规的JavaScript，方便浏览器解析。
 

## 在React中,干啥都可以用JS. 几乎没有HTML的事儿. 
## 在React中,干啥都得用组件, 几乎没有不用组件的时候. 


## React组件: 
- 创建组件: Components
	- ES5 React.createClass({})
	- ES6  class Name extends React.Component{}
- 声明式渲染:  Rendering Elements
	- {}
	- 没有自动挂载到顶级对象上, 必须用this.state.xxxx 来访问
- state : 组件的私有变量和状态
	- ES5: getInitialState: function(){return {};}
	- ES6: 构造函数里写this.state = {};
- props : 父组件可以传的属性
	- ES5 : 默认属性: getDefaultProps
	- ES6 : class 外面写, Component1.defaultProps = {};
- 事件: 
	- 与原
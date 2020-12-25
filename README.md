# bookshop-35app 项目说明
基于Vue.js 2.x系列 + Element UI

## 前言
该项目是35网上书城的前台部分，主要面向用户。使用 Vue.js，引入 Element UI 样式组件库，方便开发快速简洁好看的组件。

## 支持功能
- Element UI
- 登录/注册
- 查看/搜索/浏览商品
- 商品详情
- 加入购物车
- 结算下单
- 个人中心

## 目录结构介绍
```
|--dist                     // 打包生成的静态资源文件目录
|--node_modules             // 依赖包
|--public                   // 存放静态文件
|--src                      // 源码目录
    |--assets               // 静态资源目录
    |--components           // 组件目录
        |--common           // 公共组件目录
    |--plugins              // 引入的组件样式库
        |--axios.js         // Axios配置文件
        |--element.js       // Element组件
    |--router               // 路由目录
    |--store                // Vuex目录
    |--App.vue              // 页面入口文件
    |--main.js              // 程序入口文件，加载各种组件与公共组件
|--.gitignore               // 忽略的文件
|--babel.config.js          // ES6语法编译配置
|--package-lock.json        // 项目及工具的依赖配置文件版本锁
|--package.json             // 项目及工具的依赖配置文件
|--README.md                // 说明文档
|--vue.config.js            // 配置文件
```

# 部署流程

## 一、克隆项目到本地

```
https://github.com/MengQiu7723/LinZhong_7723.git
```
## 二、安装项目依赖
```
//进入项目根目录
cd LinZhong_7723

//安装项目依赖，等待安装完成
npm install
```

## 二、本地开发启动（默认端口是8080）
```
方式一：使用vue-cli管理工具(推荐) 浏览器访问 http://localhost:8000
vue ui

方式二：直接启动，浏览器访问 http://localhost:8080
npm run serve
```

## 项目打包
```
// 执行构建命令，生成的dist文件夹放在服务器下即可访问（生产可搭配 Nginx 使用）
npm run build
```


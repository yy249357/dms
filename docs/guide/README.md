---
title: 使用教程
author: yankang
date: 2019-05-14
---

## 介绍
作为基于vuepress开发的markdown文档管理系统, 本系统有以下优点: 
1. 支持HTML5响应式预览/手机预览
2. 支持markdown实时编辑预览
3. 支持中文名称
4. 支持PWA
5. 对SEO很友好
6. 拓展了markdown的语法

## 新建文件
导航栏和项目中文件夹一一对应:

- environment: 环境搭建
- baseService: 基础服务
- component: 组件使用
- deploy: 打包部署
- standard: 开发规范

在对应文件夹中新建xxx.md, 如果要放在侧边栏首位，就在README.md里面书写。  
注意: README.md文件必须有且文件名称不可更改, 是该导航的入口文件, 显示在侧边栏的第一行。

## 配置文件
打开.vuepress文件夹, 找到config.js文件。找到sidebar的配置项, 如配置`xxx.md`文件如下:
```js
sidebar: {
    // 项目晨会
    '/meeting/': [
        '',
        'xxx'
    ]
},
```
在对应的sidebar数组里面添加文件名"xxx", 文件名就是路径, 不需要写文件后缀。

注意: 数组中的' '表示的是README.md文件

## 书写文件
文件头部必须添加: 
```md
---
title: xxx
author: 作者
date: 2019-04-09
---
```
这里的title会自动生成侧边栏的导航。  
具体书写格式和语法请参照:  
[参考markdown标准示例](./guide/example.html)


---
title: admin安装
date: 2019-05-10
---


## 使用方法
1. `到node官网下载node安装`
2. 在nginx配置文件中找到location /admin/, 把alias路径改成自己的项目路径
3. 安装命令:
```bash
npm install
npm run dev
```

4. 开发调试命令
```bash
npm run watch
```

5. 打包命令
```bash
npm run production
```

6. 打开网址 http://localhost:8090/admin/index.html 查看效果

## 注意事项
1. 与后台交互的逻辑，写在jsAPI中，一律使用promise暴露接口
2. api目录放置与后台交互相关代码逻辑
3. stories目录放置业务相关逻辑
4. 模板使用jsx进行配置,放在template目录下
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 提醒

* [错误]阻止所有操作，右上弹出ministr
* [成功]继续当前及后继操作，右上弹出ministr

### vue-table中何时使用jsx何时使用vue-component组件

*   当需要渲染的数据是需要翻译或者简单的业务计算时，使用jsx
*   当cell是一些复杂的组件，例如各种按钮的组合时，建议使用vue-component
*   注意：不要在cell中封装模态窗等较复杂的业务组件，应该将事件emit出来

### 组件参考示例1
<a href="http://green.vuejs-laravel.co/#/">绿色风格</a><br>

### 组件参考示例2
[Bootstrap + Vue](https://bootstrap-vue.js.org/)

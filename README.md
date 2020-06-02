<!--
 * @Author: zouzheng
 * @Date: 2020-06-01 14:05:47
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-02 18:11:25
 * @Description: 这是XXX组件（页面）
--> 
## Introduction

基于vue封装的一个iframe插件

## Features

* 带有默认设置，方便使用iframe，可设置是否隐藏滚动条,修改传入的HTML内容样式等。

## [demo](https://pikaz-18.github.io/pikaz-iframe/example/index.html)

### [demo代码](https://github.com/pikaz-18/pikaz-iframe/tree/master/src/example/components)

## Installation

### With npm or yarn 

```bash
yarn add pikaz-iframe

npm i -S pikaz-iframe
```

## For Vue-cli
``` html
<pikaz-iframe :onload="onload" :src="src">
</pikaz-iframe>
```
.vue file:
``` js
  import {PikazIframe} from 'pikaz-iframe'
  ...
  export default {
        components: {
            PikazIframe,
        },
        data () {
          return {
            src: "https://m.baidu.com/"
          }
        },
        methods: {
          onload (index) {
            console.log("载入成功")
          }
        }
  ...
```

#### Attributes:
参数|说明|类型|可选值|默认值
-|-|-|-|-
name|iframe 的名称|string|--|--
frameborder|是否显示框架周围的边框|number|0/1|0
sandbox|启用iframe中内容的额外限制,传入空字符串则对所有权限做限制，具体查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)|string|""/allow-forms/allow-same-origin/allow-scripts/allow-top-navigation等|"allow-same-origin allow-scripts"
scrolling|iframe超出范围时是否可以滚动|string|auto/yes/no|auto
src|被嵌套的页面的 URL 地址|string|--|--
srcdoc|html内容|string|--|--
hideScrolling|是否隐藏滚动条，传入true默认隐藏18px宽的滚动条，如需隐藏其他宽度滚动条，则传入宽度如"20px"|boolean/string|--|false
onload|iframe加载完成时的钩子|funtion|--|--
css|传入html内容时，需修改的css样式，如"div{color:red;}"|string|--|--

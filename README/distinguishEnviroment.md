# Webpack区分生产环境和开发环境

程序的开发分为这么几个阶段，开发阶段、测试阶段、生产阶段。在前端开发中这三个阶段也对应着不同的开发环境， 三个环境上的配置是不同的，因此非常有必要区别对待针对这三个阶段，分别打包

有两种方法

- 通过scripts来设置命令

![chunkhash example](script.png)
![webpack.config.js](print.png)
![打印变量](showEnv.png)

- 使用DefinePlugin

DefinePlugin可以定义一个全局变量，

- webpack dev server是什么 ？

webpack dev server是一个针对webpack的实时的重新加载服务器

- webpack dev middleware是什么 ？

是一个针对webpack的简单的wrapper middleware. 他通过一个连接的服务器作用于由webpack处理后的文件。

优势：
1. 不被写入硬盘， 只在内存中进行操作
1. 如果文件在watch mode下被改更改， 中间件不再处理之前的bundle, 而是延迟请求指导编译完成。也就是说你不必在一个文件修改之后等很久。 

- webpack hot middleware是什么 ？
webpack hot reloading 仅仅使用了webpack-dev-middleware. 他允许你在不使用webpack-dev-server的情况下把hot reloading功能添加到一个server上

- output：publicPath和path的区别

output项告诉webpack怎样存储输出结果以及存储到哪里。output的两个配置项“path”和“publicPath”可能会造成困惑。

1. “path”仅仅告诉Webpack结果存储在哪里
1. 然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
# Webpack区分生产环境和开发环境

程序的开发分为这么几个阶段，开发阶段、测试阶段、生产阶段。在前端开发中这三个阶段也对应着不同的开发环境， 三个环境上的配置是不同的，因此非常有必要区别对待针对这三个阶段，分别打包

有两种方法

- 通过scripts来设置命令

![chunkhash example](script.png)
![webpack.config.js](print.png)
![打印变量](showEnv.png)

- 使用DefinePlugin
- --hot 选项  热更新 
  当状态改变时， 只更新一部份
  --open 自动打开浏览器

- tsconfig.json typescript 
  webpack.config.js 工作流
    entry src/index.ts
    有多个入口 给打包后的文件命名
    {
      app: ,
      vendorStyle: ,
    }
    为何要有多个呢？ 打包要时间， bootstrap 样式绝
    对不会改变， 没必要每次都打包。
    css lib , react react-router-dom redux
    没必要一次性打包
    打包出来 index.html 两个文件， http请求数是加了，但是加的不多， 现代浏览器(chrome) 同时并发少数的
    http对性能没有影响， 反面有优势， 静态资源是会缓存的，lib css js 不需要下载， 而业务组件开发的src
    components js 会经常修改的， 分开打包， 只会让用户更新这一小部分js , 打开页面会更快
    不会改变的lib 部分会放到cdn 去
    webpack-dev-server port 
    html-plugin src/index.html template  

  babel js编译

- typescript 在react中做加法，让项目类型化，减少错误。
  1.  members:MemberEnitity[]
  生命周期中请求，api 方法 返回值类型 interface MemberEntity
  2. model 层
  3. api层

- common inout button
form =>page (redux,state)=>pagecontainer
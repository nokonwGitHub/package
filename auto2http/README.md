auto2http
===
webStorm根据配置来自动生产 xx.http文件 用于对接口的测试  只能在node项目中使用

```javascript
const Auto2http = require("auto2http")
const path = require('path')
const route = Auto2http.createApiDict(path.join(__dirname, '../api'), true) 
// path.join(__dirname, '../api ') 接口文件的跟目录  
// true 是否自动生成提示  routes属性的提示

Auto2http.main({    httpRoot: path.join(__dirname, "/dd"), // 成 http 的决定路径
                    port: 8080,  // 端口
                    hostname: "192.168.0.19", // 主机名
                    defaultHeader: {}, // 设置头  默认"Content-Type": "application/json","Accept": "application/json"
                    flag: "w",   // w 或 a+ 文件写入的mode  默认w 传 false或undefined 就不会去 写入 http文件 
                    apiList: [{  // 路由 list
                        method: "post", // 请求方式
                        path: "/api/query", // 路径
                        headers: { // 头
                            "Content-Type": "application/json"
                        },
                        params: { // 查询字符串
                            name: "丽萨"
                        },
                        data: { // data
                            
                        },
                        description: "测试",
                        handler: route["/api/query"], // 默认会 require 对应的文件调用参数
                        port: 8081,  // 独立的端口
                        hostname: "192.168.0.17", // 独立的主机名
                        plugins:{} // 独立的插件
                    }],
}).createApi({    // 完成 app.method(path,()=>{})的操作
      app: express(),
      plugins: { // 每个文件导入公共的插件
          // 在 接口文件中调用
      },
      callback(app) {  // 回调函数参数为 app  对其进行配置
         app.use(express.json)  
      },
      
  })

// 接口文件
//  api/ dd.js
module.exports = (plugins)=> (req,res)=>{
  
  res.json({
  
   })
}
```
      
   

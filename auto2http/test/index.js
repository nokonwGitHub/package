const main = require("../src/index.js")
console.log(main)
const path = require('path')

// const app = require('express')()
const route = main.createApiDict(path.join(__dirname, '../api'), true)

/*
*
* http://:8080
*/
main.main({
    httpRoot: path.join(__dirname, "./dd"),
    port: 8080,
    flag: "w",
    apiList: [{
        method: "post",
        path: "/api/query",
        headers: {
            "Content-Type": "application/json"
        },
        params: {
            name: "丽萨"
        },
        data: {
            "order_in": "",
            "order_out": "",
            "orderNo": "",
            "goods_name": "",
            "goods_id": "",
            "deal_tel": "",
            "contact_tel": "",
            "idCard": "",
            "status": "",
            "time": [],
            "area": "",
            "broadband_account": "",
            "order_channel": [],
            "sale_channel": "",
            "logistics_num": "",
            "payment_num": "",
            "accept_num": [],
            "servername": "",
            "business_type": [],
            "uploginno": "",
            "custname": "测试",
            "external": 2,
            "curPage": 1,
            "pageSize": 10
        },
        description: "测试",
        handler: route["/msa"],
        plugins:{},
        port:2569,
        hostname:"localhost",
    }],
    hostname: "192.168.0.19",
    defaultHeader: undefined,
})


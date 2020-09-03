"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
const path = require("path");
const qs = require("querystring");
const defaultHeaders = require("./header.js");
const apiListDts = path.join(__dirname, "./api_list.d.ts");
moment.locale('zh-cn');
module.exports = class WriteHttp {
    constructor({ hostname = "localhost", port = 3306, httpRoot = '', defaultHeader = defaultHeaders } = {}) {
        try {
            fs.readdirSync(httpRoot);
        }
        catch (e) {
            throw TypeError('httpRoot必须为一个绝对路径');
        }
        this.hostname = hostname;
        this.port = port;
        this.httpRoot = httpRoot;
        this.defaultHeader = defaultHeader;
        this.header = {};
        this.list = [];
    }
    setHeader(header) {
        for (let [k, v] of Object.entries(this.defaultHeader)) {
            if (!this.header[k]) {
                this.header[k] = v;
            }
        }
    }
    apiList(list = [], flag = "w") {
        this.list = list;
        if (flag) {
            this.flag = flag === true ? "w" : flag;
            this.list.forEach(value => {
                this.one(value);
            });
        }
    }
    static createApiDict(pathName, show = true) {
        try {
            fs.readdirSync(pathName);
        }
        catch (e) {
            throw TypeError('pathName必须为一个绝对路径');
        }
        const router = {};
        const filesList = [];
        const exec = require('child_process').exec;
        (function readFileList(dir, filesList = []) {
            const files = fs.readdirSync(dir);
            files.forEach((item, index) => {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                if (stat.isDirectory()) {
                    readFileList(path.join(dir, item), filesList); //递归读取文件
                }
                else {
                    if (path.extname(fullPath) === '.js') {
                        filesList.push(fullPath);
                    }
                }
            });
            return filesList;
        })(pathName, filesList);
        let mess = ' ';
        let Api_listMess = ``;
        filesList.forEach(value => {
            let dd = value.substring(pathName.length);
            dd = dd.substring(0, dd.length - 3);
            dd = dd.replace(new RegExp("\\\\", "gm"), "/");
            router[dd] = require(value);
            mess += `'${dd}'|`;
            Api_listMess += `     '${dd}'?:(config:object|undefined) => (req, res) => {};
`;
        });
        mess += 'string';
        mess = show ? mess : "string";
        Api_listMess = show ? Api_listMess : "";
        let spd = fs.writeFileSync(apiListDts, `export interface Api_list {
${Api_listMess}         
}

export interface ApiList {
   path?: ${mess},
}`, { encoding: "utf-8" });
        return router;
    }
    createApi({ plugins = {}, callback, app, }) {
        callback(app);
        this.list.forEach(value => {
            app[value.method](value.path, value.handler(Object.assign({}, plugins, value.plugins)));
        });
    }
    one({ method = 'GET', path = '/test', header = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }, params = {}, data = {}, description = '默认描述', hostname, port, plugins = {} } = {}) {
        let dd = path;
        if (dd.indexOf("/", 1) > 0) {
            dd = path.substring(0, path.indexOf("/", 1));
        }
        let mess = "";
        this.setHeader(header);
        for (let [key, value] of Object.entries(header)) {
            mess += `${key}: ${value}\n`;
        }
        let fileDir = this.httpRoot + dd + ".http";
        params = qs.unescape(params instanceof Object ? qs.stringify(params) : params);
        fs.writeFile(fileDir, `
###  生成时间 ${moment().format('LLLL')}
###  描述：${description}
${method.toUpperCase()} http://${hostname ? hostname : this.hostname}:${port ? port : this.port}${path ? path : "/"}${params.length > 1 ? '?' + params : ''}
${mess}         
${JSON.stringify(data, null, 2)}
###
`, { flag: String(this.flag), encoding: "utf-8" }, (err) => {
            if (err) {
                throw TypeError(`${path} 插入错误`);
            }
        });
    }
    static main({ defaultHeader, hostname, httpRoot, port, apiList, flag, } = {}) {
        const app = new WriteHttp({ defaultHeader, hostname, httpRoot, port });
        app.apiList(apiList, flag);
        return app;
    }
};
//# sourceMappingURL=index.js.map
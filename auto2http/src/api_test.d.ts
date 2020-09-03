// @ts-ignore
import {ApiList, Api_list} from "./api_list"

export interface DefaultHeaders {
    "Accept"?: 'text/plain' | 'text/html' | '' | 'application/json' | string;
    "Content-Type"?: 'text/plain' | 'text/html' | 'application/json' | string;
}

interface ParsedUrlQueryInput extends NodeJS.Dict<string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null> {
}

interface itemParams {
    hostname?: "localhost" | string,
    port?: string | number | 3306,
}

export interface WriteHttpParam extends itemParams {
    httpRoot?: string,
    defaultHeader?: DefaultHeaders
}


export interface oneParam extends ApiList, itemParams {
    method?: 'GET' | 'POST';
    header?: DefaultHeaders;
    params?: string | ParsedUrlQueryInput;
    data?: object | null;
    description?: string;
    handler?: (serverConfig: object | undefined) => (req, res) => {},
    plugins?: object
}


export interface mainInter extends WriteHttpParam {
    apiList?: oneParam[];
    flag?: "w" | 'a+' | string | boolean | undefined; // 写入 http文件的方式  w 覆盖  a+ 追加
}

export interface createApiInter {
    plugins?: object,
    callback?: (data) => {},
    app?: object
}

// @ts-ignore
import {WriteHttpParam,
    oneParam,
    DefaultHeaders,
    createApiInter,
    mainInter
} from "./api_test"
import {ApiList, Api_list} from "./api_list"

export default class WriteHttp {
    private readonly hostname: string;
    private readonly port: string | number | 3306;
    private readonly httpRoot: string;
    private readonly defaultHeader: DefaultHeaders;
    private readonly header: DefaultHeaders;
    private list: oneParam[];
    private flag: string

    private constructor({
                            hostname,
                            port,
                            httpRoot,
                            defaultHeader
                        }: WriteHttpParam)


    private setHeader(header: DefaultHeaders): void;

    private apiList(list: oneParam[], flag): void;

    static createApiDict(pathName: string, show: boolean): Api_list;

    public createApi({
                         plugins,
                         callback,
                         app
                     }: createApiInter)

    private one({
                    method,
                    path,
                    header,
                    params,
                    data,
                    description
                }: oneParam)

    public static main({
                           defaultHeader,
                           hostname,
                           httpRoot,
                           port,
                           apiList,
                           flag,
                       }: mainInter): WriteHttp
}


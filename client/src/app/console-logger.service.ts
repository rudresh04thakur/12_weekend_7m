import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' //tap
import { Observable } from 'rxjs'


export let isDebugMode = environment.isDebugMode;

const noop = (): any => undefined;

@Injectable({
    providedIn: 'root'
})
export class ConsoleLoggerService {
    url = "http://localhost/12_clinet_api/";
    constructor(private _http: HttpClient) { }


    get info() {
        if (isDebugMode) {
            return console.info.bind(console);
        } else {
            return noop;
        }
    }

    get warn() {
        if (isDebugMode) {
            return console.warn.bind(console);
        } else {
            return noop;
        }
    }

    get error() {
        if (isDebugMode) {
            return console.error.bind(console);
        } else {
            return noop;
        }
    }

    save(data) {
       
       return this._http.post(this.url + "logger.php", data).pipe(map((res) => {
            return res;
        }))
    }

    getLogs(skip=0,limit=25){
        return this._http.get(this.url + "getlogs.php?skip="+skip+"&limit="+limit).pipe(map((res) => {
            return res;
        }))
    }


    invokeConsoleMethod(type: string, args?: any): void {
        const logFn: Function = (console)[type] || console.log || noop;
        logFn.apply(console, [args]);
    }
}
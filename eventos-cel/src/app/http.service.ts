import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from './app.error-handler';

@Injectable()
export class HttpService {

  private mainUrl: string = 'http://localhost:3030/';


  constructor(public http: Http) { }

  get(endpoint, token?: string) {
    let headers = new Headers();

    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }

    let opt = new RequestOptions({ headers: headers });

    return this.http.get(`${this.mainUrl}${endpoint}`, opt)
             .map(res => {
                return res.json();
      }).catch(ErrorHandler.handleError);
  }

  getBy(endpoint: string, param: any) {
    return this.http.get(`${this.mainUrl}${endpoint}/${param}`)
      .map(res => {
        return res.json();
      }).catch(ErrorHandler.handleError);
  }

  post(endpoint: string, data: Object, token?:string) {
    let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

    if(token) {
      headers.append('Authorization', 'Bearer ' + token);
    }

    let opt = new RequestOptions({ headers: headers});

    let urlData = new URLSearchParams();

    for(let k in data) {
      urlData.append(k, data[k]);
    }

    return this.http.post(`${this.mainUrl}${endpoint}`, urlData, opt)
      .map(res => {
        return res.json();
      }).catch(ErrorHandler.handleError);
  }
}

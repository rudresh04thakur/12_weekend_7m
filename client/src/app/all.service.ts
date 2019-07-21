import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators' //tap
@Injectable({
  providedIn: 'root'
})
export class AllService {
  url = "http://localhost/12_clinet_api/";

  constructor(private _http:HttpClient) { }

  register(data){
    return this._http.post(this.url+"register.php",data).pipe(map((res)=>{
      return res
    }))
  }

  getRecord(id){
    return this._http.get(this.url+"get.php?id="+id).pipe(map((res)=>{
      return res
    }))
  }

  list(){
    return this._http.get(this.url+"list.php").pipe(map((res)=>{
      return res;
    }))
  }

  gitAPI(username){
    return this._http.get('https://api.github.com/search/users?q='+username).pipe(map((res)=>{
    return res;
    }))
  }
}

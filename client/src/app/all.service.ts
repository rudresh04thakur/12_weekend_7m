import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators' //tap
import { Observable } from 'rxjs'

interface List {
  name: String;
  contact: String;
  email: String;
}

@Injectable({
  providedIn: 'root'
})
export class AllService {
  url = "http://localhost/12_clinet_api/";
  //url = "http://localhost:3000/"
  listArray: List;
  constructor(private _http: HttpClient) { }

  register(data) {
    console.log("Data With File", data)
    let formData = new FormData();
    for (let k in data) {
      if (k != 'proFile') {
        if(data[k] instanceof Object){
          let tempA="";
          for (let kk in data[k]){
            tempA+=data[k][kk]['mobile']+",";
            console.log("==========>",tempA)
          }
          tempA=tempA.substr(0,tempA.length-1) + "";
          formData.append(k,tempA)
        }else{
          formData.append(k,data[k]);
        }
      } else {
        formData.append(k, data[k],data[k]['name']);
      }
    };

    return this._http.post(this.url + "register.php", formData).pipe(map((res) => {
      return res
    }))
  }

  update(data) {
    console.log("Dadta=============", data);
    return this._http.post(this.url + "update.php", data).pipe(map((res) => {
      return res
    }))
  }

  // Python Link

  // admin(data){
  //   return this._http.post("http://localhost:8000/admin",data).pipe(map((res)=>{
  //     return res
  //   }))
  // }

  login(data) {
    //console.log("Dadta=============",data);
    return this._http.post(this.url + "login.php", data).pipe(map((res) => {
      return res
    }))
  }


  getRecord(id) {
    return this._http.get(this.url + "get.php?id=" + id).pipe(map((res) => {
      return res
    }))
  }

  list(skip = 0, limit = 25): Observable<List[]> {
    return this._http.get(this.url + "list.php?skip=" + skip + "&limit=" + limit).
      pipe(map((res) => {
        return <List[]>res;
      }))
  }

  gitAPI(username) {
    return this._http.get('https://api.github.com/search/users?q=' + username).
      pipe(map((res) => {
        return res;
      }))
  }


  save(data) {

    return this._http.post(this.url + "logger.php", data).pipe(map((res) => {
      return res;
    }))
  }

  getLogs(skip = 0, limit = 25) {
    return this._http.get(this.url + "getlogs.php?skip=" + skip + "&limit=" + limit).
      pipe(map((res) => {
        return res;
      }))
  }
}

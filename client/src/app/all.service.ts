import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators' //tap
import { Observable } from 'rxjs'

interface List{
  name:String;
  contact:String;
  email:String;
}

@Injectable({
  providedIn: 'root'
})
export class AllService {
  url = "http://localhost/12_clinet_api/";
  //url = "http://localhost:3000/"
  listArray:List;
  constructor(private _http:HttpClient) { }

  register(data){
    return this._http.post(this.url+"register.php",data).pipe(map((res)=>{
      return res
    }))
  }

  update(data){
    console.log("Dadta=============",data);
    return this._http.post(this.url+"update.php",data).pipe(map((res)=>{
      return res
    }))
  }


  login(data){
    //console.log("Dadta=============",data);
    return this._http.post(this.url+"login.php",data).pipe(map((res)=>{
      return res
    }))
  }


  getRecord(id){
    return this._http.get(this.url+"get.php?id="+id).pipe(map((res)=>{
      return res
    }))
  }

  list():Observable<List[]>{
    return this._http.get(this.url+"list.php").pipe(map((res)=>{
      return <List[]>res;
    }))
    
  }

  gitAPI(username){
    return this._http.get('https://api.github.com/search/users?q='+username).pipe(map((res)=>{
    return res;
    }))
  }
}

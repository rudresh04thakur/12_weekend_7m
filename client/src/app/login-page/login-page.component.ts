import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private _ser:AllService, private _r:Router) {
  }

  ngOnInit() {
  }

  login(data) {
    this._ser.login(data).subscribe((res)=>{
     
      if(res['code']=='true'){
        console.log("Login ", res)
        res['data']['isLogin'] = true;
        window.sessionStorage.setItem('sessionData',JSON.stringify(res['data']))
        this._r.navigate(['/list'])
      }else{
      
      }
    })
    //console.log("Data from Login = >", data)
  }
}

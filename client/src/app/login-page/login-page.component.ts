import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component'
import { registerContentQuery } from '@angular/core/src/render3';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  login(data) {
    console.log("Data from Login = >", data)
  }
}

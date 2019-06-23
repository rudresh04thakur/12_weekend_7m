import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg: FormGroup;

  constructor( private _fb:FormBuilder) {
    this.reg = this._fb.group({
      name:["",[]],
      contact:["",[]],
      email:["",[]],
      password:["",[]],
    })
  }

  ngOnInit() {
  }

}

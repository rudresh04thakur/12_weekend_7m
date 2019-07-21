import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AllService } from '../all.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  reg: FormGroup;
  formSubmitted = false;
  constructor(private _fb: FormBuilder, private _ser:AllService) {
    this.reg = this._fb.group({
      name: ["", [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      contact: this._fb.array([this.initContact()]),
      email: ["", [Validators.required, Validators.pattern('[A-Za-z_]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}')]],
      password: ["", [Validators.required]],
    })
  }

  initContact(){
    return this._fb.group({
      mobile:["", [Validators.required, Validators.pattern('[0-9]{10}')]]
    })
  }

  addContact(){
    let con = this.reg.get('contact') as FormArray;
    con.push(this.initContact());
  }

  removeContact(i){
    if(confirm("Are you sure to remove contact number row "+ i)){
    let con = this.reg.get('contact') as FormArray;
    con.removeAt(i);
    }
  }


  ngOnInit() {
  }

}
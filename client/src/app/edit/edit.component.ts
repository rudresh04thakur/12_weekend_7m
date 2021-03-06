import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AllService } from '../all.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../register/register.component.css']
})
export class EditComponent implements OnInit {
  response;
  reg: FormGroup;
  formSubmitted = false;
  constructor(
    private _r: Router,
    private _ar: ActivatedRoute,
    private _fb: FormBuilder,
    private _ser: AllService) {
    this.reg = this._fb.group({
      id:[""],
      name: ["", [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      contact: this._fb.array([this.initContact()]),
      email: ["", [Validators.required, Validators.pattern('[A-Za-z_]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}')]],
      password: ["", [Validators.required]],
    })
  }

  initContact() {
    return this._fb.group({
      mobile: ["", [Validators.required, Validators.pattern('[0-9]{10}')]]
    })
  }

  update(data){
    this._ser.update(data.value).subscribe((res)=>{
      console.log("Data Updated",res);
      this.response = res;
      if(res['code']=='true'){
        $('#myModal').modal('show');
        //this._r.navigate(['/list'])
      }
    })
  }

  redirectTo(path){
    this._r.navigate([path])
  }

  addContact() {
    let con = this.reg.get('contact') as FormArray;
    con.push(this.initContact());
  }

  removeContact(i) {
    if (confirm("Are you sure to remove contact number row " + i)) {
      let con = this.reg.get('contact') as FormArray;
      con.removeAt(i);
    }
  }


  ngOnInit() {
    let id = this._ar.snapshot.params.id
    this._ser.getRecord(id).subscribe((res) => {
      this.response = res;
      //console.log("Type of Response====>",typeof(this.response))
      let ar = []
      for (let i = 0; i < res['contact'].split(",").length; i++) {
        ar.push({ "mobile": res['contact'].split(",")[i] })
        if (i < res['contact'].split(",").length - 1) {
          this.addContact();
        }
      }
      res['contact'] = ar;
      // console.log("===========",res,this.reg.value)
      this.reg.patchValue(res);
    })
  }

}

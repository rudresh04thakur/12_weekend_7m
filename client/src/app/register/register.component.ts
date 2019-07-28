import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { AllService } from '../all.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login-page/login-page.component.css']
})
export class RegisterComponent implements OnInit {
  reg: FormGroup;
  formSubmitted = false;
  response;

  constructor(private _fb: FormBuilder, private _ser: AllService,
    private _ar: ActivatedRoute, private _r: Router) {
    this.reg = this._fb.group({
      id: [""],
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

  redirectTo(path) {
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


  register(data) {
    if (data.value.id != "") {
      this._ser.update(data.value).subscribe((res) => {
        console.log("Update ", res);
        this.response = res
        if (res['code'] == 'true') {
          $('#myModal').modal('show');
        }
      })
    } else {

      this.formSubmitted = true;
      if (data.invalid) {
        console.log("Inalid Form")
      } else {
        //console.log("Data for Register ", data.value)
        this._ser.register(data.value).subscribe((res) => {
          console.log("Response from API ", res)
        })
      }
    }
  }

  ngOnInit() {
    let id = this._ar.snapshot.params.id
    if (id != undefined) {
      this._ser.getRecord(id).subscribe((res) => {
        this.response = res;

        let ar = [];
        for (let i = 0; i < res['contact'].split(",").length; i++) {
          ar.push({ 'mobile': res['contact'].split(",")[i] });
          if (i < res['contact'].split(",").length - 1) {
            this.addContact()
          }
        }
        res['contact'] = ar;
        this.reg.patchValue(res);

      })
    }
  }

}

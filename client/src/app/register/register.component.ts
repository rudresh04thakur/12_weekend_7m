import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { AllService } from '../all.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap';
import { ConsoleLoggerService } from '../console-logger.service';
import { tap, filter, } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login-page/login-page.component.css'],

})
export class RegisterComponent implements OnInit {
  reg: FormGroup;
  @ViewChild('file') proFile

  person = { name: "demo" }

  formSubmitted = false;
  response;
  demoArray = ['Gopal', '23', 'Ganesh', 'Mahesh']
  constructor(private _fb: FormBuilder, private _ser: AllService,
    private _ar: ActivatedRoute, private _r: Router, private _logger: ConsoleLoggerService) {

    this.demoArray.map((e) => {
      console.log("Demo ================", e, this.person.name, this.person['name'])
    })


    of(1, 2, 3, 4).pipe(tap(el => console.log("Process " + el))).subscribe(el => console.log("Even number: " + el));



    this.reg = this._fb.group({
      id: [""],
      proFile: [],
      name: ["Gopal", [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      contact: this._fb.array([this.initContact()]),
      email: ["gopal@thakur.com", [Validators.required, Validators.pattern('[A-Za-z_]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}')]],
      password: ["12345", [Validators.required]],
    })
  }


  selectFile() {
    this.proFile.nativeElement.click();
  }

  imagePath = "";
  imgURL;
  previewFile(files) {
    files = files.target.files
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert("Only images are supported.");
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
    this.reg.controls.proFile.patchValue(files[0]);
  }
  demoCC(){
    console.log("==================",window.location.origin)
  }
  onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }




  initContact() {
    return this._fb.group({
      mobile: ["8983939246", [Validators.required, Validators.pattern('[0-9]{10}')]]
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

  successRes = false
  register(data) {
    if (data.value.id != "") {
      this._ser.update(data.value).subscribe((res) => {
        this._logger.error("Update ", res);
        this.response = res
        if (res['code'] == 'true') {
          $('#myModal').modal('show');
        }
      })
    } else {

      this.formSubmitted = true;
      if (data.invalid) {
        console.error("Inalid Form")
      } else {
        //console.log("Data for Register ", data.value)
        this._ser.register(data.value).subscribe((res) => {
          console.log("Response from API ", res)
          this.response = res
          if (res['code'] == 'true') {
            this.successRes = true
            alert("Register Successful");
            this._r.navigate(['/list'])
            $('#myModal').modal('show');
          } else {
            this.successRes = false
          }
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
  parentDemo(event) {
    alert("Call from child")
    console.log("Hi ", event)
  }


}



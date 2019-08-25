import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service'
import * as $ from 'jquery';
import 'bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private _ser: AllService, private _r: Router) { }
  response;

  redirectTo(path) {
    this._r.navigate([path])
  }

  ngOnInit() {
    this._r.events.subscribe(() => {
      this._ser.list().subscribe((res) => {
        console.log("List => ", res)
        this.response = res;
      })
    })
    this._ser.list().subscribe((res) => {
      console.log("List => ", res)
      this.response = res;
    })

    this._ser.list().subscribe(() => { })
  }

  // promis('ur',da).then(()=>{
  // success:()=>{}
  // error:()=>{}
  // complete:()=>{}
  // }).catch(()=>{})


}

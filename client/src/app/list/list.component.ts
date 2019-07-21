import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _ser:AllService) { }
  response;
  ngOnInit() {
    this._ser.list().subscribe((res)=>{
      console.log("List => ",res)
      this.response = res;
    })
  }



}

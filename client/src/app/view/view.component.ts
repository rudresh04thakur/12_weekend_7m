import { Component, OnInit } from '@angular/core';
import {AllService } from '../all.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _ser:AllService,private _ar:ActivatedRoute) { }
  response;
  ngOnInit() {
    let id = this._ar.snapshot.params.id
    this._ser.getRecord(id).subscribe((res)=>{
      this.response = res;
      console.log("Type of Response====>",typeof(this.response))
    })
  }

}

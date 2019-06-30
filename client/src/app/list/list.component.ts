import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _ser:AllService) { }
  username;
  response;
  ngOnInit() {
  }

  search(data){
    console.log("User Name to Search", data)
    this._ser.gitAPI(data.search).subscribe((res)=>{
      this.response = res;
    })
  }

}

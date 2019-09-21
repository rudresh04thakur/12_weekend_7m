import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  @Input('msg') msg 
  @Output() clickDemo = new EventEmitter()
  massege = "OK"
  constructor() { }

  ngOnInit() {
    this.massege = this.msg;
  }

  Demo(m){
    this.clickDemo.emit(m)
  }

}

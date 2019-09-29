import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  imagePath = "../../assets/";
  constructor() { }

  ngOnInit() {
    console.log("Hi this is demo")
  }

}

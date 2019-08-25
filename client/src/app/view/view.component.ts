import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _ser: AllService, private _ar: ActivatedRoute, private _r: Router) { }
  response;
  ngOnInit() {
    this._r.events.subscribe(() => {
      let id = this._ar.snapshot.params.id
      this._ser.getRecord(id).subscribe((res) => {
        this.response = res;
      })
    })
    let id = this._ar.snapshot.params.id
    this._ser.getRecord(id).subscribe((res) => {
      this.response = res;
    })
  }

}

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = ''
  hideHeader = ['/login','/register']
  constructor(private _r: Router) {
    this._r.events.subscribe(() => {
      this.url = this._r.url
    })
  }
}

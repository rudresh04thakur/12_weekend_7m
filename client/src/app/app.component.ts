import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { ConsoleLoggerService } from './console-logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url = ''
  hideHeader = ['/login', '/register']



  constructor(private _r: Router, private logger: ConsoleLoggerService) {

    // Incorrect source file name and line number :(
    // this.logger.invokeConsoleMethod('info', 'AppComponent: logger.invokeConsoleMethod()');
    // this.logger.invokeConsoleMethod('warn', 'AppComponent: logger.invokeConsoleMethod()');
    // this.logger.invokeConsoleMethod('error', 'AppComponent: logger.invokeConsoleMethod()');
  
      // this.logger.save({ "type": 'info', "log": "Log " }).subscribe((res) => {
      //   this.logger.info("Information ", res)
      // })
  
    // Correct source file name and line number :)
    // this.logger.info('This is information');
    // this.logger.warn('this is warning');
    // this.logger.error('this is error');

    localStorage.setItem("Id", "GB_2")
    this._r.events.subscribe(() => {
      this.url = this._r.url
    })
  }
}

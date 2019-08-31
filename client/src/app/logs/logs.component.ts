import { Component, OnInit, HostListener } from '@angular/core';
import { ConsoleLoggerService } from '../console-logger.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor(private logger:ConsoleLoggerService) { }
  logs;
  MaxCount = 0;
  ngOnInit() {
    this.logger.getLogs(0,25).subscribe((res)=>{
      this.logs = res['logs'];
      console.log("logs ==>",res['logs'])
      this.MaxCount= res['count']
    })
  }
  counter = 1;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = document.documentElement.scrollTop;
    let max = screen.height;
    console.log("Position",pos,"Max",max-10)
    if(pos>(max-10)){
      this.logger.getLogs(0,this.counter*25).subscribe((res)=>{
        this.logs = res['logs'];
        console.log("logs ==>",res['logs'])
      })
      this.counter++;
    }
  }

}

import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class TimerComponent implements OnInit, AfterViewInit {
  textValue: string= "Pause";


  constructor() { }
 
   @Input() timerValue!: number;
   startTime: boolean= false;
   interval : any;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   this.startTime = true;
   this.startTimer();
}

startTimer() {
  this.interval =  setInterval(() => {
    if(this.timerValue > 0 && this.startTime) {
      this.timerValue--;
    } 
  },1000)
}
pauseTime(){
  clearInterval(this.interval);
    this.startTime = !this.startTime;
    this.textValue = this.startTime? "Pause": "Play"
    if(this.startTime)  this.startTimer();
    
  }


}

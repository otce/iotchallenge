import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eiotc';
  intervalId = 0;
  message = '';
  countDownDate = new Date(2020, 4, 17, 8, 0, 0).getTime();
   days={
     x:0,
     y:0
   } ;
   hours={
    x:0,
    y:0
  };
   minutes={
    x:0,
    y:0
  };
   seconds={
    x:0,
    y:0
  };

  ngOnInit()    { this.start(); }

  start() { this.countDown(); }

  private countDown() {
   this.intervalId = window.setInterval(() => {
       // Get today's date and time
   let now = new Date().getTime();

   // Find the distance between now and the count down date
   let distance = this.countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   this.days.x = Math.floor(distance / (1000 * 60 * 60 * 24*10));
   this.days.y = Math.floor(distance / (1000 * 60 * 60 * 24))%10;
   this.hours.x = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60*10));
   this.hours.y = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))%10;
   this.minutes.x = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60*10));
   this.minutes.y = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))%10;
   this.seconds.x = Math.floor((distance % (1000 * 60)) / 10000);
   this.seconds.y = Math.floor((distance % (1000 * 60)) / 1000)%10;

}, 1000);
 
   
  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
})
export class DigitalClockComponent implements OnInit {
  am_pm: string;
  day: string;
  hour: any;
  minute: string;
  date = new Date();
  private days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  second: string;
  
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.date = new Date();
      this.updateDate(this.date);
    }, 1000);
    // getDay() returns integer that correspond to the date array.
    this.day = this.days[this.date.getDay()];
  }

  private updateDate(date: Date) {
    const hours = date.getHours();
    this.am_pm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12; // 12 hours format
    this.hour = this.hour ? this.hour : 12; // if hour is 0 then assign 12
    //this.hour = this.hour < 10 ? '0' + this.hour : this.hour; // if hour is single digit add 0 in front
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString(); // if minute is single digit add 0 in front
    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString(); // if second is single digit add 0 in front
  }
}

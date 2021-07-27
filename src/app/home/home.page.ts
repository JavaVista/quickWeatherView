import { Component } from '@angular/core';
import { Person, WeatherApiService } from '../service/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  persons: Person[] = [];
  today = new Date();
  isLoading: boolean;

  constructor(private weather: WeatherApiService) { }
  toggleClock: boolean

  ngOnInit(): void {
    this.currentDateTime();
  }

  currentDateTime() {
    setInterval(() => {
      this.today;
    }, 1000);
  }

  onClick() {
    this.isLoading = true;
    this.weather.getPersons().subscribe((data) => (this.persons = data));
  }

  onToggleClock() {
    this.toggleClock = !this.toggleClock
  }
}

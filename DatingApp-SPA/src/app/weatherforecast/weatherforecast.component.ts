import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.css']
})
export class WeatherforecastComponent implements OnInit {
  weatherforecast: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeatherForecasts();
  }

  getWeatherForecasts() {
    this.http.get('http://localhost:5000/weatherforecast').subscribe(
      response => {
        this.weatherforecast = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}

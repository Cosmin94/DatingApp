import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.css']
})
export class WeatherforecastComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getValues() {
    this.http.get('http://localhost:5000/weatherforecast').subscribe(
      response => {
        this.values = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}

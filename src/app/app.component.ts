import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService:WeatherService){

  }
  cityName:any='Wellington';
  weatherData?:WeatherData;
  ngOnInit(): void {
    
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
  onSubmit(){
this.getWeatherData(this.cityName);
this.cityName='';
 
  }
   getWeatherData(cityName:any){
    this.weatherService.getWeatherData(this.cityName)
    .subscribe({
      next:(response) =>{
        this.weatherData=response;
console.log(response)
      }
    })
  }
}

import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  lat: number;
  lng: number;
  zoomLevel = 16;

  constructor(geoService: GeolocationService) {
    geoService.getCurrentPosition().subscribe((position: Position) => {
      console.log('Location received from geolocationService', position);

      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }
}

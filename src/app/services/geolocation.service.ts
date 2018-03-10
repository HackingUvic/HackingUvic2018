import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeolocationService {

  getCurrentPosition() {
    return new Observable((observer) => {

      if (!navigator.geolocation) {
        observer.error('Geolocation not supported.');
      } else {
        navigator.geolocation.getCurrentPosition(
          function (position) {
              observer.next(position);
              observer.complete();
          },
          function (err) {
              observer.error(err);
          });
      }
    });
  }
}

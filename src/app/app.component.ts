import { PostFormComponent } from './post-form/post-form.component';
import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Post } from './classes/post';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  lat: number;
  lng: number;
  zoomLevel = 16;

  post: Post;

  constructor(public geoService: GeolocationService, public dialog: MatDialog) {

    // TODO: Load cached data
    geoService.getCurrentPosition().subscribe((position: Position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }

  openDialog() {
    console.log('Opening Dialog');

    const dialogRef = this.dialog.open(PostFormComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.post = result;
    });
  }
}

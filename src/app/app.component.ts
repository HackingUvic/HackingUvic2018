import { PostSubmitService } from './services/post-submit.service';
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

  constructor(public geoService: GeolocationService, public dialog: MatDialog, public postSubmitService: PostSubmitService) {

    // TODO: Load cached data
    geoService.getCurrentPosition().subscribe((position: Position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }

  openDialog() {
    console.log('Opening Dialog');

    const dialogRef = this.dialog.open(PostFormComponent);

    dialogRef.backdropClick().subscribe(() => {
      console.log('backdrop clicked');
    });

    dialogRef.afterClosed().subscribe(result => {
      this.post = result;

      if (this.post) {
        console.log(this.post);
        this.postSubmitService.savePost(this.post)
          .subscribe((response) => {
            console.log(response);
          });
      }
    });
  }
}

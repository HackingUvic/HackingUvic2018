import { GeolocationService } from './../services/geolocation.service';
import { Post } from './../classes/post';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Coordinate } from '../classes/coordinate';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post = new Post();

  constructor(public dialogRef: MatDialogRef<PostFormComponent>, public geoService: GeolocationService) {

    this.post.handle = '@HackUvic2018';

    // TODO: Load cached data
    geoService.getCurrentPosition().subscribe((position: Position) => {

      if (!position) {
        // TODO: Display error message
        return;
      }

      this.post.location = new Coordinate(position.coords.latitude, position.coords.longitude);
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {

    this.dialogRef.close(this.post);
  }

  onCancel(): void {
    console.log('No Click');
    this.dialogRef.close();
  }
}

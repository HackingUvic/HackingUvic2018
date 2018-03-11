import { PostSubmitService } from './../services/post-submit.service';
import { GeolocationService } from './../services/geolocation.service';
import { Post } from './../classes/post';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Coordinate } from '../classes/coordinate';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  post = new Post();

  @ViewChild('fileInput') fileInput: ElementRef;

  acceptedMimeTypes = [
    'image/gif',
    'image/jpeg',
    'image/png'
  ];

  constructor(
    public postSubmitService: PostSubmitService,
    public dialogRef: MatDialogRef<PostFormComponent>,
    public geoService: GeolocationService,
    private storage: AngularFireStorage) {

    this.post.handle = '@HackUvic2018';

    // TODO: Load cached data
    geoService.getCurrentPosition().subscribe((position: Position) => {

      if (!position) {
        // TODO: Display error message
        return;
      }

      this.post.latitude = position.coords.latitude;
      this.post.longitude = position.coords.longitude;
    });
  }

  uploadFile(event: Event) {
    event.preventDefault();

    const file = this.fileInput.nativeElement.files[0];
    const filePath = this.post.handle + Date.now();

    this.post.imageurl = filePath;
    this.post.id = filePath;
    this.post.status = 0;

    const task = this.storage.upload(filePath, file);

  }

  submitPost() {
    this.dialogRef.close(this.post);
  }

  onCancel() {
    this.dialogRef.close();
  }

  isValid() {
    return this.post.handle && this.post.description && this.fileInput.nativeElement.files[0];
  }
}

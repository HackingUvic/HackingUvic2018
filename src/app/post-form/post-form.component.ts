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

  updateFile() {
    this.post.imageurl = ' : ';
  }

  submitPost() {
    const file = this.fileInput.nativeElement.files[0];
    const filePath = this.guid();

    this.post.id = filePath;
    this.post.status = 0;

    const task = this.storage.upload(filePath, file).then(_ => {
      this.storage.storage.ref(this.post.id).getDownloadURL().then((value) => {
        this.post.imageurl = value;
        this.dialogRef.close(this.post);
      });
    });
  }

  guid() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

  onCancel() {
    this.dialogRef.close();
  }

  isValid() {
    return this.post.title && this.post.description && this.fileInput.nativeElement.files[0];
  }
}

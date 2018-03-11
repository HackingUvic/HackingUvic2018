import { Post } from './../classes/post';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post = new Post();

  constructor(public dialogRef: MatDialogRef<PostFormComponent>) {

  }

  ngOnInit() {
  }

  onNoClick(): void {
    console.log('No Click');
    this.dialogRef.close();
  }
}

import { PostSubmitService } from './../services/post-submit.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject} from '@angular/core';
import { Post } from '../classes/post';

@Component({
  selector: 'app-marker-details',
  templateUrl: './marker-details.component.html',
  styleUrls: ['./marker-details.component.css']
})
export class MarkerDetailsComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Post,
    public postSubmitService: PostSubmitService,
    public dialogRef: MatDialogRef<MarkerDetailsComponent>
  ) {
  }

  updateUrl(url: string) {
  }

  ngOnInit() {
  }

  completePost() {
    this.postSubmitService.removePost(this.data);
    this.dialogRef.close();
  }
}

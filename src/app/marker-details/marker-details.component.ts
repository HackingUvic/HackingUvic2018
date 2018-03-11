import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject} from '@angular/core';
import { Post } from '../classes/post';

@Component({
  selector: 'app-marker-details',
  templateUrl: './marker-details.component.html',
  styleUrls: ['./marker-details.component.css']
})
export class MarkerDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit() {
  }
}

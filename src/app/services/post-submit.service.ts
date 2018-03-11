import { Observable } from 'rxjs/Observable';
import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostSubmitService {

  constructor(private http: HttpClient) {

  }

  savePost(post: Post) {

    return new Observable((observer) => {
      console.log('saving post');
      this.http.post<Post>('http://localhost:3000/api/posts/create', post).subscribe((result) => {
        console.log(result);
      });
    });
  }

}

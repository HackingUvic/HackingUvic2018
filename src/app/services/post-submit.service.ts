import { Observable } from 'rxjs/Observable';
import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PostSubmitService {

  posts: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {

    this.posts = db.list('/posts').valueChanges();
  }

  savePost(post: Post) {

    const postsRef = this.db.list('/posts');

    return postsRef.push(post);
  }

}

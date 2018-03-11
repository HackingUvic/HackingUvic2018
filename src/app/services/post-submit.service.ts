import { Observable } from 'rxjs/Observable';
import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PostSubmitService {

  posts: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {

  }

  getPosts(): Observable<Post[]> {
    return this.db.list<Post>('/posts').valueChanges();
  }

  savePost(post: Post) {

    const postsRef = this.db.object(`/posts/${post.id}`);

    return postsRef.update(post);
  }

}

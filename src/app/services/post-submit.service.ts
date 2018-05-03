import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Post } from './../classes/post';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PostSubmitService {

  posts: Observable<any[]>;

  constructor(public db: AngularFireDatabase, public storage: AngularFireStorage) {

  }

  getPosts(): Observable<Post[]> {
    return this.db.list<Post>('/posts').valueChanges();
  }

  savePost(post: Post) {

    const postsRef = this.db.object(`/posts/${post.id}`);

    return postsRef.update(post);
  }

  getUrl(post: Post) {
    return new Observable((observer) => {
      this.storage.storage.ref(post.id).getDownloadURL().then((value) => {
        observer.next(value);
      });
    });
  }

  removePost(post: Post) {
    const postRef = this.db.object(`/posts/${post.id}`);
    postRef.remove();
  }
}

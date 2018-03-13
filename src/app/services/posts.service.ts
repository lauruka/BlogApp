import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  listPost;

  constructor(private http: HttpClient) { }

  createPost(comment, author) {
    let post = {
      title: 'some title',
      content: comment,
      author: author,
      date: 'some date'
    };

    return this.http
    .post('https://blog-system-api.herokuapp.com/add', post)
    .toPromise();
  }

  getAllPosts() {
    return this.http
    .get('https://blog-system-api.herokuapp.com/')
    .toPromise();
  }

  deletePost(id) {
    return this.http
    .delete('https://blog-system-api.herokuapp.com/delete/' + id)
    .toPromise()
  }
}

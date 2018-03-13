import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  comment;
  author;

  constructor(private postsService: PostsService) { }

  @Output()
  newPost = new EventEmitter<Object>();

  ngOnInit() {
  }

  createPost() {
    console.log(this.comment + " " + this.author);

    this.postsService
    .createPost(this.comment, this.author)
    .then(data => {
      console.log('createPost callback');
      this.newPost.emit(data);
      this.comment = '';
      this.author = '';
    });
  }
}

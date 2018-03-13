import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  listPost;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.postsService.getAllPosts()
    .then(data => { 
      console.log('subscribe')
      this.listPost = data 
    });
  }
}

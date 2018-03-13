import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  @Input() 
  listPost;

  @Output()
  postDelete = new EventEmitter<Object>();

  ngOnInit() {
    console.log(this.listPost);
  }

  onPostDeleted() {
    this.postDelete.emit();
  }

  showStars = true;

}

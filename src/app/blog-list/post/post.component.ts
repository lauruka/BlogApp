import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  @Input() myPost;
  @Input() showStars;

  disabled = false;

  @Output() postDelete = new EventEmitter<Object>();

  deletePost() {
    this.disabled = true;
    this.postsService.deletePost(this.myPost.id)
    .then(data => {
      this.postDelete.emit()
    });
  }

}

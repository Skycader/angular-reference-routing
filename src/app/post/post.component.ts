import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  post: Post

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('Params: ', params);
      this.post = this.postsService.getById(+params.id)
    });
  }
}

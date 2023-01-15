import { Component, OnInit } from '@angular/core';
import { PostingService } from './posting.service';

@Component({
  template: `Posts component`,
  selector: 'app-posts',
})
export class PostingComponent implements OnInit {
  posts: any[] = [];
  message: string;

  constructor(private service: PostingService) {}

  ngOnInit(): void {
    this.service.fetch().subscribe((p) => {
      this.posts = p;
    });
  }

  add(title: string) {
    const post = { title };
    this.service.create(post).subscribe({
      next: (post) => this.posts.push(post),
      error: (err: string) => (this.message = err),
    });
  }

  delete(id: number) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe();
    }
  }
}

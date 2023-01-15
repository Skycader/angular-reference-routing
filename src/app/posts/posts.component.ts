import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  showId = false;
  constructor(
    protected postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.showId = !!params.showId;
    });

    this.route.fragment.subscribe(fragment => {
      console.log(fragment)
    })
  }
  

  showIds() {
    this.router.navigate(['/posts'],{
      queryParams: {
        showId: true
      },
      fragment: 'program-fragment'
    })
  }
}

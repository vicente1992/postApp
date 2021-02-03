import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {
    this.postsService.getPosts().subscribe(post => {
      this.posts = post;
    })
  }

  public postDetail(id: number) {
    this.router.navigate(['post', id]);
  }

}

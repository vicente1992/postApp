import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Post } from 'src/app/models/Post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-pos-detail',
  templateUrl: './pos-detail.component.html',
  styleUrls: ['./pos-detail.component.scss']
})
export class PosDetailComponent implements OnInit {

  public post: Post;
  public id: number;
  public lastDate: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
  ) {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.getPost(id);
    })
  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.postsService.getPost(id))
    ).subscribe( )


  }
  private getPost(id: number) {
    this.postsService.getPost(id).subscribe((post: Post) => {
      this.post = post;
      this.id = post.id;
    });
  }

  public getDate(event) {
    this.lastDate = event;
  }


}

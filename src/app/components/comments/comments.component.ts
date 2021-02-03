import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/Comment.interface';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() postId: number;
  @Output() LastDate: EventEmitter<string> = new EventEmitter();

  public comments: Comment[] = [];
  public date: string;
  constructor(
    private postsService: PostsService,
  ) {

    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let f = new Date();
    this.date = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
  }

  ngOnInit(): void {
    this.getPostComments(this.postId);

  }

  private getPostComments(id: number) {
    this.postsService.getCommentsPost(id).subscribe(comments => {
      this.comments = comments;
    })
  }
  public getDate() {
    this.LastDate.emit(this.date);
  }

}

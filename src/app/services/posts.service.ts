import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Comment } from '../models/Comment.interface';
import { Post } from '../models/Post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = environment.url_base;

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + `posts`);
  }
  public getPost(postId: number): Observable<Post> {
    return this.httpClient.get<Post>(this.url + `posts/${postId}`);
  }
  public getCommentsPost(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.url + `comments?postId=${postId}`);
  }
}

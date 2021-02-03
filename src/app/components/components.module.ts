import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentsComponent } from './comments/comments.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavbarComponent, CommentsComponent],
  exports: [NavbarComponent, CommentsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }

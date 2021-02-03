import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PostListComponent } from './post-list/post-list.component';
import { PosDetailComponent } from './pos-detail/pos-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PostListComponent,
    PosDetailComponent,
    NotFoundComponent
  ],
  exports: [
    PostListComponent,
    PosDetailComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ]
})
export class PagesModule { }

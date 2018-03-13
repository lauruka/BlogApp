import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PostComponent } from './blog-list/post/post.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    PostComponent,
    AboutComponent,
    PageNotFoundComponent,
    CreatePostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

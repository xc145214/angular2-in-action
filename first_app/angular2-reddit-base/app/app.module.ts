import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArticleComponent } from './reddit-article.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }